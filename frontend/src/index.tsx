import { createGlobalStyle } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';

const Styles = createGlobalStyle({
  ':root': {
    height: '100%',
    fontFamily: 'sans-serif',
    background: 'linear-gradient(to top, #4a7ee7, #67e7cd)',
    '& svg': {
      display: 'block',
      margin: 'auto',
      height: '100%',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Styles />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
