import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavigatorConstant from './NavigatorConstant';
import Favourites from '../ui/screens/userFavorites/Favourites';
import HomeRE from '../ui/screens/realEstateHome/homeRS';
import AgendaRE from '../ui/screens/realEstateAgenda/RealEstateAgenda'
import Icon from 'react-native-vector-icons/Ionicons';
import UploadAsset from '../ui/screens/realEstateUploadAsset/uploadAsset';


const Tab = createMaterialBottomTabNavigator();




const LandingStackNavigatorRE = () => {

    const getTabIcon = (routeName) => {
        let iconName;
    
        switch (routeName) {
          
          case 'Home':
            iconName = 'home';
            break;
          case 'Upload':
            iconName = 'add-circle-outline';
            break;
          case 'Agenda':
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
        activeColor= '#250094'
        inactiveColor= '#1C1B1F'
        backgroundColor = '#ECE6F0'
        
        //shifting= {true}
        //labeled = {false}
        barStyle={{ backgroundColor: '#ECE6F0', height: 70 }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                const iconName = getTabIcon(route.name);
                return <Icon name={iconName} size={24} color={color} />;
            },
        })}
        
        >
      <Tab.Screen name="Home" component={HomeRE} />
      <Tab.Screen name="Upload" component={Favourites} options={{tabBarLabel: false, }} />
      <Tab.Screen name="Agenda" component={AgendaRE} />

    </Tab.Navigator>
  );
}
export default LandingStackNavigatorRE;