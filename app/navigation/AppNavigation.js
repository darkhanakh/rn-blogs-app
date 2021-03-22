import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen, PostScreen } from './../screens';
import { THEME } from './../theme';
import AppHeaderIcon from '../components/common/AppHeaderIcon';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'Мой блог',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                  title="Take photo"
                  iconName="ios-camera"
                  onPress={() => console.log('Press photo')}
                />
              </HeaderButtons>
            ),
          }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({ route: { params } }) => ({
            title: 'Пост от ' + new Date(params.date).toLocaleDateString(),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
