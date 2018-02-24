import React, { Component } from 'react';

import Router from './src/Router';
import {
  SafeAreaView
} from 'react-native';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Router />
  </SafeAreaView>
);

export default App;