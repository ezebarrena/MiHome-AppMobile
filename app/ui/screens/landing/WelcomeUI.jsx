import React from "react";
import { ImageBackground, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "../../../assets/strings/I18n";
import mainBackground from "../../../assets/images/backgrounds/mainBackground.png";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import Theme from "../../styles/Theme";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { signInWithCredential, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

WebBrowser.maybeCompleteAuthSession();

export default function WelcomeUI() {
  const navigation = useNavigation();

  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setIsLogged(false);
      setUserData(null);
    }).catch((error) => {
      console.log(error);
    });
  }

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '478744579990-e28et6m1orfg660p7q1h9jl99bpc26o8.apps.googleusercontent.com',
  });
    
  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserData(user);
          setIsLogged(true);
        }
      });
    }
  }, [response]);

  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.45)", "rgba(81, 47, 123, 1)"]}
        style={styles.gradient}
      >
        <ImageBackground source={mainBackground} resizeMode="cover" style={styles.imageBackground}>
          <Text style={styles.appName}>{i18n.t("common.appName")}</Text>

          <View style={styles.containerLogin}>
            <ButtonWithIcon
              title={i18n.t("welcomeScreen.googleButton")}
              onPress={() => promptAsync()}
              backgroundColor={Theme.colors.PRIMARY}
              icon={require("../../../assets/images/GoogleIcon.png")}
            />

            <Pressable
              onPress={() => navigation.navigate("WelcomeRE")}
            >
              <Text style={styles.realEstateLoginText}>
                {i18n.t("welcomeScreen.startAsRealEstate")}
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  appName: {
    textAlign: "center",
    fontFamily: "Poppins_700Bold_Italic",
    fontSize: 50,
    color: "white",
  },
  containerLogin: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  realEstateLoginText: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
});
