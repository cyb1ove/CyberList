import { createGlobalStyle } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import Montserrat from './fonts/Montserrat-Regular.ttf';

import store from './store';
import App from './App';

const Styles = createGlobalStyle({
  ':root': {
    height: '100%',
    background: 'linear-gradient(to top, #4a7ee7, #67e7cd)',
  },
});

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face: {
          font-family: 'Montserrat',
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Montserrat'), local(${Montserrat}) format('truetype')
        }
      `,
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <Styles />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root'),
);
