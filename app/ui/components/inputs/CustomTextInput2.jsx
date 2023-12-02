import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";
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
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    width:'100%',
    marginLeft:'-12%',
    marginVertical: 10,
    textAlign: "left", // Centra el texto del placeholder
    paddingLeft: '6%',
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
