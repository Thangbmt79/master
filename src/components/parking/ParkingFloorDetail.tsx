import { Box, Stack, Typography, Grid } from '@mui/material';
import React from 'react';
import { styled } from '../../theme/Tokens';
import DetailInfoSection from '../base/detail-info-section/DetailInfoSection';
import TextAndBoxBorder from '../base/TextAndBoxBorder';
import { FloorOutDoor } from './FloorOutDoor';
import { ParkingSpaceItem } from './ParkingSpaceItem';

const mockParkingSpaces = {
    name: 'Parking Space A1',
    desc: 'Level L1 comprises residential apartments with modern amenities, including a fitness center, lounge areas, and access to landscaped terraces.',
};

export const ParkingFloorDetail: React.FC = () => {
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
                                <ParkingSpaceItem item={mockParkingSpaces} />
                            </Stack>
                        }
                    />
                </Stack>
            </Grid>

            <Grid item xs={12} lg={8}>
                <DetailInfoSection
                    title={
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: styled.typography.body1.fontSize,
                                color: styled.colors.success,
                            }}
                        >
                            L1 – ground
                        </Typography>
                    }
                    content={
                        <Box p={2}>
                            <Typography variant="body2" mb={2}>
                                {mockParkingSpaces.desc}
                            </Typography>
                            <FloorOutDoor />
                        </Box>
                    }
                />
            </Grid>
        </Grid>
    );
};

export default ParkingFloorDetail;
