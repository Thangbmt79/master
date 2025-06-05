import { Add as AddIcon } from '@mui/icons-material';
import { Button, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TextAndBoxBorder from '../base/TextAndBoxBorder';
import { MainLayout } from './MainLayout';
import { menuItems } from '../../constants/menuItems';
import { styled } from '../../theme/Tokens';

interface BreadcrumbItem {
    title: string | ReactNode;
    path?: string;
}

interface BasePageProps {
    pageId: string;
    title: ReactNode;
    actionButtonText: string;
    children: ReactNode;
    actionButtonProps?: Partial<ButtonProps>;
    customBreadcrumbs?: BreadcrumbItem[];
}

export const BasePage = ({
    pageId,
    title,
    actionButtonText,
    children,
    actionButtonProps,
    customBreadcrumbs,
}: BasePageProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuSelect = (id: string) => {
        const selectedItem = menuItems.find((item) => item.id === id);
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

    const defaultBreadcrumbs = (): BreadcrumbItem[] => {
        const paths = location.pathname.split('/').filter(Boolean);
        const breadcrumbs: BreadcrumbItem[] = [];

        const mainPath = paths[0];
        const mainMenuItem = menuItems.find((item) => item.path === `/${mainPath}`);

        if (mainMenuItem) {
            breadcrumbs.push({
                title: (
                    <TextAndBoxBorder
                        title={mainMenuItem.title}
                        styledTypography={{
                            fontSize: styled.typography.body1.fontSize,
                            fontWeight: styled.typography.body1.fontWeight,
                        }}
                        showBorder
                    />
                ),
                path: mainMenuItem.path,
            });
        }

        if (paths.length > 1 && !customBreadcrumbs) {
            breadcrumbs.push({
                title: (
                    <TextAndBoxBorder
                        title={title}
                        styledTypography={{
                            fontSize: styled.typography.body1.fontSize,
                            fontWeight: styled.typography.body1.fontWeight,
                        }}
                        showBorder={false}
                    />
                ),
            });
        }

        return breadcrumbs;
    };

    const breadcrumbs = customBreadcrumbs || defaultBreadcrumbs();

    return (
        <MainLayout
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
                        fontSize: styled.typography.h1.fontSize,
                        fontWeight: styled.typography.h1.fontWeight,
                    }}
                />
            }
            pageAction={
                actionButtonText ? (
                    <Button variant="contained" startIcon={<AddIcon />} {...actionButtonProps}>
                        {actionButtonText}
                    </Button>
                ) : null
            }
        >
            {children}
        </MainLayout>
    );
};
