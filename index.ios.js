/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, NavigatorIOS
} from 'react-native';
import Signup from './App/containers/Signup';

class servesy extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Signup,
          title: 'Signup',
        }}
        style={{flex: 1}}
        />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('servesy', () => servesy);
