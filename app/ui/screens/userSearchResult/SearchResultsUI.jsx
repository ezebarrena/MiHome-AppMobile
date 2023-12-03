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

import {  } from "../../../api/assetsAPI"; //no esta declarada

export default function SearchResultsUI() {
    
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
    



    return(

        <View style={styles.container}>
            <View style={styles.contenedorHead}>
                <Text style={styles.textoHead}>Search Results</Text>
                <TouchableOpacity onPress={goHome}>
                    <Image source={close} style={styles.imagenHead} />
                </TouchableOpacity>
            </View>

            <ScrollView>


                
            </ScrollView>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:'4%'
    },
  
    scrollView: {
      flexGrow: 0,
      /*marginTop: '-2%',*/
    },
  
    head: {
      width: "100%",
      paddingTop: "8%",
      justifyContent: 'center',
      height: "21%",
    },
  
    textoHead: {
        marginTop: 10,    
        marginBottom:20,
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
      marginLeft: '45%',
      marginTop: '-6%',
    },
  
    contenedorHead: {
      flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
      alignItems: 'center',
      marginTop:"7%",
  
    },
  
      contenedorHead2: {
        flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
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
      paddingLeft:10,
      flex:1
    
    },
  
    searchIcon:{
      maxWidth: Dimensions.get('window').width * 0.063,
      maxHeight: Dimensions.get('window').width * 0.063,
      marginTop:5.7,
    },
  
    search1:{
      position:'absolute',
      marginLeft: '87%'
      
    },  
  
    contenedor: {
      flex: 1, // Esto hace que el contenedor ocupe todo el espacio disponible
      flexDirection: 'row', // Esto establece la dirección del diseño a horizontal (columnas)

    },
  
    searchText:{
      fontSize: Dimensions.get('window').width * 0.045,
    },
  
  
  
  });
  
