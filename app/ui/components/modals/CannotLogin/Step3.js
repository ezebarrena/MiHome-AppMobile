import React, { useState } from "react";
import { View, Text } from "react-native";
import CustomTextInput from "../../inputs/CustomTextInput";
import Button from "../../buttons/Button";
import i18n from "../../../../assets/strings/I18n";

export default function Step3({ handleNextStep }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleVerifyPassword = () => {
    if (isPasswordValid && password === confirmPassword) {
      console.log("Contraseña verificada");
      // Realiza aquí la lógica para cambiar la contraseña en tu sistema.
      // Una vez cambiada con éxito, puedes avanzar al siguiente paso.
      handleNextStep();
    } else {
      console.log("Contraseña no válida o no coincide con la confirmación");
    }
  };

  const validatePassword = (text) => {
    const isValid = text.length > 7;
    setIsPasswordValid(isValid);
    setPassword(text);
  };

  return (
    <View>
      <Text>
        {i18n.t("realEstateWelcomeScreen.cannotLoginModal.thirdStep.helpText")}
      </Text>
      <CustomTextInput
        placeholder={i18n.t("realEstateWelcomeScreen.cannotLoginModal.thirdStep.passwordInput")}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => validatePassword(text)}
      />
      <CustomTextInput
        placeholder={i18n.t("realEstateWelcomeScreen.cannotLoginModal.thirdStep.confirmPasswordInput")}
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Button
        title={i18n.t("realEstateWelcomeScreen.cannotLoginModal.thirdStep.changePasswordButton")}
        size="medium"
        backgroundColor="#E36565"
        onPress={handleNextStep}
      />
    </View>
  );
}
