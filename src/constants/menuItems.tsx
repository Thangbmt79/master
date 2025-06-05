import AssetsIcon from '../assets/drawer-icon/AssetsIcon';
import CarCheckInOrCheckOutIcon from '../assets/drawer-icon/CarCheckInOrCheckOutIcon';
import PackingSpaceIcon from '../assets/drawer-icon/PackingSpaceIcon';

export interface MenuItem {
    id: string;
    title: string;
    icon: React.ReactNode;
    path: string;
}

export const menuItems: MenuItem[] = [
    {
        id: 'parking',
        title: 'Parking Space',
        icon: <PackingSpaceIcon />,
        path: '/parking',
    },
    {
        id: 'assets',
        title: 'Assets',
        icon: <AssetsIcon />,
        path: '/assets',
    },
    {
        id: 'car-check',
        title: 'Car check in/out',
        icon: <CarCheckInOrCheckOutIcon />,
        path: '/car-check',
    },
    {
        id: 'test',
        title: 'Test',
        icon: <PackingSpaceIcon />,
        path: '/test',
    },
];
