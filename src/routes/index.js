import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Details from '../pages/Details';
import New from '../pages/New';
import Add from '../pages/Add';

import ButtonTabs from '../components/ButtonTabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator //pagina inicial
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          let background;
          if (route.name === 'homeScreen' || route.name === 'Details') {
            iconName = 'home';
            background = focused ? '#304FFE' : '#EBEEFF';
          } else if (route.name === 'addScreen') {
            iconName = 'plus';
            background = '#304FFE';
          } else if (route.name === 'ProfileScren') {
            iconName = 'format-list-bulleted';
            background = focused ? '#304FFE' : '#EBEEFF';
          }
          return (
            <ButtonTabs name={iconName} color={color} background={background} />
          );
        },
        tabBarStyle: {
          height: 90,
          borderTopWidth: 2,
          borderTopColor: '#C4C4C4',
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#304FFE',
      })}>
      <Tab.Screen name="homeScreen" component={HomeStackScreen} />
      <Tab.Screen
        name="addScreen"
        component={New}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Add');
          },
        })}
      />
      <Tab.Screen name="ProfileScren" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    </ProfileStack.Navigator>
  );
}

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Add" component={Add} />
    </Stack.Navigator>
  );
};

export default Routes;
