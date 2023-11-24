import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../ui/screens/userWelcome/Welcome';
import WelcomeRE from '../ui/screens/realEstateWelcome/WelcomeRE';
import LandingStackNavigator from './LandingStackNavigator';
import LandingStackRE from './LandingStackNavigatorRE';
import DetallePropiedadRS from '../ui/screens/realEstateDetallePropiedad/detallePropiedadRS';
import PublicacionPropiedad from '../ui/screens/publicacionPropiedad/publicacionPropiedad';
import RealEstateProfile from '../ui/screens/realEstateProfile/RealEstateProfile';
import i18n from "../assets/strings/I18n";
import Theme from '../ui/styles/Theme';

// const Stack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        title: '',
        //headerPressColor:Theme.colors.PRIMARY,
      }}
    >

       {/* Navegacion de bienvenida */}
       <Stack.Screen name="Welcome" component={Welcome} />

       {/* Navegacion de inmobiliaria */}
       <Stack.Group>
         <Stack.Screen name="WelcomeRE" component={WelcomeRE} />
         <Stack.Screen name="LandingStackRE" component={LandingStackRE} options={{ headerShown: false }} />
         <Stack.Screen name="DetallesPropiedadRE" component={DetallePropiedadRS} getId={({ params }) => params.propiedadId} options={{ title: i18n.t("detallePropiedadInmobiliaria.titulo") }} />
         <Stack.Screen name="PublicacionPropiedad" component={PublicacionPropiedad} getId={({ params }) => params.propiedadId} options={({ route }) => ({ title: route.params.name, headerStyle: { backgroundColor: Theme.colors.PRIMARY }, headerTintColor: '#fff', headerTransparent: false })} />
         <Stack.Screen name="RealEstateProfile" component={RealEstateProfile} />
       </Stack.Group>

      {/* Navegacion de usuario */}
      <Stack.Group>
        <Stack.Screen name="LandingStack" component={LandingStackNavigator} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
