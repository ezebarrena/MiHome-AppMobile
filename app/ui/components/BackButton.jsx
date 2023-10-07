import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const BackButton = ({ iconSource, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={iconSource} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20, // Ajusta la posición vertical según tus necesidades
    right: 0, // Ajusta la posición horizontal según tus necesidades
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BackButton;