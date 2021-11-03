import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './components/global-style';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);