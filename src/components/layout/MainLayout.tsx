import { Box } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme/tokens';
import { BreadcrumbItem } from '../base/Breadcrumbs';
import { AppHeader } from './AppHeader';
import { DrawerMenu, MenuItem } from './DrawerMenu';

interface MainLayoutProps {
    menuItems: MenuItem[];
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
    menuItems,
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
        <Box sx={{ display: 'flex', height: '100vh', bgcolor: tokens.colors.primary.background }}>
            <DrawerMenu items={menuItems} selectedId={selectedMenuId} onSelect={onMenuSelect} />

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
                        bgcolor: tokens.colors.primary.main,
                        border: `1px solid ${tokens.colors.neutral['03']}`,
                        mt: `${HEADER_HEIGHT}px`,
                        px: tokens.spacing.lg,
                        py: tokens.spacing.lg,
                        height: `calc(100% - ${HEADER_HEIGHT}px)`,
                        borderRadius: tokens.borderRadius.sm,
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: tokens.spacing.lg,
                            }}
                        >
                            {pageTitle}
                            {pageAction}
                        </Box>

                        {children}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
