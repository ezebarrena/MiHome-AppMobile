import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "../../../assets/strings/I18n";
import mainBackground from "../../../assets/images/backgrounds/mainBackground.png";
import Button from "../../components/buttons/Button";
import CustomTextInput from "../../components/inputs/CustomTextInput";
import RegistrationModal from "../../components/modals/RegistrationModal";
import CannotLoginModal from "../../components/modals/cannotLoginModal";

export default function WelcomeReUI() {
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold_Italic,
  });

  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showCannotLoginModal, setShowCannotLoginModal] = useState(false);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.45)", "rgba(81,47,123,1)"]}
        style={styles.gradient}
      >
        <ImageBackground source={mainBackground} resizeMode="cover" style={styles.imageBackground}>
          <Text style={styles.appName}>{i18n.t("common.appName")}</Text>

          <View style={styles.containerLogin}>
            <CustomTextInput placeholder={i18n.t('realEstateWelcomeScreen.emailInput')} />
            <CustomTextInput placeholder={i18n.t('realEstateWelcomeScreen.passwordInput')} />
            <Button title={i18n.t('realEstateWelcomeScreen.loginButton')} titleColor='#E36565' />

            <Pressable onPress={() => setShowRegistrationModal(true)}>
              <Text style={styles.realEstateLoginText}>
                {i18n.t('realEstateWelcomeScreen.registerLink')}
              </Text>
            </Pressable>
            <Pressable onPress={() => setShowCannotLoginModal(true)}>
              <Text style={styles.realEstateLoginText}>
                {i18n.t('realEstateWelcomeScreen.cannotLogin')}
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </LinearGradient>

      <RegistrationModal
        isVisible={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
      />

      <CannotLoginModal
        isVisible={showCannotLoginModal}
        onClose={() => setShowCannotLoginModal(false)}
      />
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
  },
  realEstateLoginText: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
});
