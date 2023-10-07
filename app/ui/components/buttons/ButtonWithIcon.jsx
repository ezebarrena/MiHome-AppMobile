import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

export const ButtonWithIcon = ({ title, icon, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor }]}>
        <Text style={styles.buttonText}>{title}</Text>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: Dimensions.get('window').width * 0.7, // Ajusta el ancho del botón según tus necesidades
    height: 60, // Establece la altura deseada
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  iconContainer: {
    width: '15%', // Porcentaje del ancho del botón para el contenedor del icono
    aspectRatio: 1, // Para mantener la relación de aspecto del icono
    marginLeft: 10,
  },
  icon: {
    flex: 1, // Para que el icono ocupe todo el espacio del contenedor
    width: undefined,
    height: undefined,
  },
  buttonText: {
    color: '#fff',
    fontSize: Dimensions.get('window').width * 0.05,
  },
});

export default ButtonWithIcon;



