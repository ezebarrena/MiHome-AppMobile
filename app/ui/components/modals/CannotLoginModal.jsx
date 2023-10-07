import React from "react";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importa el ícono de cruz
import CustomTextInput from "../inputs/CustomTextInput";
import Button from "../buttons/Button";
import i18n from "../../../assets/strings/I18n";

export default function CannotLoginModal({ isVisible, onClose }) {
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
          <CustomTextInput placeholder={i18n.t('realEstateWelcomeScreen.cannotLoginModal.firstStep.emailInput')} />
          <Button title={i18n.t('realEstateWelcomeScreen.cannotLoginModal.firstStep.sendButton')} size='medium' backgroundColor='#E36565' />
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
});
