import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// theme provider is going to give every nested component within our application access to any variable
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
