import MenuIcon from '@mui/icons-material/Menu';
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
    Tooltip,
    Typography
} from '@mui/material';
import { useState } from 'react';
import AudiHeaderIcon from '../../assets/layout-icon/AudiHeaderIcon';
import { menuItems } from '../../constants/menuItems';
import useMedia from '../../hooks/useMedia';
import { styled } from '../../theme/Tokens';

interface DrawerMenuProps {
    selectedId: string;
    onSelect: (id: string) => void;
}

export const DRAWER_WIDTH = 280;
export const DRAWER_WIDTH_COLLAPSED = 60;

export const DrawerMenu = ({ selectedId, onSelect }: DrawerMenuProps) => {
    const { isMobileSM } = useMedia();
    const drawerWidth = isMobileSM ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const mobileDrawerContent = (
        <Box sx={{ width: DRAWER_WIDTH }}>
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
                    variant="h1"
                    sx={{
                        ml: '12px',
                    }}
                >
                    Audi
                </Typography>
            </Box>
            <List sx={{ mt: styled.spacing.md, px: styled.spacing.sm }}>
                {menuItems
                    .filter((item) => item.id !== 'menu')
                    .map((item) => (
                        <ListItem
                            key={item.id}
                            button
                            selected={item.id === selectedId}
                            onClick={() => {
                                onSelect(item.id);
                                handleDrawerToggle();
                            }}
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
                    ))}
            </List>
        </Box>
    );

    return (
        <>
            {isMobileSM && (
                <SwipeableDrawer
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    onOpen={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        '& .MuiDrawer-paper': {
                            backgroundColor: styled.colors.background.default,
                        },
                    }}
                >
                    {mobileDrawerContent}
                </SwipeableDrawer>
            )}
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
                    },
                }}
            >
                {!isMobileSM && (
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

                <List sx={{ px: styled.spacing.sm }}>
                    {menuItems
                        .filter((item) => (isMobileSM ? true : item.id !== 'menu'))
                        .map((item) =>
                            isMobileSM ? (
                                <Box
                                    key={item.id}
                                    sx={{
                                        padding: 1,
                                        borderRadius: styled.borderRadius.sm,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        backgroundColor:
                                            item.id === selectedId ? styled.colors.action.selected : 'transparent',
                                        '&:hover': {
                                            cursor: 'pointer',
                                            backgroundColor:
                                                item.id === selectedId
                                                    ? styled.colors.action.selected
                                                    : styled.colors.action.hover,
                                        },
                                    }}
                                    onClick={() => (item.id === 'menu' ? handleDrawerToggle() : onSelect(item.id))}
                                >
                                    {item.id === 'menu' ? (
                                        <IconButton
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                '& svg': {
                                                    width: 24,
                                                    height: 24,
                                                },
                                            }}
                                        >
                                            <MenuIcon
                                                sx={{
                                                    fill: styled.colors.white,
                                                }}
                                            />
                                        </IconButton>
                                    ) : (
                                        <Tooltip title={item.title} placement="right">
                                            <IconButton size="medium">{item.icon}</IconButton>
                                        </Tooltip>
                                    )}
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
        </>
    );
};
