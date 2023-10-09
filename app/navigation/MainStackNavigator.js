import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../ui/screens/landing/Welcome';
import WelcomeRE from '../ui/screens/landingRealEstate/WelcomeRE';
import Home from '../ui/screens/home/Home';
import LandingStackNavigator from './LandingStackNavigator'
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
      <Stack.Screen name="WelcomeRE" component={WelcomeRE} />
      <Stack.Screen name="LandingStack" component={LandingStackNavigator} />
    </Stack.Navigator>
  );
}
