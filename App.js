import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';

import RootNav from './src/public/components/RootNav';
import store from './src/public/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNav/>
      </Provider>
    );
  }
}

