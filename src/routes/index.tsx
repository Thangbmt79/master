import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ParkingSpacePage } from '../pages/ParkingSpacePage';
import { AssetsPage } from '../pages/AssetsPage';
import { CarCheckPage } from '../pages/CarCheckPage';
import { TestPage } from '../pages/TestPage';
import ParkingSpaceDetail from '../components/parking/ParkingSpaceDetail';
import { AddParking } from '../components/parking/AddParking';

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
        path: '/parking/:idParking',
        element: <ParkingSpaceDetail />,
    },
    {
        path: '/parking/add',
        element: <AddParking />,
    },
    {
        path: '/assets',
        element: <AssetsPage />,
    },
    {
        path: '/car-check',
        element: <CarCheckPage />,
    },
    {
        path: '/test',
        element: <TestPage />,
    },
    {
        path: '*',
        element: <Navigate to="/parking" replace />,
    },
]);
