import { Box, Button, Grid, InputAdornment, Stack, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import FilterIcon from '../../assets/layout-icon/FilterIcon';
import SearchValueIcon from '../../assets/layout-icon/SearchValueIcon';
import useMedia from '../../hooks/useMedia';
import { ParkingSpotResponse, fetchParkingSpots } from '../../services/parkingApi';
import { styled } from '../../theme/Tokens';
import { BaseTextField } from '../base/BaseTextField';
import DetailInfoSection from '../base/detail-info-section/DetailInfoSection';
import ScrollableBoxCustom from '../base/ScrollableBoxCustom';
import TextAndBoxBorder from '../base/TextAndBoxBorder';
import { UpsertFloorPopup } from './UpsertFloorPopup';
import { ParkingSpaceItem } from './ParkingSpaceItem';
import { ParkingSpaceSkeleton } from './ParkingSpaceSkeleton';
import FloorOutDoor from './FloorOutDoor';

export enum ModeUpsertFloor {
    ADD,
    EDIT,
}

export const ParkingFloorDetail: React.FC = () => {
    const { isMediumMD } = useMedia();
    const [search, setSearch] = useState<string>('');
    const [isAddFloorOpen, setIsAddFloorOpen] = useState<boolean>(false);
    const [modeUpsertFloor, setModeUpsertFloor] = useState<ModeUpsertFloor | null>(null);
    const [selectedParkingSpace, setSelectedParkingSpace] = useState<ParkingSpotResponse | null>(null);

    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
        queryKey: ['parkingSpots', search],
        queryFn: ({ pageParam = 1 }) => fetchParkingSpots({ search, page: pageParam, pageSize: 5 }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.hasMore) {
                return pages.length + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
    });

    const allParkingSpots = data?.pages.flatMap((page) => page.data) ?? [];

    useEffect(() => {
        if (allParkingSpots.length > 0 && !selectedParkingSpace && modeUpsertFloor === null) {
            setSelectedParkingSpace(allParkingSpots[0]);
        }
    }, [allParkingSpots]);

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress color="success" />
            </Box>
        );
    }

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
                        buttonAction={
                            <Button
                                size="small"
                                variant="contained"
                                onClick={() => {
                                    setModeUpsertFloor(ModeUpsertFloor.ADD);
                                    setIsAddFloorOpen(true);
                                }}
                            >
                                Add floor
                            </Button>
                        }
                        content={
                            <Stack direction={'column'} spacing={2} p={2}>
                                <Stack
                                    direction={'row'}
                                    alignItems={'center'}
                                    spacing={2}
                                    justifyContent={'space-between'}
                                >
                                    <BaseTextField
                                        placeholder="Search"
                                        sx={{
                                            width: '100%',
                                            '& input': {
                                                padding: 0,
                                            },
                                            '& .MuiFilledInput-root': {
                                                minHeight: '40px',
                                            },
                                        }}
                                        value={search}
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment
                                                    position="start"
                                                    sx={{
                                                        mt: '0 !important',
                                                    }}
                                                >
                                                    <SearchValueIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Button
                                        size="small"
                                        variant="text"
                                        startIcon={<FilterIcon />}
                                        sx={{
                                            border: `1px solid ${styled.colors.neutral['02']}`,
                                            bgcolor: styled.colors.primary.dark,
                                            color: styled.colors.text.secondary,
                                        }}
                                    >
                                        Filter
                                    </Button>
                                </Stack>
                                <ScrollableBoxCustom maxHeight={'40vh'} id="scrollableDiv">
                                    <InfiniteScroll
                                        dataLength={allParkingSpots.length}
                                        next={fetchNextPage}
                                        hasMore={!!hasNextPage}
                                        loader={
                                            <Stack spacing={1}>
                                                <ParkingSpaceSkeleton />
                                                <ParkingSpaceSkeleton />
                                            </Stack>
                                        }
                                        scrollableTarget="scrollableDiv"
                                        scrollThreshold={0.8}
                                    >
                                        {allParkingSpots.map((item) => (
                                            <ParkingSpaceItem
                                                key={item.id}
                                                item={item}
                                                onDelete={() => {
                                                    console.log('delete', item.id);
                                                }}
                                                onEdit={() => {
                                                    console.log('edit', item.id);
                                                    setModeUpsertFloor(ModeUpsertFloor.EDIT);
                                                    setIsAddFloorOpen(true);
                                                    setSelectedParkingSpace(item);
                                                }}
                                                onSelect={(item) => {
                                                    setSelectedParkingSpace(item);
                                                }}
                                                selectedParkingSpace={selectedParkingSpace}
                                            />
                                        ))}
                                    </InfiniteScroll>
                                </ScrollableBoxCustom>
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
                            {selectedParkingSpace?.name}
                        </Typography>
                    }
                    content={
                        <Box p={2}>
                            <Typography variant="body2" mb={2}>
                                {selectedParkingSpace?.desc || 'No description available'}
                            </Typography>
                            <FloorOutDoor />
                        </Box>
                    }
                />
            </Grid>

            <UpsertFloorPopup
                open={isAddFloorOpen}
                parkingSpaceItem={selectedParkingSpace}
                modeUpsertFloor={modeUpsertFloor}
                onClose={() => {
                    setIsAddFloorOpen(false);
                    setModeUpsertFloor(null);
                }}
                onSubmit={(data) => {
                    console.log('New floor data:', data);
                    setIsAddFloorOpen(false);
                }}
            />
        </Grid>
    );
};

export default ParkingFloorDetail;
