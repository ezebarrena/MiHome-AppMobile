import React, { useState } from "react";
import { View, Text } from "react-native";
import CustomTextInput from "../../inputs/CustomTextInput";
import Button from "../../buttons/Button";
import i18n from "../../../../assets/strings/I18n";
import { validateCode } from "../../../../api/realEstatesAPI";

export default function Step2({ handleNextStep }) {
  const [code, setCode] = useState(""); // Estado para el código de cinco dígitos
  const [isCodeValid, setIsCodeValid] = useState(false); // Estado para la validación del código

  const handleVerifyCode = async () => {
    if (isCodeValid) {
      try {
        await validateCode(code); // Validación del código de cinco dígitos
        handleNextStep(); // Si el código es válido, pasa al siguiente paso
      } catch (error) {
        console.log('Cai en el error', error);
      }
    } else {
      // Si el código no es válido, muestra un mensaje de error o realiza alguna acción adicional.
      console.log("Código no válido");
    }
  };

  const validateDigits = (text) => {
    // Lógica de validación del código de cinco dígitos (puedes personalizarla)
    const codePattern = /^\d{4}$/;
    const isValid = codePattern.test(text);
    setIsCodeValid(isValid);
    setCode(text);
  };

  return (
    <View>
      <Text>
        {i18n.t(
          "realEstateWelcomeScreen.cannotLoginModal.secondStep.helpText"
        )}
      </Text>
      <CustomTextInput
        placeholder={i18n.t(
          "realEstateWelcomeScreen.cannotLoginModal.secondStep.codeInput"
        )}
        value={code}
        onChangeText={(text) => validateDigits(text)} // Validación y actualización del código de cinco dígitos
      />
      <Button
        title={i18n.t(
          "realEstateWelcomeScreen.cannotLoginModal.secondStep.validationButton"
        )}
        size="medium"
        backgroundColor="#E36565"
        onPress={handleVerifyCode}
      />
    </View>
  );
}
