import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "../../../assets/strings/I18n";
import mainBackground from "../../../assets/images/backgrounds/mainBackground.png";
import Button from "../../components/buttons/Button";
import CustomTextInput from "../../components/inputs/CustomTextInput";
import RegistrationModal from "../../components/modals/RegistrationModal";
import CannotLoginModal from "../../components/modals/CannotLogin/CannotLoginModal";
import { useForm } from "../../../hooks/useForm";
import { logInRealEstate } from "../../../api/realEstatesAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomAlert from "../../components/modals/CustomAlert";

export default function WelcomeReUI() {
  const navigation = useNavigation();

  const [isFormValid, setIsFormValid] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showCannotLoginModal, setShowCannotLoginModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [cargando, setCargando] = useState(false);

  const initialFormState = {
    logInEmail: "",
    password: "",
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const { form, onChange } = useForm(initialFormState);

  const validateForm = () => {
    const isEmailValid = emailRegex.test(form.logInEmail);
    const isNotEmpty = form.logInEmail.trim() !== "" && form.password.trim() !== "";
    setIsFormValid(isNotEmpty && isEmailValid);
  };

  useEffect(() => {
    validateForm();
  }, [form.logInEmail, form.password]);

  const handleLogin = async () => {
    setCargando(true)
    const response = await logInRealEstate(form);
    if (response) {
      console.log("response", response);
      await AsyncStorage.setItem("token", response.token);
      await AsyncStorage.setItem("realEstateId", response.id);
      setCargando(false)
      navigation.navigate("LandingStackRE");
    } else {
      setCargando(false)
      setShowAlert(true);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.45)", "rgba(81,47,123,1)"]}
        style={styles.gradient}
      >
        <ImageBackground source={mainBackground} resizeMode="cover" style={styles.imageBackground}>
          <View style={styles.contentContainer}>
            <Text style={styles.appName}>{i18n.t("common.appName")}</Text>
            <View style={styles.loginContainer}>
              <CustomTextInput
                placeholder={i18n.t("realEstateWelcomeScreen.emailInput")}
                value={form.logInEmail}
                onChangeText={(value) => onChange(value, "logInEmail")}
              />
              <CustomTextInput
                secureTextEntry={true}
                placeholder={i18n.t("realEstateWelcomeScreen.passwordInput")}
                value={form.password}
                onChangeText={(value) => onChange(value, "password")}
              />

              <Button
                title={i18n.t("realEstateWelcomeScreen.loginButton")}
                titleColor="white"
                onPress={handleLogin}
                disabled={!isFormValid}
                loading={cargando}
              />

              <Pressable onPress={() => setShowRegistrationModal(true)}>
                <Text style={styles.signUpText}>
                  {i18n.t("realEstateWelcomeScreen.registerLink")}
                </Text>
              </Pressable>
              <Pressable onPress={() => setShowCannotLoginModal(true)}>
                <Text style={styles.cantLoginText}>
                  {i18n.t("realEstateWelcomeScreen.cannotLogin")}
                </Text>
              </Pressable>
            </View>
            <CustomAlert
              isVisible={showAlert}
              onClose={() => setShowAlert(false)}
              title="Error"
              message="Usuario o contraseña incorrectos"
              buttonColor="#d97c7c"
            />
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
    flex: 2,
    justifyContent: "center",
  },
  signUpText: {
    color: "white",
    textAlign: "center",
    marginTop: 14,
  },
  cantLoginText: {
    color: "white",
    textAlign: "center",
    marginTop: 14,
  },
});
