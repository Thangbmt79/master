import { createTheme } from '@mui/material';
import { tokens } from './Tokens';
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
            main: tokens.colors.primary.main,
            light: tokens.colors.primary.light,
            dark: tokens.colors.primary.dark,
        },
        background: {
            default: tokens.colors.background.default,
            paper: tokens.colors.background.paper,
        },
        text: {
            primary: tokens.colors.text.primary,
            secondary: tokens.colors.text.secondary,
        },
        cancel: {
            main: tokens.colors.primary.border,
            contrastText: tokens.colors.white,
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
                    backgroundColor: tokens.colors.background.default,
                    color: tokens.colors.text.primary,
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
                    backgroundColor: tokens.colors.primary.background,
                    color: tokens.colors.white,
                    '&:hover': {
                        backgroundColor: tokens.colors.primary.hover,
                    },
                },
                outlined: {
                    borderColor: tokens.colors.primary.background,
                    color: tokens.colors.white,
                    '&:hover': {
                        borderColor: tokens.colors.primary.border,
                        backgroundColor: 'rgba(60,66,76,0.04)',
                    },
                },
                text: {
                    color: tokens.colors.white,
                    '&:hover': {
                        backgroundColor: tokens.colors.primary.hover,
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: tokens.colors.neutral['04'],
                    borderRadius: tokens.borderRadius.md,
                    padding: tokens.spacing.md,
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    backgroundColor: tokens.colors.neutral['03'],
                    color: tokens.colors.white,
                    borderRadius: tokens.borderRadius.sm,
                },
                icon: {
                    color: tokens.colors.white,
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    color: tokens.colors.white,
                    backgroundColor: 'transparent',
                    borderRadius: '4px',
                    border: 'none',
                    '&.Mui-selected': {
                        backgroundColor: tokens.colors.neutral['04'],
                        color: tokens.colors.white,
                    },
                    '&.Mui-disabled': {
                        color: tokens.colors.neutral['01'],
                    },
                    '&:hover': {
                        backgroundColor: tokens.colors.primary.hover,
                    },
                },
                previousNext: {
                    backgroundColor: tokens.colors.primary.background,
                    color: tokens.colors.white,
                    '&:hover': {
                        backgroundColor: tokens.colors.primary.hover,
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: tokens.colors.white,
                    height: '3px',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: '#6F767E',
                    '&.Mui-selected': {
                        color: tokens.colors.white,
                        borderBottom: '3px solid ' + tokens.colors.white,
                    },
                    borderBottom: '3px solid transparent',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: tokens.colors.primary.dark,
                    borderRadius: tokens.borderRadius.sm,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#414141',
                        },
                        '&:hover fieldset': {
                            borderColor: '#888888',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: tokens.colors.white,
                        },
                        color: tokens.colors.white,
                    },
                    '& input': {
                        color: tokens.colors.white,
                        '&::placeholder': {
                            color: tokens.colors.text.secondary,
                            opacity: 1,
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: tokens.colors.text.secondary,
                        '&.Mui-focused': {
                            color: tokens.colors.text.secondary,
                        },
                        '&.MuiInputLabel-shrink': {
                            color: tokens.colors.text.secondary,
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    backgroundColor: tokens.colors.primary.dark,
                    borderRadius: tokens.borderRadius.sm,
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: tokens.colors.white,
                        },
                        color: tokens.colors.white,
                        '& input': {
                            color: tokens.colors.white,
                            '&::placeholder': {
                                color: tokens.colors.text.secondary,
                                opacity: 1,
                            },
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: tokens.colors.text.secondary,
                        '&.Mui-focused': {
                            color: tokens.colors.text.secondary,
                        },
                        '&.MuiInputLabel-shrink': {
                            color: tokens.colors.text.secondary,
                        },
                    },
                    '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': {
                        color: tokens.colors.text.secondary,
                    },
                },
                paper: {
                    backgroundColor: tokens.colors.neutral['02'],
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: tokens.colors.neutral['04'],
                    '& .MuiTableCell-head': {
                        color: tokens.colors.white,
                        fontWeight: 600,
                    },
                },
            },
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    backgroundColor: tokens.colors.background.default,
                    '& .MuiTableCell-body': {
                        color: tokens.colors.white,
                    },
                },
            },
        },
    },
});
