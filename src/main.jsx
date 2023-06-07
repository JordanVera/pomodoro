import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './Components/App.jsx';
import './styles/app.scss';

export const theme = {
  palette: {
    primary: {
      main: '#F87070',
    },
    mode: 'dark',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={createTheme(theme)}>
    <App />
  </ThemeProvider>
);
