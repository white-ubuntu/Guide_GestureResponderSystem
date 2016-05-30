/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Router,Scene}  from 'react-native-router-flux';
import Guide from './Guide';
import TouchableHighlightCase from './example/touchableHighlightCase';
import LongPressCase from './example/longPressCase';
import LongPressImageCase from './example/longPressImageCase';
import ColorChange from './example/colorChange';
import FormInput from './example/formInput';
class Guide_GestureResponderSystem extends Component {
  render() {
    return (
      <Router>
          <Scene key="root">
              <Scene key="guide" component={Guide} title="Guide_GestureResponderSystem" initial={true} />
              <Scene key="touchableHighlightCase" component={TouchableHighlightCase} title="TouchableHighlightCase"  />
              <Scene key="longPress" component={LongPressCase} title="LongPressCase"  />
              <Scene key="longPressImageCase" component={LongPressImageCase} title="LongPressImageCase"></Scene>
              <Scene key="colorChange" component={ColorChange} title="ColorChange"></Scene>
              <Scene key="formInput" component={FormInput} title="FormInput"></Scene>
          </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Guide_GestureResponderSystem', () => Guide_GestureResponderSystem);
