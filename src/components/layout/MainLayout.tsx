import { Box, Stack } from '@mui/material';
import React from 'react';
import { styled } from '../../theme/Tokens';
import ScrollableBoxCustom from '../base/ScrollableBoxCustom';
import { AppHeader } from './AppHeader';
import { DrawerMenu } from './DrawerMenu';
import useMedia from '../../hooks/useMedia';
import { BreadcrumbItem } from './BasePage';

interface MainLayoutProps {
    selectedMenuId: string;
    onMenuSelect: (id: string) => void;
    breadcrumbs: BreadcrumbItem[];
    onBreadcrumbNavigate?: (path: string) => void;
    avatarUrl?: string;
    onAvatarClick?: () => void;
    children: React.ReactNode;
    pageTitle: React.ReactNode;
    pageAction?: React.ReactNode;
}

const HEADER_HEIGHT = 64;
const HEADER_HEIGHT_MOBILE = 56;

export const MainLayout = ({
    selectedMenuId,
    onMenuSelect,
    breadcrumbs,
    onBreadcrumbNavigate,
    avatarUrl,
    onAvatarClick,
    children,
    pageTitle,
    pageAction,
}: MainLayoutProps) => {
    const { isMobileSM } = useMedia();
    const headerHeight = isMobileSM ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT;
    return (
        <Box sx={{ display: 'flex', height: '100vh', bgcolor: styled.colors.primary.background }}>
            <DrawerMenu selectedId={selectedMenuId} onSelect={onMenuSelect} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    p: isMobileSM ? 1 : 2,
                }}
            >
                <AppHeader
                    breadcrumbs={breadcrumbs}
                    onBreadcrumbNavigate={onBreadcrumbNavigate}
                    avatarUrl={avatarUrl}
                    onAvatarClick={onAvatarClick}
                />
                <Box
                    sx={{
                        bgcolor: styled.colors.primary.main,
                        border: `1px solid ${styled.colors.neutral['03']}`,
                        mt: `${headerHeight}px`,
                        px: isMobileSM ? styled.spacing.md : styled.spacing.lg,
                        py: isMobileSM ? styled.spacing.md : styled.spacing.lg,
                        height: `calc(100% - ${headerHeight}px)`,
                        borderRadius: styled.borderRadius.sm,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                >
                    <Stack
                        direction={isMobileSM ? 'column' : 'row'}
                        justifyContent="space-between"
                        mb={isMobileSM ? styled.spacing.md : styled.spacing.lg}
                        spacing={!isMobileSM ? 0 : styled.spacing.md}
                    >
                        {pageTitle}
                        {pageAction}
                    </Stack>

                    <ScrollableBoxCustom>{children}</ScrollableBoxCustom>
                </Box>
            </Box>
        </Box>
    );
};
