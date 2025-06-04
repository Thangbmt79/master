import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { tokens } from './theme/tokens';

const theme = createTheme({
    palette: {
        mode: 'dark',
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
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
    },
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};
