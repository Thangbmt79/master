import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    Box,
    CircularProgress,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    Popper,
    Skeleton,
    Typography,
} from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { tokens } from '../../theme/Tokens';
import { BaseTextField, BaseTextFieldProps } from './BaseTextField';

// Types for API and hardcoded options
export interface BaseAutoCompleteOption {
    id: number | string;
    name: string;
    [key: string]: any;
}

export interface BaseAutoCompleteProps {
    value: BaseAutoCompleteOption | null;
    onChange: (value: BaseAutoCompleteOption | null) => void;
    options?: BaseAutoCompleteOption[];
    fetchOptions?: (params: {
        search: string;
        page: number;
        pageSize: number;
    }) => Promise<{ data: BaseAutoCompleteOption[]; hasMore: boolean }>;
    label?: string;
    placeholder?: string;
    required?: boolean;
    pageSize?: number;
    disabled?: boolean;
    getOptionLabel?: (option: BaseAutoCompleteOption) => string;
    renderOption?: (option: BaseAutoCompleteOption) => React.ReactNode;
    // ...other BaseTextFieldProps
    textFieldProps?: Omit<BaseTextFieldProps, 'label' | 'placeholder' | 'required'>;
}

const DEFAULT_PAGE_SIZE = 20;

export const BaseAutoComplete: React.FC<BaseAutoCompleteProps> = ({
    value,
    onChange,
    options: staticOptions,
    fetchOptions,
    label,
    placeholder,
    required,
    pageSize = DEFAULT_PAGE_SIZE,
    disabled,
    getOptionLabel = (option) => option?.name ?? '',
    renderOption,
    textFieldProps,
}) => {
    const [inputValue, setInputValue] = useState('');
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<BaseAutoCompleteOption[]>(staticOptions || []);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [noMore, setNoMore] = useState(false);
    const anchorRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLUListElement | null>(null);
    const debounceTimeout = useRef<number | null>(null);
    const lastSearch = useRef('');

    // Debounced search
    useEffect(() => {
        if (!fetchOptions) return;
        setLoading(true);
        setPage(1);
        setNoMore(false);
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        debounceTimeout.current = setTimeout(() => {
            fetchOptions({ search: inputValue, page: 1, pageSize })
                .then((res) => {
                    setOptions(res.data);
                    setHasMore(res.hasMore);
                    setNoMore(!res.hasMore && res.data.length > 0);
                })
                .finally(() => setLoading(false));
            lastSearch.current = inputValue;
        }, 300);
        return () => {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue, fetchOptions, pageSize]);

    // Infinite scroll fetch more
    const handleScroll = useCallback(
        (e: React.UIEvent<HTMLUListElement>) => {
            if (!fetchOptions || loadingMore || !hasMore) return;
            const list = e.currentTarget;
            if (list.scrollHeight - list.scrollTop - list.clientHeight < 60) {
                setLoadingMore(true);
                fetchOptions({ search: lastSearch.current, page: page + 1, pageSize })
                    .then((res) => {
                        setOptions((prev) => [...prev, ...res.data]);
                        setHasMore(res.hasMore);
                        setNoMore(!res.hasMore);
                        setPage((p) => p + 1);
                    })
                    .finally(() => setLoadingMore(false));
            }
        },
        [fetchOptions, loadingMore, hasMore, page, pageSize]
    );

    // Reset options if staticOptions change
    useEffect(() => {
        if (!fetchOptions && staticOptions) {
            setOptions(staticOptions);
        }
    }, [staticOptions, fetchOptions]);

    // Open/close logic
    const handleInputFocus = () => setOpen(true);
    const handleInputBlur = () => setTimeout(() => setOpen(false), 150);

    // Option select
    const handleOptionClick = (option: BaseAutoCompleteOption) => {
        onChange(option);
        setOpen(false);
    };

    // Scroll to selected item when dropdown opens
    useEffect(() => {
        if (open && value && listRef.current) {
            const idx = options.findIndex((opt) => opt.id === value.id);
            if (idx >= 0) {
                const item = listRef.current.children[idx] as HTMLElement;
                if (item) {
                    item.scrollIntoView({ block: 'nearest' });
                }
            }
        }
    }, [open, value, options]);

    // Quản lý inputValue độc lập, chỉ hiển thị inputValue khi chưa chọn hoặc đang gõ search mới
    const displayValue = value ? getOptionLabel(value) : inputValue;

    return (
        <Box ref={anchorRef} sx={{ width: '100%' }}>
            <BaseTextField
                {...(textFieldProps || {})}
                label={label}
                placeholder={placeholder}
                required={required}
                value={displayValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    if (!fetchOptions && staticOptions) {
                        setOptions(
                            staticOptions.filter((opt) =>
                                getOptionLabel(opt).toLowerCase().includes(e.target.value.toLowerCase())
                            )
                        );
                    }
                    // Khi user gõ, clear lựa chọn cũ
                    if (value) onChange(null);
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={disabled}
                InputProps={{
                    ...((textFieldProps && textFieldProps.InputProps) || {}),
                    endAdornment: (
                        <InputAdornment position="end">
                            {loading ? (
                                <CircularProgress size={22} sx={{ color: tokens.colors.text.secondary }} />
                            ) : (
                                <ArrowDropDownIcon sx={{ color: tokens.colors.text.secondary, fontSize: 22 }} />
                            )}
                        </InputAdornment>
                    ),
                }}
                sx={{ width: '100%' }}
                autoComplete="off"
            />
            {open && (
                <Popper
                    open
                    anchorEl={anchorRef.current}
                    placement="bottom-start"
                    style={{ zIndex: 1300, width: anchorRef.current?.offsetWidth }}
                    modifiers={[
                        {
                            name: 'width',
                            enabled: true,
                            phase: 'beforeWrite',
                            fn: ({ state }) => {
                                state.styles.popper.width = `${anchorRef.current?.offsetWidth || 0}px`;
                            },
                        },
                    ]}
                >
                    <Paper elevation={3} sx={{ backgroundColor: tokens.colors.neutral['02'] }}>
                        <List
                            ref={listRef}
                            onScroll={handleScroll}
                            sx={{
                                p: 0,
                                maxHeight: 300,
                                overflow: 'auto',
                            }}
                        >
                            {!loading && options.length === 0 && (
                                <ListItem>
                                    <Typography variant="body2">No options</Typography>
                                </ListItem>
                            )}
                            {!loading &&
                                options.map((option) => (
                                    <ListItemButton
                                        key={option.id}
                                        selected={value?.id === option.id}
                                        onMouseDown={() => handleOptionClick(option)}
                                    >
                                        {renderOption ? (
                                            renderOption(option)
                                        ) : (
                                            <ListItemText primary={getOptionLabel(option)} />
                                        )}
                                    </ListItemButton>
                                ))}
                            {(loadingMore || loading) && (
                                <>
                                    <ListItem>
                                        <Skeleton variant="rectangular" width="100%" height={32} />
                                    </ListItem>
                                    <ListItem>
                                        <Skeleton variant="rectangular" width="100%" height={32} />
                                    </ListItem>
                                </>
                            )}
                            {noMore && !loadingMore && loading && (
                                <ListItem>
                                    <Typography variant="body2" color="text.secondary">
                                        No more
                                    </Typography>
                                </ListItem>
                            )}
                        </List>
                    </Paper>
                </Popper>
            )}
        </Box>
    );
};

// --- Mock API for demo ---
export async function mockFetchProducts({
    search,
    page,
    pageSize,
}: {
    search: string;
    page: number;
    pageSize: number;
}) {
    // Using dummyjson.com/products as a public API
    const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}&limit=${pageSize}&skip=${
        (page - 1) * pageSize
    }`;
    const res = await fetch(url);
    const data = await res.json();
    // Map to {id, name}
    const items = (data.products || []).map((p: any) => ({ id: p.id, name: p.title, ...p }));
    return {
        data: items,
        hasMore: (data.total || 0) > page * pageSize,
    };
}
