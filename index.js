import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './src/store'

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)


AppRegistry.registerComponent('course', () => RNRedux);
