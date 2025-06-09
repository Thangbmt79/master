import { Box, InputAdornment, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import SearchValueIcon from '../assets/layout-icon/SearchValueIcon';
import { BaseAutoComplete, BaseAutoCompleteOption } from '../components/base/BaseAutoComplete';
import { BaseTextField } from '../components/base/BaseTextField';
import { BasePage } from '../components/layout/BasePage';
import { ParkingSpaceItem } from '../components/parking/ParkingSpaceItem';
import useMedia from '../hooks/useMedia';
import { useNavigate } from 'react-router-dom';

const PAGE_SIZE = 5;

async function fetchParkingSpaces({ search, page }: { search: string; page: number; location?: string }) {
    const skip = (page - 1) * PAGE_SIZE;
    let url = `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}&limit=${PAGE_SIZE}&skip=${skip}`;
    const res = await fetch(url);
    const data = await res.json();
    return {
        data: (data.products || []).map((p: any) => ({
            id: p.id,
            name: p.title,
            location: p.brand || 'Miami, FL',
            type: p.category === 'smartphones' ? 'Indoor' : 'Outdoor',
            floor: p.id % 2 === 0 ? '4' : undefined,
        })),
        total: data.total || 0,
    };
}

async function fetchLocationOptions({ search }: { search: string }) {
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const data = await res.json();
    const brands = Array.from(new Set((data.products || []).map((p: any) => p.brand))).filter(Boolean) as string[];
    const filtered = brands
        .filter((b) => b.toLowerCase().includes(search.toLowerCase()))
        .map((b, idx) => ({ id: idx + 1, name: b }));
    return {
        data: [{ id: 0, name: 'All locations' }, ...filtered],
        hasMore: false,
    };
}

export const ParkingSpacePage = () => {
    const { isMobileSM } = useMedia();
    const navigate = useNavigate();

    const [spaces, setSpaces] = useState<any[]>([]);
    const [location, setLocation] = useState<BaseAutoCompleteOption | null>(null);
    const [search, setSearch] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        setLoading(true);
        fetchParkingSpaces({ search, page, location: location?.name })
            .then((res) => {
                setSpaces(res.data);
                setTotal(res.total);
            })
            .finally(() => setLoading(false));
    }, [search, page, location]);

    const totalPages = Math.ceil(total / PAGE_SIZE);

    return (
        <BasePage
            pageId="parking"
            title="Parking Space"
            actionButtonText="Add Parking"
            actionButtonProps={{ onClick: () => navigate('/parking/add') }}
        >
            <Stack direction={isMobileSM ? 'column' : 'row'} spacing={isMobileSM ? 1 : 2} my={isMobileSM ? 1 : 2}>
                <BaseTextField
                    placeholder="Search"
                    sx={{
                        width: '100%',
                        '& input': {
                            padding: 0,
                        },
                    }}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment
                                position="start"
                                sx={{
                                    mt: '0 !important',
                                }}
                            >
                                <SearchValueIcon />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <BaseAutoComplete
                    label="Location"
                    placeholder="All locations"
                    value={location}
                    onChange={(value) => {
                        setLocation(value);
                        setPage(1);
                    }}
                    fetchOptions={fetchLocationOptions}
                    required={false}
                />
            </Stack>
            <Box>
                {loading ? (
                    <div style={{ color: 'white', textAlign: 'center', margin: 32 }}>Loading...</div>
                ) : (
                    spaces.map((item) => (
                        <ParkingSpaceItem
                            key={item.id}
                            item={item}
                            onEdit={() => alert('Edit ' + item.name)}
                            onDelete={() => alert('Delete ' + item.name)}
                        />
                    ))
                )}
            </Box>
            <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
            />
        </BasePage>
    );
};
