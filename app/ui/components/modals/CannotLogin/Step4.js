import React from "react";
import { View, Text } from "react-native";
import Button from "../../buttons/Button";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../../../../assets/strings/I18n";

export default function Step4({ handleCloseModal }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Ionicons name="ios-checkmark-circle" size={150} color="#512F7B" />
      <Text>{i18n.t("realEstateWelcomeScreen.cannotLoginModal.fourthStep.helpText")}</Text>
      <Button
        title={i18n.t("realEstateWelcomeScreen.cannotLoginModal.fourthStep.loginButton")}
        size="medium"
        backgroundColor="#E36565"
        onPress={handleCloseModal}
      />
    </View>
  );
}
