import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigatorConstant from './NavigatorConstant';
import Icon from 'react-native-vector-icons/Ionicons';


import Welcome from '../ui/screens/landing/Welcome';
import Home from '../ui/screens/home/Home';
import Favourites from '../ui/screens/favourites/Favourites';
import Bookings from '../ui/screens/bookings/Bookings';

import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


const tabOptions = {
  tabBarStyle: {
    backgroundColor: '#ECE6F0',
  },
    tabBarActiveTintColor: '#250094',
    tabBarInactiveTintColor: '#1C1B1F',
    labelStyle: { paddingBottom: 10, fontSize: 10 },
    style: { padding: 10, height: 70}
}

const TabBar = () => {
  const getTabIcon = (routeName) => {
    let iconName;

    switch (routeName) {
      case 'Welcome':
        iconName = 'calendar-outline';
        break;
      case 'Home':
        iconName = 'Home';
        break;
      case 'Favoritos':
        iconName = 'heart';
        break;
      case 'Reservas':
        iconName = 'receipt-long';
        break;
      default:
        iconName = 'Home';
    }

    return iconName;
  };


return (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName={NavigatorConstant.NAVIGATOR.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({color, size}) => {
          return <Icon name={iconName} size={size} color={color} />;
        },
        ...tabOptions,
      })}
      >

      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.WELCOME}
        component={Welcome}
        options={{
        }}
      />

      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.HOME}
        component={Home}
        options={{
        }}
      />

      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.FAVOURITES}
        component={Favourites}
        options={{
        }}
      />
      
      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.BOOKINGS}
        component={Bookings}
        options={{
        }}
      />


        

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabBar;
