import { Box, SxProps, Typography } from '@mui/material';
import { tokens } from '../../theme/tokens';

interface TextAndBoxBorderProps {
    title: string;
    styledTypography?: SxProps;
}

export default function TextAndBoxBorder({ title, styledTypography }: TextAndBoxBorderProps) {
    return (
        <Box display="flex" alignItems="center" gap={1}>
            <Box
                sx={{
                    width: 8,
                    height: 32,
                    borderRadius: '2px',
                    backgroundColor: '#FFFFFF',
                }}
            />

            <Typography
                variant="h1"
                sx={{
                    fontSize: tokens.typography.h1.fontSize,
                    fontWeight: tokens.typography.h1.fontWeight,
                    color: tokens.colors.text.primary,
                    ...styledTypography,
                }}
            >
                {title}
            </Typography>
        </Box>
    );
}
