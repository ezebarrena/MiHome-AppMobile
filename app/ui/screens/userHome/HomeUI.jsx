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
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Icon,

} from "react-native";
import { useCallback } from "react";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

import i18n from "../../../assets/strings/I18n";
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"

import CardPropiedad from "../../components/cards/cardPropiedad";
import Theme from "../../styles/Theme";

import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useState, useEffect } from "react";

import searchIcon from "../../../assets/images/icons/searchIcon.png"
import advancedIcon from "../../../assets/images/icons/advancedSearch.png"

//SplashScreen.preventAutoHideAsync();

export default function HomeUI() {

  const navigation = useNavigation();

  const [text, setText] = useState('');

  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleImagePress = () => {
    navigation.navigate("UserProfile")
  }



  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.contenedorHead}>
          <Text style={styles.textoHead}>{i18n.t('homeScreen.PHUsuario')}</Text>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={fotoPerfil} style={styles.imagenHead} />
          </TouchableOpacity>
        </View>
        <View style={styles.contenedorHead2}>
          <TextInput placeholder={i18n.t('homeScreen.PHBusqueda')} 
            style={styles.input}  
            onChangeText={newText => setText(newText)}
          />
          <Icon style={styles.search} name={searchIcon} size={20} />
        </View>

      </View>
      
      <ScrollView vertical>
      
      <Text style={styles.textoBody2}>{i18n.t('homeScreen.PHUsuario1')} </Text>

      <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>
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

      <Text style={styles.textoBody1}>{i18n.t('homeScreen.SaleProperties')} </Text>

      <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>
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
      
      <Text style={styles.textoBody1}>{i18n.t('homeScreen.RentProperties')} </Text>

      <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>
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

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  scrollView: {
    flexGrow: 0,
    /*marginTop: '-2%',*/
  },

  scrollViewContent: {
    paddingTop: "2%",
    paddingStart: '3%',
    paddingEnd: "3%",
    paddingBottom: "5%",
  },

  head: {
    width: "100%",
    backgroundColor: Theme.colors.PRIMARY,
    paddingTop: "8%",
    justifyContent: 'center',
    height: "21%",
    borderBottomLeftRadius: 15, // Redondea la esquina inferior izquierda
    borderBottomRightRadius: 15,
   
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
    marginLeft: "5%",
  },

  textoBody2: {
    fontFamily: "Poppins_500Medium",
    fontSize: Dimensions.get('window').width * 0.05,
    marginLeft: "5%",
    marginTop: "4%"
  },

  imagenHead: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.11,
    marginLeft: '33%',
  },

  contenedorHead: {
    flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
    alignItems: 'center',
    marginLeft: "3%",    
    marginTop:"5%",

  },

    contenedorHead2: {
      flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
  },

  contenedorHead2: {
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom:'5%'
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    width: "100%",
    height: 37,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    fontSize: 15,
    paddingLeft:10
  
  },

  search:{

  },
});
