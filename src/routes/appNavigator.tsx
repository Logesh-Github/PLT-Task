import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StackNavigatorParamList} from './types';

import Home from '../screens/Home';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

function RouteStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, gestureEnabled: true}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteStack;
