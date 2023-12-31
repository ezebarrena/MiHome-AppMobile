import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavigatorConstant from './NavigatorConstant';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../ui/screens/userHome/Home';
import Favourites from '../ui/screens/userFavorites/Favourites';
import Bookings from '../ui/screens/userBookings/Bookings';
import UserAgenda from '../ui/screens/userAgenda/UserAgenda';
import UserProfile from '../ui/screens/userProfile/UserProfile';
import HomeRS from '../ui/screens/realEstateHome/homeRS';
import UploadAsset from '../ui/screens/realEstateUploadAsset/uploadAsset';


const Tab = createMaterialBottomTabNavigator();


const TabBar = () => {
  const getTabIcon = (routeName) => {
    let iconName;

    switch (routeName) {
      
      case 'HOME':
        iconName = 'home';
        break;
      case 'FAVORITES':
        iconName = 'heart';
        break;
      case 'BOOKINGS':
        iconName = 'receipt';
        break;
      case 'AGENDA':
        iconName = 'calendar';
        break;
      
    }

    return iconName;
  };


return (
  
    <Tab.Navigator
      initialRouteName={NavigatorConstant.NAVIGATOR.HOME}
      activeColor= '#250094'
      inactiveColor= '#1C1B1F'
      barStyle={{ backgroundColor: '#ECE6F0', height: 70 }}
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({color, size}) => {
          const iconName = getTabIcon(route.name);
          return <Icon name={iconName} size={24} color={color} />;
        },
        
      })}
      >

      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.HOME}
        component={Home}
        options={{
        }}
      />

      

      <Tab.Screen

        name={NavigatorConstant.NAVIGATOR.FAVORITES}
        component={Favourites}
        options={{
        }}
      />

      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.USERAGENDA}
        component={UserAgenda}
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
    
  )
}

export default TabBar;
