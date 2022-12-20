import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TopTap} from './MaterialTopTabNavigator';
import PageLink from '../components/PageLink';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="TopTap"
        options={{
          title: 'reddit/r/programming',
          headerTitleAlign: 'center',
        }}
        component={TopTap}
      />
      <Stack.Screen
        name="PageLink"
        options={{title: 'PageLink'}}
        component={PageLink}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
