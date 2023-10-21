import React from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ConfirmationModal = ({ isVisible, message, onAccept, acceptColor = "#7cd9af", onDeny, denyColor = "#d97c7c" }) => {
  return (
    <Modal visible={isVisible} animationType="none" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: denyColor }]} onPress={onDeny}>
              <Text style={styles.buttonText}>Denegar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: acceptColor }]} onPress={onAccept}>
              <Text style={styles.buttonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  message: {
    marginHorizontal: 5,
    marginVertical: 10,
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ConfirmationModal;
