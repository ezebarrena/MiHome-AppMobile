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
import Userfavorites from '../ui/screens/userFavorites/Favourites';
import UserHome from '../ui/screens/userHome/Home';
import UserProfile from '../ui/screens/userProfile/UserProfile';
import AdvancedSearch from '../ui/screens/userAdvancedSearch/Search';
import { SafeAreaProvider } from "react-native-safe-area-context";
import UpdateAsset from '../ui/screens/realEstateUpdateAsset/updateAsset';
import PaymentMethods from '../ui/screens/userPaymentMethods/PaymentMethods';
import NewPaymentMethod from '../ui/screens/userNewPaymentMethod/NewPaymentMethod';

const Stack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <SafeAreaProvider>
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
        <Stack.Screen name="UpdatePropiedad" component={UpdateAsset} getId={({ params }) => params.propiedadId} options={{headerTransparent: false }} />
        <Stack.Screen name="DetallesPropiedadRE" component={DetallePropiedadRS} getId={({ params }) => params.propiedadId} options={{ title: i18n.t("detallePropiedadInmobiliaria.titulo") }} />
        <Stack.Screen name="PublicacionPropiedad" component={PublicacionPropiedad} getId={({ params }) => params.propiedadId} options={({ route }) => ({ title: route.params.name, headerStyle: { backgroundColor: Theme.colors.PRIMARY }, headerTintColor: '#fff', headerTransparent: false })} />
        <Stack.Screen name="RealEstateProfile" component={RealEstateProfile} />
      </Stack.Group>

      {/* Navegacion de usuario */}
      <Stack.Group>
        <Stack.Screen name="UserHome" component={UserHome} options={{ headerShown: false }}/>
        <Stack.Screen name="UserFavorites" component={Userfavorites} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="AdvancedSearch" component={AdvancedSearch} options={{ headerShown: false }}/>
        <Stack.Screen name="LandingStack" component={LandingStackNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="UserPaymentMethods" component={PaymentMethods} />
        <Stack.Screen name="UserNewPaymentMethod" component={NewPaymentMethod} />
      </Stack.Group>
    </Stack.Navigator>
    </SafeAreaProvider>
  );
}
