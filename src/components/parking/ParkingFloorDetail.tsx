import { Box, Stack, Typography, Grid, Button } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { styled } from '../../theme/Tokens';
import DetailInfoSection from '../base/detail-info-section/DetailInfoSection';
import TextAndBoxBorder from '../base/TextAndBoxBorder';
import { ParkingSpaceItem } from './ParkingSpaceItem';
import { ParkingFloorMap } from '../maps/ParkingFloorMap';
import { ParkingSpot, PolygonPoint } from '../maps/configs';
import { v4 as uuidv4 } from 'uuid';
import useMedia from '../../hooks/useMedia';
const mockParkingSpaces = {
    name: 'Parking Space A1',
    desc: 'Level L1 comprises residential apartments with modern amenities, including a fitness center, lounge areas, and access to landscaped terraces.',
};

const mockParkingSpots: ParkingSpot = {
    id: '1',
    position: { lat: 10.762622, lng: 106.660172 },
    isOccupied: false,
    label: 'A1',
};

export const ParkingFloorDetail: React.FC = () => {
    const { isMediumMD } = useMedia();
    const [drawingMode, setDrawingMode] = useState(false);
    const [polygon, setPolygon] = useState<PolygonPoint[]>();
    console.log('🚀 ~ polygon - draw:', polygon);

    const handleSpotClick = useCallback((spot: ParkingSpot) => {
        console.log('Clicked spot:', spot);
    }, []);

    const handlePolygonComplete = useCallback(
        (polygon: google.maps.Polygon) => {
            const path = polygon.getPath();
            const coordinates: PolygonPoint[] = [];

            for (let i = 0; i < path.getLength(); i++) {
                const point = path.getAt(i);
                coordinates.push({
                    lat: point.lat(),
                    lng: point.lng(),
                    _fakeId: uuidv4(),
                });
            }

            setPolygon(coordinates);

            if (drawingMode) {
                polygon.setMap(null);
                google.maps.event.clearInstanceListeners(polygon);
                setDrawingMode(false);
            }
        },
        [drawingMode]
    );

    const handleDrawingClick = useCallback(() => {
        setDrawingMode(true);
        setPolygon(undefined);
    }, []);

    const handleDeletePolygon = useCallback(() => {
        setPolygon(undefined);
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
                <Stack spacing={3}>
                    <DetailInfoSection
                        title={
                            <TextAndBoxBorder
                                title="Floor"
                                styledTypography={{ fontSize: styled.typography.body1.fontSize }}
                                styledBorder={{ height: 16 }}
                            />
                        }
                        content={
                            <Stack spacing={2} p={2}>
                                <ParkingSpaceItem item={mockParkingSpaces} onDelete={() => {}} onEdit={() => {}} />
                            </Stack>
                        }
                    />
                </Stack>
            </Grid>

            <Grid item xs={12} lg={8}>
                <DetailInfoSection
                    title={
                        <Typography
                            sx={{
                                fontSize: isMediumMD ? styled.typography.body1.fontSize : styled.typography.h2.fontSize,
                                color: styled.colors.success,
                            }}
                        >
                            L1 – ground
                        </Typography>
                    }
                    buttonAction={
                        <Stack direction="row" spacing={2}>
                            {polygon ? (
                                <Button size="small" variant="contained" color="error" onClick={handleDeletePolygon}>
                                    Delete Polygon
                                </Button>
                            ) : (
                                <Button
                                    size="small"
                                    variant="contained"
                                    onClick={handleDrawingClick}
                                    disabled={drawingMode}
                                >
                                    Draw Polygon
                                </Button>
                            )}
                            <Button size="small" variant="outlined">
                                Import File
                            </Button>
                        </Stack>
                    }
                    content={
                        <Box p={2}>
                            <Typography variant="body2" mb={2}>
                                {mockParkingSpaces.desc}
                            </Typography>

                            <ParkingFloorMap
                                center={{ lat: 10.762622, lng: 106.660172 }}
                                parkingSpots={mockParkingSpots}
                                onSpotClick={handleSpotClick}
                                polygon={polygon}
                                onPolygonComplete={handlePolygonComplete}
                                drawingMode={drawingMode}
                            />
                        </Box>
                    }
                />
            </Grid>
        </Grid>
    );
};

export default ParkingFloorDetail;
