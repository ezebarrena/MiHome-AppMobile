import React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import NavigatorConstant from './NavigatorConstant';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Welcome from '../ui/screens/landing/Welcome';
import Home from '../ui/screens/home/Home';
import Favourites from '../ui/screens/favourites/Favourites';
import Bookings from '../ui/screens/bookings/Bookings';

import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default LandingStackNavigator = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName={NavigatorConstant.NAVIGATOR.WELCOME}
      screenOptions={{headerShown: false}}
      >

      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.WELCOME}
        component={Welcome}
        options={{
          tabBarLabel: 'Welcome',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name='home' color={'#250094'} size={24}/>
          )
        }}
      />

      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.HOME}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name='home' color={'#250094'} size={24}/>
          )
        }}
      />

      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.FAVOURITES}
        component={Favourites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name='favorite' color={'#250094'} size={24}/>
          )
        }}
      />
      
      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.BOOKINGS}
        component={Bookings}
        options={{
          tabBarLabel: 'Reservas',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name='receipt' color={'#250094'} size={24}/>
          )
        }}
      />

    </Tab.Navigator>
  </NavigationContainer>
  )
}