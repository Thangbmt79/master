import { AppBar, Avatar, Toolbar } from '@mui/material';
import useMedia from '../../hooks/useMedia';
import { styled } from '../../theme/Tokens';
import { Breadcrumbs } from '../base/Breadcrumbs';
import { DRAWER_WIDTH, DRAWER_WIDTH_COLLAPSED } from './DrawerMenu';
import { BreadcrumbItem } from './BasePage';

interface AppHeaderProps {
    breadcrumbs: BreadcrumbItem[];
    onBreadcrumbNavigate?: (path: string) => void;
    avatarUrl?: string;
    onAvatarClick?: () => void;
}

export const AppHeader = ({ breadcrumbs, onBreadcrumbNavigate, avatarUrl, onAvatarClick }: AppHeaderProps) => {
    const { isMobileSM } = useMedia();
    const drawerWidth = isMobileSM ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH;

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
                backgroundColor: styled.colors.background.default,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Breadcrumbs items={breadcrumbs} onNavigate={onBreadcrumbNavigate} />

                {!isMobileSM && (
                    <Avatar
                        src={avatarUrl}
                        onClick={onAvatarClick}
                        sx={{
                            cursor: onAvatarClick ? 'pointer' : 'default',
                            width: 40,
                            height: 40,
                        }}
                    />
                )}
            </Toolbar>
        </AppBar>
    );
};
