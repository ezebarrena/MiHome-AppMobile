import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export const Button = ({ title, titleColor, backgroundColor, onPress, size = 'large' }) => {
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
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: backgroundColor || '#512F7B' }, buttonStyles[size]]}>
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
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: Dimensions.get('window').width * 0.05,
    textAlign: 'center',
  },
});

export default Button;
