import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux'
import Grid from './Grid';
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Grid />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
