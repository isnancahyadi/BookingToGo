import React from 'react';
import Router from './routes';
import {Provider} from 'react-native-paper';

const App = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};

export default App;
