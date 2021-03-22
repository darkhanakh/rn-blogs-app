import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen, PostScreen } from './../screens';
import { THEME } from './../theme';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
        }}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'Мой блог',
          }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{
            title: 'Пост номер 42',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
