import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    Typography,
    styled as muiStyled,
} from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { styled } from '../../theme/Tokens';
import ScrollableBoxCustom from './ScrollableBoxCustom';

export interface BasePopupProps {
    open: boolean;
    onClickClose?(): void;
    onClose: () => void;
    title: string;
    subtitle?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    disableConfirm?: boolean;
    hideActions?: boolean;
}

const StyledDialog = muiStyled(Dialog)({
    '& .MuiDialog-paper': {
        display: 'flex',
        flexDirection: 'column',
        margin: '16px',
    },
    '& .MuiAutocomplete-popper': {
        zIndex: 1301,
    },
});

const StyledDialogTitle = muiStyled(DialogTitle)({
    padding: '24px',
    marginBottom: '24px',
    borderBottom: `1px solid ${styled.colors.neutral['02']}`,
});

const StyledDialogContent = muiStyled(DialogContent)({
    overflow: 'auto',
    width: '100%',
});

const StyledDialogActions = muiStyled(DialogActions)({
    padding: '16px 24px',
    borderTop: `1px solid ${styled.colors.neutral['02']}`,
    justifyContent: 'space-between',
});

export const BasePopup: React.FC<PropsWithChildren<BasePopupProps>> = ({
    open,
    onClose,
    onClickClose,
    title,
    subtitle,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    onConfirm,
    onCancel,
    maxWidth = 'sm',
    disableConfirm = false,
    hideActions = false,
    children,
}) => {
    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
        onClose();
    };

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
        onClose();
    };

    return (
        <StyledDialog
            open={open}
            onClose={onClickClose ?? undefined}
            maxWidth={maxWidth}
            fullWidth
            disableEscapeKeyDown
        >
            <StyledDialogTitle>
                <Stack spacing={1} textAlign={'center'}>
                    <Typography variant="h2" color={styled.colors.text.primary}>
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography variant="body2" color={styled.colors.text.secondary}>
                            {subtitle}
                        </Typography>
                    )}
                </Stack>
            </StyledDialogTitle>

            <StyledDialogContent>
                <ScrollableBoxCustom maxHeight={'60vh'}>{children}</ScrollableBoxCustom>
            </StyledDialogContent>

            {!hideActions && (
                <StyledDialogActions>
                    <Button variant="contained" color="cancel" onClick={handleCancel} sx={{ minWidth: '130px' }}>
                        {cancelLabel}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleConfirm}
                        disabled={disableConfirm}
                        sx={{ minWidth: '130px' }}
                    >
                        {confirmLabel}
                    </Button>
                </StyledDialogActions>
            )}
        </StyledDialog>
    );
};
