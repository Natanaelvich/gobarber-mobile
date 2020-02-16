import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import Routes from './routes';
import { persistor, store } from './store';

YellowBox.ignoreWarnings([
  'Warning: Async Storage has been extracted from react-native core',
]);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
