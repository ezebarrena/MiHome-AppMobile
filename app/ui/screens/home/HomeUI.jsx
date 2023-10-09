import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import { useCallback } from "react";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "../../../assets/strings/I18n";

import fondo from "../../../assets/images/Fondos/fondo.png"
import CardPropiedad from "../../components/cardPropiedad/cardPropiedad.js"
import Theme from "../../styles/Theme";

//SplashScreen.preventAutoHideAsync();

export default function HomeUI() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.textoHead}>{i18n.t('PHUsuario')} Usuario!</Text>
      </View>
      <Text style={styles.textoBody1}>{i18n.t('PHUsuario1')} </Text>

      <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>


        <View style={{ height: '15%' }}>
          <CardPropiedad valor={"US$180.000"} ubicacion={"calle mitre 123"} ambientes={2} metros={168} tipo={"VENTA"} margen={20} />
        </View>
        <View style={{ height: '15%' }}>
          <CardPropiedad valor={"US$180.000"} ubicacion={"calle mitre 123"} ambientes={2} metros={168} tipo={"VENTA"} margen={20} />
        </View>
        <View style={{ height: '15%' }}>
          <CardPropiedad valor={"US$180.000"} ubicacion={"calle mitre 123"} ambientes={2} metros={168} tipo={"VENTA"} margen={20} />
        </View>
      </ScrollView>
      <Text>{i18n.t('PHUsuario1')} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  scrollView: {


    flexGrow: 0,
  },

  scrollViewContent: {
    paddingBottom: "14%",
    paddingTop: "6%",
    paddingStart: '5%',
    paddingEnd: "2%",
  },

  head: {
    width: "100%",
    backgroundColor: Theme.colors.PRIMARY,
    paddingTop: "8%",
    justifyContent: 'center',
    height: "20%",
    borderBottomLeftRadius: 15, // Redondea la esquina inferior izquierda
    borderBottomRightRadius: 15,
    marginBottom: 30,
  },

  textoHead: {
    fontFamily: 'Poppins_700Bold',
    color: 'white',
    fontSize: Dimensions.get('window').width * 0.07,
    marginLeft: "3%"
  },

  textoBody1: {
    fontFamily: "Poppins_500Medium",
    fontSize: Dimensions.get('window').width * 0.05,
    marginLeft: "3%",
  },

});
