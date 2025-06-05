import { Box } from '@mui/material';
import React from 'react';
import { styled } from '../../theme/Tokens';

export default function ScrollableBoxCustom({
    children,
    scrollbarColor,
}: {
    children: React.ReactNode;
    scrollbarColor?: string;
}) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                overflow: 'auto',
                position: 'relative',
                marginRight: '-8px',
                paddingRight: '8px',
                scrollbarWidth: 'thin',
                scrollbarColor: `${scrollbarColor ?? styled.colors.neutral['02']} transparent`,
                '&::-webkit-scrollbar': {
                    width: '8px',
                    backgroundColor: 'transparent',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: 'transparent',
                },
            }}
        >
            {children}
        </Box>
    );
}
