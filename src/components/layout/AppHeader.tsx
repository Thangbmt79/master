import { AppBar, Avatar, Toolbar } from '@mui/material';
import { tokens } from '../../theme/Tokens';
import { BreadcrumbItem, Breadcrumbs } from '../base/Breadcrumbs';

interface AppHeaderProps {
    breadcrumbs: BreadcrumbItem[];
    onBreadcrumbNavigate?: (path: string) => void;
    avatarUrl?: string;
    onAvatarClick?: () => void;
}

const DRAWER_WIDTH = 280;

export const AppHeader = ({ breadcrumbs, onBreadcrumbNavigate, avatarUrl, onAvatarClick }: AppHeaderProps) => {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                width: `calc(100% - ${DRAWER_WIDTH}px)`,
                ml: `${DRAWER_WIDTH}px`,
                backgroundColor: tokens.colors.background.default,
                // borderBottom: `1px solid ${tokens.colors.neutral['03']}`,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Breadcrumbs items={breadcrumbs} onNavigate={onBreadcrumbNavigate} />

                <Avatar
                    src={avatarUrl}
                    onClick={onAvatarClick}
                    sx={{
                        cursor: onAvatarClick ? 'pointer' : 'default',
                        width: 40,
                        height: 40,
                    }}
                />
            </Toolbar>
        </AppBar>
    );
};
