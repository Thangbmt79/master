import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Typography, Link } from '@mui/material';
import { tokens } from '../../theme/Tokens';

export interface BreadcrumbItem {
    title: React.ReactNode;
    path?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    onNavigate?: (path: string) => void;
}

export const Breadcrumbs = ({ items, onNavigate }: BreadcrumbsProps) => {
    const handleClick = (path: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        onNavigate?.(path);
    };

    return (
        <MuiBreadcrumbs
            aria-label="breadcrumb"
            sx={{
                '& .MuiBreadcrumbs-separator': {
                    color: tokens.colors.text.secondary,
                },
            }}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                if (isLast) {
                    return (
                        <Typography
                            key={item.path}
                            color={tokens.colors.text.primary}
                            sx={{ fontSize: tokens.typography.body1.fontSize }}
                        >
                            {item.title}
                        </Typography>
                    );
                }

                return (
                    <Link
                        key={item.path}
                        href={item.path}
                        onClick={item.path ? handleClick(item.path) : undefined}
                        color={tokens.colors.text.secondary}
                        sx={{
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        {item.title}
                    </Link>
                );
            })}
        </MuiBreadcrumbs>
    );
};
