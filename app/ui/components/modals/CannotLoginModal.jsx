import React from "react";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomTextInput from "../inputs/CustomTextInput";
import Button from "../buttons/Button";
import i18n from "../../../assets/strings/I18n";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function CannotLoginModal({ isVisible, onClose }) {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.closeButton}>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color="black" />
            </Pressable>
          </View>
          <Text style={[styles.helpText, { fontFamily: "Roboto_400Regular" }]}>
            {i18n.t('realEstateWelcomeScreen.cannotLoginModal.firstStep.helpText')}
          </Text>
          <CustomTextInput
            placeholder={i18n.t('realEstateWelcomeScreen.cannotLoginModal.firstStep.emailInput')}
          />
          <Button
            title={i18n.t('realEstateWelcomeScreen.cannotLoginModal.firstStep.sendButton')}
            size='medium'
            backgroundColor='#E36565'
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#F7F2FA",
    height: "60%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  closeButton: {
    alignItems: "flex-end",
  },
  helpText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
