import React from "react";
import { ImageBackground, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "../../../assets/strings/I18n";
import mainBackground from "../../../assets/images/backgrounds/mainBackground.png";
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
        colors={["rgba(0, 0, 0, 0.45)", "rgba(81, 47, 123, 1)"]}
        style={styles.gradient}
      >
        <ImageBackground source={mainBackground} resizeMode="cover" style={styles.imageBackground}>
          <View style={styles.contentContainer}>
            <Text style={styles.appName}>{i18n.t("common.appName")}</Text>
            <View style={styles.loginContainer}>
              <ButtonWithIcon
                title={i18n.t("welcomeScreen.googleButton")}
                onPress={() => navigation.navigate("LandingStack")}
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
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  appName: {
    flex: 1,
    marginTop: 50,
    textAlign: "center",
    fontFamily: "Poppins_700Bold_Italic",
    fontSize: 50,
    color: "white",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
  },
  realEstateLoginText: {
    color: "white",
    textAlign: "center",
    marginTop: 14,
  },
});
