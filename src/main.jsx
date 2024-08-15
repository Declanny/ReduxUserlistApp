import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
import { Provider } from 'react-redux';
import store from './store/store.js'; // Correct path to store.js

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

