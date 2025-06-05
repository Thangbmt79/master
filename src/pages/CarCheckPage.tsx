import { Box } from '@mui/material';
import { BasePage } from '../components/layout/BasePage';
import { styled } from '../theme/Tokens';

export const CarCheckPage = () => {
    return (
        <BasePage
            pageId="car-check"
            title="Car Check In/Out"
            actionButtonText="New Check In/Out"
        >
            <Box style={{ padding: '20px', color: styled.colors.white }}>
                Content area - Add your car check in/out management components here
            </Box>
        </BasePage>
    );
}; 