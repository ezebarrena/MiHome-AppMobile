import React from "react";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importa el ícono de cruz
import CustomTextInput from "../inputs/CustomTextInput";
import Button from "../buttons/Button";
import i18n from "../../../assets/strings/I18n";
import { useForm } from "../../../hooks/useForm";
import { signInRealEstate } from "../../../api/realEstatesAPI";

export default function RegistrationModal({ isVisible, onClose }) {

  const initialFormState = {
    fantasyName: "",
    logInEmail: "",
    password: "",
    cuit: "",
  };

  const { form, onChange } = useForm(initialFormState);

  const handleRegistration = async () => {
    const response = await signInRealEstate(form);
    if (response) {
      onClose();
    }
    else {
      alert("Error al registrar usuario");
    }
  };

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
          <CustomTextInput placeholder={i18n.t('realEstateWelcomeScreen.registrationModal.nameInput')} value={form.fantasyName} onChangeText={(value) => onChange(value, "fantasyName")} />
          <CustomTextInput placeholder={i18n.t('realEstateWelcomeScreen.registrationModal.cuitInput')} value={form.cuit} onChangeText={(value) => onChange(value, "cuit")} />
          <CustomTextInput placeholder={i18n.t('realEstateWelcomeScreen.registrationModal.emailInput')} value={form.logInEmail} onChangeText={(value) => onChange(value, "logInEmail")} />
          <CustomTextInput placeholder={i18n.t('realEstateWelcomeScreen.registrationModal.passwordInput')} secureTextEntry={true} value={form.password} onChangeText={(value) => onChange(value, "password")} />
          <Button title={i18n.t('realEstateWelcomeScreen.registrationModal.registerButton')} size='medium' backgroundColor='#E36565' onPress={handleRegistration} />
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
