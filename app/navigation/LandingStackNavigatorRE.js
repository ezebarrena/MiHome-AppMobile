import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigatorConstant from './NavigatorConstant';
import Icon from 'react-native-vector-icons/Ionicons';


//import UploadAsset from '../ui/screens/uploadAsset/uploadAsset';
import Favourites from '../ui/screens/favourites/Favourites';
import REProfile from '../ui/screens/realEstateProfile/RealEstateProfile'
import HomeRE from '../ui/screens/homeRealState/homeRS';

const Tab = createBottomTabNavigator();

const tabOptions = {
  tabBarStyle: {
    backgroundColor: '#ECE6F0',
  },
  tabBarActiveTintColor: '#250094',
  tabBarInactiveTintColor: '#1C1B1F',
  labelStyle: { paddingBottom: 10, fontSize: 10 },
  style: { padding: 10, height: 70 }
}

const TabBarRE = () => {
  const getTabIcon = (routeName) => {
    let iconName;

    switch (routeName) {
      
      case 'Home':
        iconName = 'home';
        break;
      case 'FAVORITES':
        iconName = 'add-circle';
        break;
      case 'REPROFILE':
        iconName = 'calendar';
        break;
      default:
        iconName = 'home';
    }

    return iconName;
  };


  return (

    <Tab.Navigator
      initialRouteName={NavigatorConstant.NAVIGATOR.HOMERE}
      screenOptions={({ route }) => ({

        tabBarIcon: ({ color, size }) => {
          const iconName = getTabIcon(route.name);
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        ...tabOptions,
      })}
    >

      <Tab.Screen
        name={NavigatorConstant.NAVIGATOR.HOMERE}
        component={HomeRE}
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
        name={NavigatorConstant.NAVIGATOR.REPROFILE}
        component={REProfile}
        options={{
        }}
      />

    </Tab.Navigator>

  )
}

export default TabBarRE;
