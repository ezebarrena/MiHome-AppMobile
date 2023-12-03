import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";
import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

const CustomTextInput = ({alto = 48, paddingHorizontal = 0, placeholder, value, onChangeText, secureTextEntry, keyboardType, defaultValue }) => {

  return (
    <TextInput
      style={[styles.input, {height: alto, paddingHorizontal: paddingHorizontal}]}
      placeholder={placeholder}
      placeholderTextColor={value ? "black" : "#aaaaaa"}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      defaultValue={defaultValue}
      multiline={true}  // Hacer el TextInput multiline
      numberOfLines={100}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white", // RGBA con 90% de transparencia
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 14,
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
