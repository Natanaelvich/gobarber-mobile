import React from 'react';

import { StatusBar } from 'react-native';
import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <Routes />
    </>
  );
}
