import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialTopTabBar} from '@react-navigation/material-top-tabs';
import MainStack from './src/navigator/MainStack';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </>
  );
};

export default App;
