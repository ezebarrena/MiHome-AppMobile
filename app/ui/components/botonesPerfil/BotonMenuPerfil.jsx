import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

const Boton = ({ iconSource, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.buttonContent}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row', // Alinea los elementos horizontalmente
    alignItems: 'center', // Centra verticalmente los elementos
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinea los elementos a la izquierda
  },
  
  title: {
    fontSize: 18,
  }
});

export default Boton;