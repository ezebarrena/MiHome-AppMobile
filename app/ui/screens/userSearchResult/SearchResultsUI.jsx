import React from "react";
import {
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
import i18n from "../../../assets/strings/I18n";
import Theme from "../../styles/Theme";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useForm } from "../../../hooks/useForm";
import close from "../../../assets/images/icons/close.png";
import { getAssets } from '../../../api/assetsAPI';
import CardPropiedad from "../../components/cards/cardPropiedad";
import imagenTest from "../../../assets/images/various/imagenCasaTest.png";




export default function SearchResultsUI({propiedades}) {
    
    const navigation = useNavigation();
    
  

  

    const goHome = () => {
        navigation.navigate("UserHome")
    }

    const [fontsLoaded, fontError] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    

      console.log(propiedades);


    return(

        <View style={styles.container}>
            <View style={styles.contenedorHead}>
                <Text style={styles.textoHead}>Search Results</Text>
                <TouchableOpacity onPress={goHome}>
                    <Image source={close} style={styles.imagenHead} />
                </TouchableOpacity>
            </View>

          <ScrollView vertical style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>


          {propiedades.map(propiedad => (
          <CardPropiedad  titulo={propiedad.title} firstImage={propiedad.image && propiedad.image.length > 0 ? propiedad.image[0] : imagenTest} valor={propiedad.price} moneda={propiedad.coin} calle={propiedad.streetName} numero={propiedad.streetNumber} barrio={propiedad.Neighborhood} ambientes={propiedad.room} metros={propiedad.mTotal} tipo={propiedad.tipo} margen={propiedad.margen} estado={propiedad.state} transaccion={propiedad.transaction} onPress={() => navigation.navigate("Publicacion", { propiedadId: propiedad._id, name: propiedad.title  })} />))}


          </ScrollView>


        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:'3%'
    },
  
    scrollView: {
      flexGrow: 0,
      marginLeft:'2%'
      /*marginTop: '-2%',*/
    },
  
    head: {
      width: "100%",
      paddingTop: "8%",
      justifyContent: 'center',
      height: "21%",
    },
  

    textoHead: {
      marginLeft: 5,
      marginTop: 30,    
      fontFamily: 'Poppins_700Bold',
      color: 'black',
      fontSize: Dimensions.get('window').width * 0.06,
    },
    
    textoBody1: {
      fontSize: Dimensions.get('window').width * 0.04,
      
    },
  
    textoBody2: {
      fontFamily: "Poppins_500Medium",
      fontSize: Dimensions.get('window').width * 0.05,
      marginTop: "4%"
    },
  
    imagenHead: {
      resizeMode: 'contain',
      height: Dimensions.get('window').width * 0.11,
      marginLeft: '50%',
      marginTop: '10%',
    },
  
    contenedorHead: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: "3%",
      paddingTop: 20,
    },
  
      contenedorHead2: {
        flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
  

    contenedor: {
      flex: 1, // Esto hace que el contenedor ocupe todo el espacio disponible
      flexDirection: 'row', // Esto establece la dirección del diseño a horizontal (columnas)

    },
  
    searchText:{
      fontSize: Dimensions.get('window').width * 0.045,
    },
  
    scrollViewContent: {
      paddingStart: '3%',
      paddingEnd: "3%",
      paddingBottom: "1%",
      //textAlign:'center'
    },
  
  
  });
  
