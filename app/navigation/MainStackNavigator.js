import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../ui/screens/userWelcome/Welcome';
import WelcomeRE from '../ui/screens/realEstateWelcome/WelcomeRE';
import LandingStackNavigator from './LandingStackNavigator'
import LandingStackRE from './LandingStackNavigatorRE'
import DetallePropiedadRS from '../ui/screens/realEstateDetallePropiedad/detallePropiedadRS';
import PublicacionPropiedad from '../ui/screens/publicacionPropiedad/publicacionPropiedad';
import i18n from "../assets/strings/I18n";
import Theme from '../ui/styles/Theme';

const Stack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerTransparent: true,
          title: '',
          //headerPressColor:Theme.colors.PRIMARY,
        }
      }
    >

      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Group>
        <Stack.Screen name="WelcomeRE" component={WelcomeRE} />
        <Stack.Screen name="LandingStackRE" component={LandingStackRE} options={{ headerShown: false }} />
        <Stack.Screen name="DetallesPropiedadRE" component={DetallePropiedadRS} getId={({params})=>params.propiedadId} options={{title:i18n.t("detallePropiedadInmobiliaria.titulo")}} />
        <Stack.Screen name="PublicacionPropiedad" component={PublicacionPropiedad} getId={({params})=>params.propiedadId} options={{title:"Titulo largo de la propiedad", headerStyle:{backgroundColor:Theme.colors.PRIMARY}, headerTintColor:'#fff', headerTransparent:false}} />
      </Stack.Group>


      <Stack.Group>
        <Stack.Screen name="LandingStack" component={LandingStackNavigator} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
