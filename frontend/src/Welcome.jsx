import React from 'react'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      mode: 'dark',  
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

export const Welcome = () => {
  return (
    <ThemeProvider theme={theme}>
    <Typography variant="h1" component="h2">
        Welcome
        </Typography>
    </ThemeProvider>
  )
}

export default Welcome;