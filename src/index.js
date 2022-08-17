import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';

import PrimaryTheme from './themes/PrimaryTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={PrimaryTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();