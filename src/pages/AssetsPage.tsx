import { Box } from '@mui/material';
import { BasePage } from '../components/layout/BasePage';
import { styled } from '../theme/Tokens';

export const AssetsPage = () => {
    return (
        <BasePage
            pageId="assets"
            title="Assets"
            actionButtonText="Add Asset"
        >
            <Box style={{ padding: '20px', color: styled.colors.white }}>
                Content area - Add your assets management components here
            </Box>
        </BasePage>
    );
}; 