import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import AudiHeaderIcon from '../../assets/layout-icon/AudiHeaderIcon';
import { tokens } from '../../theme/Tokens';

export interface MenuItem {
    id: string;
    title: string;
    icon: React.ReactNode;
    path: string;
}

interface DrawerMenuProps {
    items: MenuItem[];
    selectedId: string;
    onSelect: (id: string) => void;
}

const DRAWER_WIDTH = 280;

export const DrawerMenu = ({ items, selectedId, onSelect }: DrawerMenuProps) => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    backgroundColor: tokens.colors.background.default,
                    borderRight: 'none',
                    overflowX: 'hidden',
                },
            }}
        >
            <Box
                sx={{
                    height: 64,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: tokens.spacing.md,
                }}
            >
                <AudiHeaderIcon />
                <Typography
                    variant="h6"
                    sx={{
                        ml: '12px',
                        color: tokens.colors.text.primary,
                        fontSize: tokens.typography.h2.fontSize,
                        fontWeight: tokens.typography.h2.fontWeight,
                    }}
                >
                    Audi
                </Typography>
            </Box>

            <List sx={{ mt: tokens.spacing.md, px: tokens.spacing.sm }}>
                {items.map((item) => (
                    <ListItem
                        key={item.id}
                        button
                        selected={item.id === selectedId}
                        onClick={() => onSelect(item.id)}
                        sx={{
                            borderRadius: tokens.borderRadius.sm,
                            mb: 1,
                            '&.Mui-selected': {
                                backgroundColor: tokens.colors.action.selected,
                                '&:hover': {
                                    backgroundColor: tokens.colors.action.selected,
                                },
                            },
                            '&:hover': {
                                backgroundColor: tokens.colors.action.hover,
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                color:
                                    item.id === selectedId ? tokens.colors.text.primary : tokens.colors.text.secondary,
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
                                            ? tokens.colors.text.primary
                                            : tokens.colors.text.secondary,
                                },
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
