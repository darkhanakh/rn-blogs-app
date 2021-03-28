import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  AboutScreen,
  BookedScreen,
  CreateScreen,
  MainScreen,
  PostScreen,
} from './../screens';
import { THEME } from './../theme';
import AppHeaderIcon from '../components/common/AppHeaderIcon';

const navigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
};

const navigationDrawer = navigation => (
  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item
      title="Toggle Drawer"
      iconName="ios-menu"
      onPress={() => navigation.toggleDrawer()}
    />
  </HeaderButtons>
);

const PostNavigator = createStackNavigator();

function PostNavigation() {
  return (
    <PostNavigator.Navigator
      initialRouteName="Main"
      screenOptions={navigatorOptions}
    >
      <PostNavigator.Screen
        name="Main"
        component={MainScreen}
        options={({ navigation }) => ({
          title: 'Мой блог',
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Take photo"
                iconName="ios-camera"
                onPress={() => navigation.navigate('Create')}
              />
            </HeaderButtons>
          ),
          headerLeft: () => navigationDrawer(navigation),
        })}
      />
      <PostNavigator.Screen
        name="Post"
        component={PostScreen}
        options={({ route: { params } }) => ({
          title: 'Пост от ' + new Date(params.date).toLocaleDateString(),
          headerRight: () => {
            let iconName = params.booked ? 'ios-star' : 'ios-star-outline';
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
    </PostNavigator.Navigator>
  );
}

const BookedNavigator = createStackNavigator();

function BookedNavigation() {
  return (
    <BookedNavigator.Navigator
      initialRouteName="Booked"
      screenOptions={navigatorOptions}
    >
      <BookedNavigator.Screen
        name="Booked"
        component={BookedScreen}
        options={({ navigation }) => ({
          title: 'Избранное',
          headerLeft: () => navigationDrawer(navigation),
        })}
      />
      <BookedNavigator.Screen name="Post" component={PostScreen} />
    </BookedNavigator.Navigator>
  );
}

const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function BottomNavigation() {
  return (
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
        component={PostNavigation}
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
  );
}

const AboutNavigator = createStackNavigator();

function AboutNavigation() {
  return (
    <AboutNavigator.Navigator screenOptions={navigatorOptions}>
      <AboutNavigator.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          title: 'О приложение',
          headerLeft: () => navigationDrawer(navigation),
        })}
      />
    </AboutNavigator.Navigator>
  );
}

const CreateNavigator = createStackNavigator();

function CreateNavigation() {
  return (
    <CreateNavigator.Navigator screenOptions={navigatorOptions}>
      <CreateNavigator.Screen
        name="Create"
        component={CreateScreen}
        options={({ navigation }) => ({
          title: 'Создать новый пост',
          headerLeft: () => navigationDrawer(navigation),
        })}
      />
    </CreateNavigator.Navigator>
  );
}

const MainNavigator = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        drawerContentOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          labelStyle: {
            fontFamily: 'open-bold',
          },
        }}
      >
        <MainNavigator.Screen
          name="PostTabs"
          component={BottomNavigation}
          options={{
            title: 'Посты',
          }}
        />
        <MainNavigator.Screen
          name="About"
          component={AboutNavigation}
          options={{
            title: 'О нас',
          }}
        />
        <MainNavigator.Screen
          name="Create"
          component={CreateNavigation}
          options={{
            title: 'Создать пост',
          }}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
