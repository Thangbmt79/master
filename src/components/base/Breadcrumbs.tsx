import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Typography, Link } from '@mui/material';
import { styled } from '../../theme/Tokens';
import NavigateNextIcon from '../../assets/appbar-icon/NavigateNextIcon';
import { BreadcrumbItem } from '../layout/BasePage';

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
            separator={<NavigateNextIcon />}
            sx={{
                '& .MuiBreadcrumbs-separator': {
                    color: styled.colors.text.secondary,
                },
            }}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                if (isLast) {
                    return (
                        <Typography
                            key={item.path}
                            color={styled.colors.text.primary}
                            sx={{ fontSize: styled.typography.body1.fontSize }}
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
                        color={styled.colors.text.secondary}
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
