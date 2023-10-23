import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../ui/screens/userWelcome/Welcome';
import WelcomeRE from '../ui/screens/realEstateWelcome/WelcomeRE';
import LandingStackNavigator from './LandingStackNavigator'
import LandingStackRE from './LandingStackNavigatorRE'


const Stack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <Stack.Navigator
    screenOptions={
      {
        headerTransparent: true,
        title: '',
      }
    }
    >
    
      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Group>
        <Stack.Screen name="WelcomeRE" component={WelcomeRE} />
        <Stack.Screen name="LandingStackRE" component={LandingStackRE} options={{ headerShown: false }}/>
      </Stack.Group>
      

      <Stack.Group>
        <Stack.Screen name="LandingStack" component={LandingStackNavigator} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
