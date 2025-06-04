import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ParkingSpacePage } from '../pages/ParkingSpacePage';
import { AssetsPage } from '../pages/AssetsPage';
import { CarCheckPage } from '../pages/CarCheckPage';

export const router = createBrowserRouter([
    {
        path: '/',
        index: true,
        element: <Navigate to="/parking" replace />,
    },
    {
        path: '/parking',
        element: <ParkingSpacePage />,
    },
    {
        path: '/assets',
        element: <AssetsPage />,
    },
    {
        path: '/car-check',
        element: <CarCheckPage />,
    },
]);
