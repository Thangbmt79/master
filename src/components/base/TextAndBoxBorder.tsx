import { Box, SxProps, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode } from 'react';
import { styled } from '../../theme/Tokens';

interface TextAndBoxBorderProps {
    title: ReactNode;
    styledTypography?: SxProps;
    showBorder?: boolean;
    styledBorder?: SxProps;
    variant?: Variant;
}

export default function TextAndBoxBorder({
    title,
    styledTypography,
    showBorder = true,
    styledBorder,
    variant,
}: TextAndBoxBorderProps) {
    return (
        <Box display="flex" alignItems="center" gap={1}>
            {showBorder && (
                <Box
                    sx={{
                        width: 8,
                        height: 32,
                        borderRadius: '2px',
                        backgroundColor: styled.colors.white,
                        ...styledBorder,
                    }}
                />
            )}

            <Typography
                variant={variant || 'h1'}
                sx={{
                    fontSize: styled.typography.h1.fontSize,
                    fontWeight: styled.typography.h1.fontWeight,
                    color: styled.colors.text.primary,
                    ...styledTypography,
                }}
            >
                {title}
            </Typography>
        </Box>
    );
}
