export const tokens = {
    colors: {
        white: '#FFFFFF',
        primary: {
            main: '#121212',
            light: '#2A2A2A',
            dark: '#000000',
            background: '#3C424C',
        },
        neutral: {
            '04': '#191F2B',
            '03': '#333333',
            '02': '#4A4A4A',
            '01': '#666666',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3',
            disabled: '#666666',
        },
        background: {
            default: '#121212',
            paper: '#191F2B',
        },
        action: {
            active: '#FFFFFF',
            hover: 'rgba(255, 255, 255, 0.08)',
            selected: 'rgba(255, 255, 255, 0.16)',
        },
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
    },
    typography: {
        h1: {
            fontSize: '24px',
            fontWeight: 600,
        },
        h2: {
            fontSize: '20px',
            fontWeight: 600,
        },
        body1: {
            fontSize: '16px',
            fontWeight: 400,
        },
        body2: {
            fontSize: '14px',
            fontWeight: 400,
        },
    },
} as const;

export type Tokens = typeof tokens;
