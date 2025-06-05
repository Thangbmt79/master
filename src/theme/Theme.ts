import { createTheme } from '@mui/material';
import { styled } from './Tokens';
import type {} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        cancel: Palette['primary'];
    }
    interface PaletteOptions {
        cancel?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        cancel: true;
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: styled.colors.primary.main,
            light: styled.colors.primary.light,
            dark: styled.colors.primary.dark,
        },
        background: {
            default: styled.colors.background.default,
            paper: styled.colors.background.paper,
        },
        text: {
            primary: styled.colors.text.primary,
            secondary: styled.colors.text.secondary,
        },
        cancel: {
            main: styled.colors.primary.border,
            contrastText: styled.colors.white,
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '24px',
            fontWeight: 600,
        },
        h2: {
            fontSize: '20px',
            fontWeight: 600,
        },
        h3: {
            fontSize: '18px',
            fontWeight: 600,
        },
        h4: {
            fontSize: '16px',
            fontWeight: 600,
        },
        h5: {
            fontSize: '15px',
            fontWeight: 500,
        },
        h6: {
            fontSize: '14px',
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: '13px',
            fontWeight: 400,
        },
        subtitle2: {
            fontSize: '12px',
            fontWeight: 400,
        },
        body1: {
            fontSize: '16px',
            fontWeight: 400,
        },
        body2: {
            fontSize: '14px',
            fontWeight: 400,
        },
        caption: {
            fontSize: '12px',
            fontWeight: 400,
        },
        button: {
            fontSize: '14px',
            fontWeight: 500,
            textTransform: 'none',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: styled.colors.background.default,
                    color: styled.colors.text.primary,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    textTransform: 'none',
                    padding: '0.75rem 1rem',
                    fontSize: '0.875rem',
                    lineHeight: '1rem',
                    height: 'fit-content',
                    fontWeight: 400,
                    boxShadow: 'none',
                },
                containedPrimary: {
                    backgroundColor: styled.colors.primary.background,
                    color: styled.colors.white,
                    '&:hover': {
                        backgroundColor: styled.colors.primary.hover,
                    },
                },
                outlined: {
                    borderColor: styled.colors.primary.background,
                    color: styled.colors.white,
                    '&:hover': {
                        borderColor: styled.colors.primary.border,
                        backgroundColor: 'rgba(60,66,76,0.04)',
                    },
                },
                text: {
                    color: styled.colors.white,
                    '&:hover': {
                        backgroundColor: styled.colors.primary.hover,
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: styled.colors.neutral['04'],
                    borderRadius: styled.borderRadius.md,
                    padding: styled.spacing.md,
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    backgroundColor: styled.colors.neutral['03'],
                    color: styled.colors.white,
                    borderRadius: styled.borderRadius.sm,
                },
                icon: {
                    color: styled.colors.white,
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    color: styled.colors.white,
                    backgroundColor: 'transparent',
                    borderRadius: '4px',
                    border: 'none',
                    '&.Mui-selected': {
                        backgroundColor: styled.colors.neutral['04'],
                        color: styled.colors.white,
                    },
                    '&.Mui-disabled': {
                        color: styled.colors.neutral['01'],
                    },
                    '&:hover': {
                        backgroundColor: styled.colors.primary.hover,
                    },
                },
                previousNext: {
                    backgroundColor: styled.colors.primary.background,
                    color: styled.colors.white,
                    '&:hover': {
                        backgroundColor: styled.colors.primary.hover,
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: styled.colors.white,
                    height: '3px',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: '#6F767E',
                    '&.Mui-selected': {
                        color: styled.colors.white,
                        borderBottom: '3px solid ' + styled.colors.white,
                    },
                    borderBottom: '3px solid transparent',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: styled.colors.primary.dark,
                    borderRadius: styled.borderRadius.sm,
                    '& .MuiOutlinedInput-root': {
                        height: '40px',
                        '& fieldset': {
                            borderColor: '#414141',
                            top: -5,
                        },
                        '&:hover fieldset': {
                            borderColor: '#888888',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: styled.colors.white,
                        },
                        color: styled.colors.white,
                    },
                    '& input': {
                        padding: '0 14px',
                        color: styled.colors.white,
                        '&::placeholder': {
                            color: styled.colors.text.secondary,
                            opacity: 1,
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: styled.colors.text.secondary,
                        transform: 'translate(14px, 8px) scale(1)',
                        '&.Mui-focused': {
                            color: styled.colors.text.secondary,
                        },
                        '&.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -8px) scale(0.75)',
                            color: styled.colors.text.secondary,
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    backgroundColor: styled.colors.primary.dark,
                    borderRadius: styled.borderRadius.sm,
                    '& .MuiOutlinedInput-root': {
                        height: '40px',
                        '& fieldset': {
                            borderColor: '#414141',
                            top: -5,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: styled.colors.white,
                        },
                        color: styled.colors.white,
                        '& input': {
                            padding: '0 14px !important',
                            color: styled.colors.white,
                            '&::placeholder': {
                                color: styled.colors.text.secondary,
                                opacity: 1,
                            },
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: styled.colors.text.secondary,
                        transform: 'translate(14px, 8px) scale(1)',
                        '&.Mui-focused': {
                            color: styled.colors.text.secondary,
                        },
                        '&.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -8px) scale(0.75)',
                            color: styled.colors.text.secondary,
                        },
                    },
                    '& .MuiAutocomplete-endAdornment': {
                        top: '50%',
                        transform: 'translateY(-50%)',
                        '& .MuiSvgIcon-root': {
                            color: styled.colors.text.secondary,
                        },
                    },
                },
                paper: {
                    backgroundColor: styled.colors.neutral['02'],
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: styled.colors.neutral['04'],
                    '& .MuiTableCell-head': {
                        color: styled.colors.white,
                        fontWeight: 600,
                    },
                },
            },
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    backgroundColor: styled.colors.background.default,
                    '& .MuiTableCell-body': {
                        color: styled.colors.white,
                    },
                },
            },
        },
    },
});
