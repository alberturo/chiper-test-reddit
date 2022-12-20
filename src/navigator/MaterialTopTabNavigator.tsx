import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewScreen from '../screens/NewScreen';
import TopScreen from '../screens/TopScreen';
import PopularScreen from '../screens/PopularScreen';
import HotScreen from '../screens/HotScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTap = () => {
  return (
    <Tab.Navigator
      initialRouteName="NewScreen"
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, color: '#6bc1fe'},
        tabBarItemStyle: {width: 100},
        tabBarStyle: {backgroundColor: 'white'},
        tabBarIndicatorStyle: {backgroundColor: '#6bc1fe'},
        // tabBarPressColor: '#6bc1fe',
      }}>
      <Tab.Screen
        name="New"
        component={NewScreen}
        options={{tabBarLabel: 'New'}}
      />
      <Tab.Screen
        name="Top"
        component={TopScreen}
        options={{tabBarLabel: 'Top'}}
      />
      <Tab.Screen
        name="Popular"
        component={PopularScreen}
        options={{tabBarLabel: 'Popular'}}
      />
      <Tab.Screen
        name="Hot"
        component={HotScreen}
        options={{tabBarLabel: 'Hot'}}
      />
    </Tab.Navigator>
  );
};
