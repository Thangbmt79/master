import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import AudiHeaderIcon from '../../assets/layout-icon/AudiHeaderIcon';
import { menuItems } from '../../constants/menuItems';
import { styled } from '../../theme/Tokens';
import TooltipIconButton from '../base/tooltip/TooltipIconButton';

interface DrawerMenuProps {
    selectedId: string;
    onSelect: (id: string) => void;
}

const DRAWER_WIDTH = 280;
const DRAWER_WIDTH_COLLAPSED = 80;

export const DrawerMenu = ({ selectedId, onSelect }: DrawerMenuProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const drawerWidth = isMobile ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH;

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: styled.colors.background.default,
                    borderRight: 'none',
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                },
            }}
        >
            {!isMobile && (
                <Box
                    sx={{
                        height: 64,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        px: styled.spacing.md,
                    }}
                >
                    <AudiHeaderIcon />
                    <Typography
                        variant="h6"
                        sx={{
                            ml: '12px',
                            color: styled.colors.text.primary,
                            fontSize: styled.typography.h2.fontSize,
                            fontWeight: styled.typography.h2.fontWeight,
                        }}
                    >
                        Audi
                    </Typography>
                </Box>
            )}

            <List sx={{ mt: styled.spacing.md, px: styled.spacing.sm }}>
                {menuItems.map((item) =>
                    isMobile ? (
                        <Box
                            key={item.id}
                            sx={{
                                mb: 3,
                                display: 'flex',
                                justifyContent: 'center',
                                '& .MuiIconButton-root': {
                                    width: 40,
                                    height: 40,
                                    '& svg': {
                                        width: 24,
                                        height: 24,
                                    },
                                },
                            }}
                        >
                            <TooltipIconButton
                                icon={item.icon}
                                tooltipTitle={item.title}
                                onClick={() => onSelect(item.id)}
                                placement="right"
                            />
                        </Box>
                    ) : (
                        <ListItem
                            key={item.id}
                            button
                            selected={item.id === selectedId}
                            onClick={() => onSelect(item.id)}
                            sx={{
                                borderRadius: styled.borderRadius.sm,
                                mb: 1,
                                '&.Mui-selected': {
                                    backgroundColor: styled.colors.action.selected,
                                    '&:hover': {
                                        backgroundColor: styled.colors.action.selected,
                                    },
                                },
                                '&:hover': {
                                    backgroundColor: styled.colors.action.hover,
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color:
                                        item.id === selectedId
                                            ? styled.colors.text.primary
                                            : styled.colors.text.secondary,
                                    minWidth: 40,
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.title}
                                sx={{
                                    '& .MuiListItemText-primary': {
                                        color:
                                            item.id === selectedId
                                                ? styled.colors.text.primary
                                                : styled.colors.text.secondary,
                                    },
                                }}
                            />
                        </ListItem>
                    )
                )}
            </List>
        </Drawer>
    );
};
