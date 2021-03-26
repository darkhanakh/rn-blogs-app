import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { BookedScreen, MainScreen, PostScreen } from './../screens';
import { THEME } from './../theme';
import AppHeaderIcon from '../components/common/AppHeaderIcon';

const AppNavigator = createStackNavigator();

function AppNavigation() {
  return (
    <AppNavigator.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
      }}
    >
      <AppNavigator.Screen
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
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Toggle Drawer"
                iconName="ios-menu"
                onPress={() => console.log('Press drawer')}
              />
            </HeaderButtons>
          ),
        }}
      />
      <AppNavigator.Screen
        name="Post"
        component={PostScreen}
        options={({ route: { params } }) => ({
          title: 'Пост от ' + new Date(params.date).toLocaleDateString(),
          headerRight: () => {
            const booked = params.booked;
            let iconName = booked ? 'ios-star' : 'ios-star-outline';
            return (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                  title="Take photo"
                  iconName={iconName}
                  onPress={() => console.log('Press star')}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </AppNavigator.Navigator>
  );
}

const BookedNavigator = createStackNavigator();

function BookedNavigation() {
  return (
    <BookedNavigator.Navigator
      initialRouteName="Booked"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
      }}
    >
      <BookedNavigator.Screen
        name="Booked"
        component={BookedScreen}
        options={{
          title: 'Избранное',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Toggle Drawer"
                iconName="ios-menu"
                onPress={() => console.log('Press drawer')}
              />
            </HeaderButtons>
          ),
        }}
      />
      <BookedNavigator.Screen name="Post" component={PostScreen} />
    </BookedNavigator.Navigator>
  );
}

const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <BottomNavigator.Navigator
        initialRouteName="App"
        tabBarOptions={{
          activeTintColor: 'white',
        }}
        barStyle={{
          backgroundColor: THEME.MAIN_COLOR,
        }}
        shifting={true}
      >
        <BottomNavigator.Screen
          name="App"
          component={AppNavigation}
          options={{
            title: 'Все',
            tabBarIcon: info => (
              <Ionicons name="ios-albums" size={25} color={info.color} />
            ),
          }}
        />
        <BottomNavigator.Screen
          name="Booked"
          component={BookedNavigation}
          options={{
            title: 'Избранное',
            tabBarIcon: info => (
              <Ionicons name="ios-star" size={25} color={info.color} />
            ),
          }}
        />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  );
}
