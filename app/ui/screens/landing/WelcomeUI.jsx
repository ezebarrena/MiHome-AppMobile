import React from "react";
import { ImageBackground, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "../../../assets/strings/I18n";
import fondo from "../../../assets/images/Fondos/fondo.png";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import Theme from "../../styles/Theme";

export default function WelcomeUI() {

  const navigation = useNavigation();
  
  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.45)", "rgba(81,47,123,1)"]}
        style={styles.background}
      >
        <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.logoText}>MiHome</Text>
          </View>

          <View style={styles.contenedorLogin}>
            <ButtonWithIcon
              title={i18n.t("GoogleButton")}
              onPress={() => console.log("Google")}
              backgroundColor={Theme.colors.PRIMARY}
              icon={require("../../../assets/images/GoogleIcon.png")}
            />

            <Pressable>
              <Text
                style={styles.textoLoginInmobiliaria}
                onPress={() => navigation.navigate("WelcomeRE")}
              >
                {i18n.t("PLInmobiliaria")}
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
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 150,
    width: "100%",
  },
  logoText: {
    textAlign: "center",
    fontFamily: 'Poppins_700Bold_Italic',
    fontSize: 50,
    color: "white",
  },
  textoLoginInmobiliaria: {
    color: "white",
  },
  contenedorLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
