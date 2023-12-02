import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import { useCallback } from "react";
import { useFonts, Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";

import i18n from "../../../assets/strings/I18n";



//SplashScreen.preventAutoHideAsync();

export default function BookingsUI() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <View style={styles.container}>

      <View style={styles.contenedorHead}>
        <Text style={styles.textoHead}>Bookings</Text>
      </View>

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1, // Para que la imagen ocupe toda la pantalla
    justifyContent: "center", // Centrar verticalmente
    alignItems: "center", // Centrar horizontalmente
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-start", // Alinea el contenido en la parte superior
    marginTop: 150, // Espacio en la parte superior para separar el texto del borde superior
    width: "100%",
  },

  logoText: {
    textAlign: "center",
    fontFamily: 'Poppins_700Bold_Italic',
    fontSize: 50,
    color: "white",
  },

  boton: {
    backgroundColor: "rgba(81,47,123,1)",
    width: 270,

    height: "auto",
    borderRadius: 10,
  },
  textoBoton: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  textoLoginInmobiliaria: {
    color: "white",
  },

  contenedorLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },


  contenedorHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: "3%",
    paddingTop: 30,
  },

  textoHead: {
    marginLeft: 5,
    marginTop: 25,
    fontFamily: 'Poppins_700Bold',
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.07,
  },
});
