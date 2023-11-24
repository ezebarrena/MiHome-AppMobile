// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import NavigatorConstant from './NavigatorConstant';
// import Icon from 'react-native-vector-icons/Ionicons';

// import Home from '../ui/screens/userHome/Home';
// import Favourites from '../ui/screens/userFavorites/Favourites';
// import Bookings from '../ui/screens/userBookings/Bookings';

// import UserProfile from '../ui/screens/userProfile/UserProfile';
// import HomeRS from '../ui/screens/realEstateHome/homeRS';
// import UploadAsset from '../ui/screens/realEstateUploadAsset/uploadAsset';


// const Tab = createBottomTabNavigator();

// const tabOptions = {
//   tabBarStyle: {
//     backgroundColor: '#ECE6F0',
//   },
//     tabBarActiveTintColor: '#250094',
//     tabBarInactiveTintColor: '#1C1B1F',
//     labelStyle: { paddingBottom: 10, fontSize: 10 },
//     style: { padding: 10, height: 70},

// }

// const TabBar = () => {
//   const getTabIcon = (routeName) => {
//     let iconName;

//     switch (routeName) {
//       case 'Welcome':
//         iconName = 'calendar-outline';
//         break;
//       case 'Home':
//         iconName = 'home';
//         break;
//       case 'FAVORITES':
//         iconName = 'heart';
//         break;
//       case 'BOOKINGS':
//         iconName = 'receipt';
//         break;
//       default:
//         iconName = 'home';
//     }

//     return iconName;
//   };


// return (
  
//     <Tab.Navigator
//       initialRouteName={NavigatorConstant.NAVIGATOR.HOME}
//       screenOptions={({ route }) => ({
        
//         tabBarIcon: ({color, size}) => {
//           const iconName = getTabIcon(route.name);
//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         headerShown: false,
//         ...tabOptions,
//       })}
//       >

//       <Tab.Screen
//         name={NavigatorConstant.NAVIGATOR.HOME}
//         component={Home}
//         options={{
//         }}
//       />

      

//       <Tab.Screen

//         name={NavigatorConstant.NAVIGATOR.FAVORITES}
//         component={Favourites}
//         options={{
//         }}
//       />

//       <Tab.Screen
//         name={NavigatorConstant.NAVIGATOR.PROFILE}
//         component={UserProfile}
//         options={{
//         }}
//       />
      
//       <Tab.Screen
//         name={NavigatorConstant.NAVIGATOR.BOOKINGS}
//         component={Bookings}
//         options={{
//         }}
//       />

//       </Tab.Navigator>
    
//   )
// }

// export default TabBar;
