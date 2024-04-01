import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { amber, deepPurple } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#673AB7', // DeepPurple
        },
        secondary: {
            main: '#FFC107', // amber 
        },
    },
    background: {
        default: '#F5F5F5', // custom Beige 
    },
});

export const themeSelection = createTheme({
    palette: {
        primary: {
            main: deepPurple[500], // DeepPurple
        },
        secondary: {
            main: amber[500], // amber 
        },
    },
    background: {
        default: '#F5F5F5', // custom Beige 
    },
});

export const themeHighlight = createTheme({
    palette: {
        primary: {
            main: deepPurple[300], // DeepPurple[300]
        },
        secondary: {
            main: amber[700], // amber[600]
        },
    },
    background: {
        default: '#F5F5F5', // custom Beige 
    },
});

export const HighlightedText = styled(Typography)({
    backgroundColor: themeHighlight.palette.primary.main,
    color: themeHighlight.palette.secondary.main,
    padding: '4px 8px',
    borderRadius: '8px',
    margin: '0 20px',
    display: 'inline-block',
});


