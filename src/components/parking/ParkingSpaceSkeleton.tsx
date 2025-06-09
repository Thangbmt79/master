import { Box, Skeleton, Stack } from '@mui/material';
import { styled } from '../../theme/Tokens';

export const ParkingSpaceSkeleton = () => {
    return (
        <Box
            sx={{
                p: 2,
                mb: 1,
                border: `1px solid ${styled.colors.neutral['02']}`,
                borderRadius: 1,
                bgcolor: styled.colors.neutral['01'],
            }}
        >
            <Stack spacing={1}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Skeleton variant="text" width={120} height={24} />
                    <Skeleton variant="rectangular" width={40} height={24} sx={{ borderRadius: 1 }} />
                </Stack>
                <Skeleton variant="text" width="60%" height={20} />
            </Stack>
        </Box>
    );
};
