import { Box } from '@mui/material';
import React from 'react';
import { styled } from '../../theme/Tokens';
import { BreadcrumbItem } from '../base/Breadcrumbs';
import ScrollableBoxCustom from '../base/ScrollableBoxCustom';
import { AppHeader } from './AppHeader';
import { DrawerMenu } from './DrawerMenu';

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
                    p: 2,
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
                        mt: `${HEADER_HEIGHT}px`,
                        px: styled.spacing.lg,
                        py: styled.spacing.lg,
                        height: `calc(100% - ${HEADER_HEIGHT}px)`,
                        borderRadius: styled.borderRadius.sm,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: styled.spacing.lg,
                        }}
                    >
                        {pageTitle}
                        {pageAction}
                    </Box>

                    <ScrollableBoxCustom>{children}</ScrollableBoxCustom>
                </Box>
            </Box>
        </Box>
    );
};
