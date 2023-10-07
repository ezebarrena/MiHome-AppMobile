import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../ui/screens/landing/Welcome';
import WelcomeRE from '../ui/screens/landingRealEstate/WelcomeRE';

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
    </Stack.Navigator>
  );
}
