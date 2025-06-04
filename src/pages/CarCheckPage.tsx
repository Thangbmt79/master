import { Box } from '@mui/material';
import { BasePage } from '../components/layout/BasePage';
import { tokens } from '../theme/Tokens';

export const CarCheckPage = () => {
    return (
        <BasePage
            pageId="car-check"
            title="Car Check In/Out"
            actionButtonText="New Check In/Out"
        >
            <Box style={{ padding: '20px', color: tokens.colors.white }}>
                Content area - Add your car check in/out management components here
            </Box>
        </BasePage>
    );
}; 