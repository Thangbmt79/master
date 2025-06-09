import { Box, SxProps, Theme } from '@mui/material';
import React, { CSSProperties } from 'react';
import { styled } from '../../theme/Tokens';

export default function ScrollableBoxCustom({
    children,
    scrollbarColor,
    maxHeight,
    id,
    sx,
}: {
    children: React.ReactNode;
    scrollbarColor?: string;
    maxHeight?: CSSProperties['maxHeight'];
    id?: string;
    sx?: SxProps<Theme>;
}) {
    return (
        <Box
            id={id}
            sx={{
                maxHeight: maxHeight ?? undefined,
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
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: scrollbarColor ?? styled.colors.neutral['02'],
                    borderRadius: '4px',
                },
                ...sx,
            }}
        >
            {children}
        </Box>
    );
}
