'use strict';

import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import  configureStore  from 'App/store/configureStore';

import AppWithNavigationState from 'App/AppNavigator';

const store = configureStore();

class MyApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);

