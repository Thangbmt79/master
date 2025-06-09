import { Box, Button, CircularProgress, Grid, styled as muiStyled, Stack, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '../../theme/Tokens';
import DetailInfoSection from '../base/detail-info-section/DetailInfoSection';
import TextAndBoxBorder from '../base/TextAndBoxBorder';
import { BasePage } from '../layout/BasePage';
import { Product } from '../utils';
import ParkingFloorDetail from './ParkingFloorDetail';
import useMedia from '../../hooks/useMedia';
import EditIcon from '../../assets/layout-icon/EditIcon';

const LoadingWrapper = muiStyled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
});

const InfoValue = muiStyled(Typography)({
    color: styled.colors.text.secondary,
    fontSize: styled.typography.body2.fontSize,
});

const HeaderTitle = muiStyled(Typography)({
    color: styled.colors.success,
    fontSize: styled.typography.h2.fontSize,
});

const SubTitle = muiStyled(Typography)({
    color: styled.colors.text.secondary,
    fontSize: styled.typography.body2.fontSize,
});

const fetchParkingSpaceDetail = async (id: number): Promise<Product> => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch parking space details');
    }
    return response.json();
};

export const ParkingSpaceDetail: React.FC = () => {
    const { isMobileSM } = useMedia();
    const { idParking } = useParams<{ idParking: string }>();
    const [parkingSpace, setParkingSpace] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadParkingSpace = async () => {
            if (!idParking) return;
            try {
                setLoading(true);
                setError(null);
                const data = await fetchParkingSpaceDetail(Number(idParking));
                console.log('🚀 ~ loadParkingSpace ~ data:', data);
                setParkingSpace(data);
            } catch (error) {
                console.error('Error fetching parking space:', error);
                setError('Failed to load parking space details');
            } finally {
                setLoading(false);
            }
        };

        loadParkingSpace();
    }, [idParking]);

    if (error) {
        return (
            <BasePage
                pageId="parking"
                title="Error"
                actionButtonText=""
                actionButtonProps={{ style: { display: 'none' } }}
            >
                <Typography color="error">{error}</Typography>
            </BasePage>
        );
    }

    if (loading) {
        return (
            <BasePage
                pageId="parking"
                title="Parking Space Detail"
                actionButtonText=""
                actionButtonProps={{ style: { display: 'none' } }}
            >
                <LoadingWrapper>
                    <CircularProgress />
                </LoadingWrapper>
            </BasePage>
        );
    }

    if (!parkingSpace) {
        return (
            <BasePage
                pageId="parking"
                title="Parking Space Detail"
                actionButtonText=""
                actionButtonProps={{ style: { display: 'none' } }}
            >
                <Typography color="error">Parking space not found</Typography>
            </BasePage>
        );
    }

    const { title, shippingInformation, returnPolicy } = parkingSpace;

    return (
        <BasePage
            pageId="parking"
            title={
                <Box>
                    <HeaderTitle>{title}</HeaderTitle>
                    <SubTitle>
                        Location: {returnPolicy}&nbsp;&nbsp;|&nbsp;&nbsp;Type: {shippingInformation}
                    </SubTitle>
                </Box>
            }
            customBreadcrumbs={[
                {
                    title: (
                        <TextAndBoxBorder
                            title={'Packing Space'}
                            variant="h3"
                            showBorder={!isMobileSM}
                            styledTypography={{
                                fontSize: styled.typography.body1.fontSize,
                                fontWeight: styled.typography.body1.fontWeight,
                                color: styled.colors.text.secondary,
                            }}
                        />
                    ),
                    path: '/',
                },
                { title: title },
            ]}
        >
            <DetailInfoSection
                title={
                    <TextAndBoxBorder
                        title={'Information'}
                        styledTypography={{ fontSize: styled.typography.body1.fontSize }}
                        styledBorder={{ height: 16 }}
                    />
                }
                action={
                    <Tooltip arrow title="Edit" placement="top">
                        <Button
                            variant="text"
                            sx={{ minWidth: 25, height: 25, py: 1, px: 0.5 }}
                            onClick={() => {}}
                        >
                            <EditIcon />
                        </Button>
                    </Tooltip>
                }
                content={
                    <Grid container spacing={2} p={2}>
                        {[
                            { label: 'Country:', value: 'United Kingdom' },
                            { label: 'Street number:', value: '45 Baker Street' },
                            { label: 'City:', value: 'Manchester' },
                            { label: 'Type:', value: 'Outdoor' },
                            { label: 'Post code:', value: 'M1 2AB' },
                            { label: 'Status:', value: 'Active' },
                        ].map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Stack direction="row" spacing={0.5} flexWrap="wrap">
                                    <InfoValue>{item.label}</InfoValue>
                                    <InfoValue>{item.value}</InfoValue>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                }
            />
            <Box mt={2}>
                <ParkingFloorDetail />
            </Box>
        </BasePage>
    );
};

export default ParkingSpaceDetail;
