import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Theme from "../../styles/Theme";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import imagenTest from "../../../assets/images/various/imagenCasaTest.png";
import i18n from "../../../assets/strings/I18n";
import Estados from "../../../assets/funcionTraduccion";

export default function CardBooking({
dateBooked,
dateBookedEnd,
  calle,
  estado,
  onPress,
  price,
  numero,
  assetName,
  transaccion,
}) {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  let tipo = Estados(transaccion, estado);



  let idioma = "propiedadesEstados." + tipo;
  let i18nIdioma = i18n.t(idioma).toLocaleUpperCase();
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={imagenTest} style={styles.propertyImage} />
        <View style={styles.statusIndicator}>
          <Text style={styles.statusIndicatorText}> {assetName}</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.row}>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{estado} - {price}</Text>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{dateBooked} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{calle} {numero}</Text>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{dateBookedEnd}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "94%",
    height: 200,
    borderRadius: 10,
    backgroundColor: Theme.colors.FONDOCARD,
    marginVertical: 10,
    marginHorizontal: 5,
    elevation:5,
    marginLeft:"3%",
    marginRight:"3%"

  },
  imageContainer: {
    flex: 2,
  },
  propertyImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  statusIndicator: {
    position: "absolute",
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
    fontFamily: "Poppins_400Regular",
  },
  dataContainer: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    maxWidth: '60%'
  },
});
