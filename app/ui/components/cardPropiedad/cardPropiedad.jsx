import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Theme from "../../styles/Theme";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import imagenTest from '../../../assets/images/various/imagenCasaTest.png';

export default function CardPropiedad({ valor, ubicacion, ambientes, metros, tipo, onPress }) {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={imagenTest} style={styles.propertyImage} />
        <View style={styles.statusIndicator}>
          <Text style={styles.statusIndicatorText}>{tipo}</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>{valor}</Text>
          <Text style={styles.text}>{ambientes} ambientes</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{ubicacion}</Text>
          <Text style={styles.text}>{metros} m2 totales</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 330,
    height: 200,
    borderRadius: 10,
    backgroundColor: Theme.colors.FONDOCARD,
    marginVertical: 5,
  },
  imageContainer: {
    flex: 2,
  },
  propertyImage: {
    resizeMode: 'cover',
    width: "100%",
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  statusIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: Theme.colors.PRIMARY,
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    elevation: 5,
  },
  statusIndicatorText: {
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontFamily: 'Poppins_400Regular',
  },
  dataContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
});
