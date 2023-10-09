import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

const CustomTextInput = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={value ? "black" : "#aaaaaa"}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(250, 250, 250, 0.9)", // RGBA con 90% de transparencia
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 10,
    textAlign: "center", // Centra el texto del placeholder
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowColor: "black",
      },
      android: {
        elevation: 2, // Esta propiedad agrega sombra en Android
      },
    }),
  },
});

export default CustomTextInput;
