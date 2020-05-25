import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default class App extends React.Component {
  render(){
  return (
      <AppContainer/>
  );
  }
}

const TabNavigator=createBottomTabNavigator({
  Read_Screen:{screen:ReadScreen},
  Write_Screen:{screen:WriteScreen},
})

const AppContainer=createAppContainer(TabNavigator);
