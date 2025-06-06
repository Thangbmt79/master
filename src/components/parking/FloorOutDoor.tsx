import { Box, styled } from '@mui/material';
import React from 'react';

const ImageContainer = styled(Box)(({}) => ({
    width: '100%',
    height: '100%',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '4px',
    },
}));

interface FloorOutDoorProps {
    imageUrl?: string;
}

export const FloorOutDoor: React.FC<FloorOutDoorProps> = () => {
    return (
        <ImageContainer>
            <img src={'/image/floorOutDoor.png'} alt="Parking Layout" loading="lazy" />
        </ImageContainer>
    );
};

export default FloorOutDoor;
