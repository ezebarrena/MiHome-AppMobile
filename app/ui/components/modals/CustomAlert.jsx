import React from "react";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";

const CustomAlert = ({ isVisible, onClose, title, message }) => {
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
                <Text>X</Text>
                </Pressable>
            </View>
            <Text>{title}</Text>
            <Text>{message}</Text>
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

export default CustomAlert;
