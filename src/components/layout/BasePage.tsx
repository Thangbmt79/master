import { Add as AddIcon } from '@mui/icons-material';
import { Button, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import TextAndBoxBorder from '../base/TextAndBoxBorder';
import { MainLayout } from './MainLayout';
import { menuItems } from '../../constants/menuItems';
import { tokens } from '../../theme/Tokens';

interface BasePageProps {
    pageId: string;
    title: string;
    actionButtonText: string;
    children: ReactNode;
    actionButtonProps?: Partial<ButtonProps>;
}

export const BasePage = ({
    pageId,
    title,
    actionButtonText,
    children,
    actionButtonProps,
}: BasePageProps) => {
    const navigate = useNavigate();

    const handleMenuSelect = (id: string) => {
        const selectedItem = menuItems.find(item => item.id === id);
        if (selectedItem) {
            navigate(selectedItem.path);
        }
    };

    const handleBreadcrumbNavigate = (path: string) => {
        navigate(path);
    };

    const handleAvatarClick = () => {
        console.log('Avatar clicked');
    };

    const breadcrumbs = [
        {
            title: (
                <TextAndBoxBorder
                    title={title}
                    styledTypography={{
                        fontSize: tokens.typography.body1.fontSize,
                        fontWeight: tokens.typography.body1.fontWeight,
                    }}
                />
            ),
        },
    ];

    return (
        <MainLayout
            menuItems={menuItems}
            selectedMenuId={pageId}
            onMenuSelect={handleMenuSelect}
            breadcrumbs={breadcrumbs}
            onBreadcrumbNavigate={handleBreadcrumbNavigate}
            avatarUrl="https://i.pravatar.cc/300"
            onAvatarClick={handleAvatarClick}
            pageTitle={
                <TextAndBoxBorder
                    title={title}
                    styledTypography={{
                        fontSize: tokens.typography.h1.fontSize,
                        fontWeight: tokens.typography.h1.fontWeight,
                    }}
                />
            }
            pageAction={
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    // sx={{
                    //     bgcolor: tokens.colors.primary.main,
                    //     '&:hover': {
                    //         bgcolor: tokens.colors.primary.dark,
                    //     },
                    // }}
                    {...actionButtonProps}
                >
                    {actionButtonText}
                </Button>
            }
        >
            {children}
        </MainLayout>
    );
}; 