import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export const Button = ({ title, titleColor, backgroundColor, onPress, size = 'large', disabled = false }) => {
  const buttonStyles = {
    small: {
      width: Dimensions.get('window').width * 0.35,
      height: 30,
    },
    medium: {
      width: Dimensions.get('window').width * 0.5,
      height: 45,
    },
    large: {
      width: Dimensions.get('window').width * 0.7,
      height: 60,
    },
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[
        styles.button,
        { backgroundColor: disabled ? '#ccc' : (backgroundColor || '#512F7B') }, // Cambia el color de fondo cuando está deshabilitado
        buttonStyles[size]
      ]}>
        <Text style={[styles.buttonText, { color: titleColor ? titleColor : 'white' }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: Dimensions.get('window').width * 0.05,
    textAlign: 'center',
  },
});

export default Button;
