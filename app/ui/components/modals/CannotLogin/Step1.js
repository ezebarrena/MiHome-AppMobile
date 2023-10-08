import React, { useState } from "react";
import { View, Text } from "react-native";
import CustomTextInput from "../../inputs/CustomTextInput";
import Button from "../../buttons/Button";
import i18n from "../../../../assets/strings/I18n";

export default function Step1({ handleNextStep }) {
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  const [isEmailValid, setIsEmailValid] = useState(false); // Estado para la validación del correo

  const handleSendCode = () => {
    if (isEmailValid) {
      console.log("Código enviado"); // Muestra "Código enviado" en la consola
      handleNextStep(); // Avanza al siguiente paso
    } else {
      // Si el correo electrónico no es válido, muestra un mensaje de error o realiza alguna acción adicional.
      console.log("Correo electrónico no válido");
    }
  };

  const validateEmail = (text) => {
    // Lógica de validación de correo electrónico (puedes personalizarla)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(text);
    setIsEmailValid(isValid);
    setEmail(text);
  };

  return (
    <View>
      <Text>
        {i18n.t(
          "realEstateWelcomeScreen.cannotLoginModal.firstStep.helpText"
        )}
      </Text>
      <CustomTextInput
        placeholder={i18n.t(
          "realEstateWelcomeScreen.cannotLoginModal.firstStep.emailInput"
        )}
        value={email}
        onChangeText={(text) => validateEmail(text)} // Validación y actualización del correo electrónico
      />
      <Button
        title={i18n.t(
          "realEstateWelcomeScreen.cannotLoginModal.firstStep.sendButton"
        )}
        size="medium"
        backgroundColor="#E36565"
        onPress={handleNextStep}
      />
    </View>
  );
}
