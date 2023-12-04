import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importa el ícono de cruz
import CustomTextInput from "../inputs/CustomTextInput";
import Button from "../buttons/Button";
import i18n from "../../../assets/strings/I18n";
import { useForm } from "../../../hooks/useForm";
import { signInRealEstate } from "../../../api/realEstatesAPI";
import CustomAlert from "../../components/modals/CustomAlert";

export default function RegistrationModal({ isVisible, onClose }) {

  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const initialFormState = {
    fantasyName: "",
    logInEmail: "",
    password: "",
    contactEmail:"",
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const { form, onChange } = useForm(initialFormState);

  const validateForm = () => {
    const isEmailValid = emailRegex.test(form.logInEmail);
    const isNotEmpty = form.fantasyName.trim() !== "" && form.logInEmail.trim() !== "" && form.password.trim() !== "";
    setIsFormValid(isNotEmpty && isEmailValid);
  };

  useEffect(() => {
    validateForm();
  }, [form.fantasyName, form.logInEmail, form.password]);

  const handleRegistration = async () => {
    if(form.contactEmail === ""){
      onChange(form.fantasyName, "contactEmail")
    }
    const response = await signInRealEstate(form);
    if (response) {
      console.log("response", response);
      onClose();
    }
    else {
      setShowAlert(true);
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
          <CustomTextInput placeholder={i18n.t('realEstateWelcomeScreen.registrationModal.emailInput')} value={form.logInEmail} onChangeText={(value) => onChange(value, "logInEmail")} />
          <CustomTextInput placeholder={i18n.t('realEstateWelcomeScreen.registrationModal.contactEmail')} value={form.contactEmail} onChangeText={(value) => onChange(value, "contactEmail")} />
          <CustomTextInput placeholder={i18n.t('realEstateWelcomeScreen.registrationModal.passwordInput')} secureTextEntry={true} value={form.password} onChangeText={(value) => onChange(value, "password")} />
          <Button title={i18n.t('realEstateWelcomeScreen.registrationModal.registerButton')} size='medium' backgroundColor='#E36565' onPress={handleRegistration} disabled={!isFormValid} />
        </View>
        <CustomAlert
          isVisible={showAlert}
          onClose={() => setShowAlert(false)}
          title={i18n.t('realEstateWelcomeScreen.registrationModal.alertTitle')}
          message={i18n.t('realEstateWelcomeScreen.registrationModal.alertMessage')}
        />
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
    height: "50%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  closeButton: {
    alignItems: "flex-end",
  },
});
