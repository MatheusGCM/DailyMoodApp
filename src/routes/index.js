import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Details from '../pages/Details';
import New from '../pages/New';
import ActionModal from '../components/ActionModal';

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
          } else if (route.name === 'newScreen') {
            iconName = 'plus';
            background = '#304FFE';
          } else if (route.name === 'sobreScren') {
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
        name="newScreen"
        component={New}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('ActionModal');
          },
        })}
      />
      <Tab.Screen name="sobreScren" component={Sobre} />
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

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="ActionModal" component={ActionModal} />
    </Stack.Navigator>
  );
};

export default Routes;
