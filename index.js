/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import React from 'react';
import App from './src/App';
import {Provider as StoreProvider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import store from './src/store';

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
