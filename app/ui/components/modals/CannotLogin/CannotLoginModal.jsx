import React, { useState } from "react";
import { Modal, StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default function CannotLoginModal({ isVisible, onClose }) {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleCloseModal = () => {
    setStep(1);
    onClose();
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
            <Pressable onPress={handleCloseModal}>
              <Ionicons name="close" size={24} color="black" />
            </Pressable>
          </View>
          {step === 1 && <Step1 handleNextStep={handleNextStep} />}
          {step === 2 && <Step2 handleNextStep={handleNextStep} />}
          {step === 3 && <Step3 handleNextStep={handleNextStep} />}
          {step === 4 && <Step4 handleCloseModal={handleCloseModal} />}
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
