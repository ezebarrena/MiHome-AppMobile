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

import searchIcon from "../../../assets/images/icons/searchIcon.png";
import close from "../../../assets/images/icons/close.png";

import CustomTextInput from "../../../ui/components/inputs/CustomTextInput";
import CustomTextInput2 from "../../../ui/components/inputs/CustomTextInput2";
import ChoiceInput from "../../../ui/components/inputs/ChoiceInput";
import ChoiceMultipleInput from "../../../ui/components/inputs/ChoiceMultipleInput";
import Button from "../../../ui/components/buttons/Button";
import DropDownPicker from 'react-native-dropdown-picker';

export default function SearchUIv2() {

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
  
    
  
    return (
        <View style={styles.container}>
            <View style={styles.contenedorHead}>
                <Text style={styles.textoHead}>Advanced search</Text>
                <TouchableOpacity onPress={goHome}>
                    <Image source={close} style={styles.imagenHead} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                
                <Text style={styles.textoBody1}>Titulo</Text>
                <CustomTextInput/>
            
                <Text style={styles.textoBody1}>Tipo de Operacion</Text>
                <ChoiceInput/>

                <Text style={styles.textoBody1}>Tipo de Propiedad</Text>
                <ChoiceInput/>

                <Text style={styles.textoBody1}>Ubicacion</Text>
                <CustomTextInput/>

                <View style={styles.contenedorConFondo}>
                    <Text style={styles.textoBody1}>Precio y moneda</Text>
                    <View style={styles.contenedor}>
                        <CustomTextInput2/>
                        <CustomTextInput2/>
                    </View>
                    <ChoiceInput/>

                </View>



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
      paddingTop: "8%",
      justifyContent: 'center',
      height: "21%",
    },
  
    textoHead: {
        marginLeft: 5,
        marginTop: 30,    
        marginBottom:20,
        fontFamily: 'Poppins_700Bold',
        color: 'black',
        fontSize: Dimensions.get('window').width * 0.06,
      },
      
    textoBody1: {
      fontSize: Dimensions.get('window').width * 0.05,
      marginLeft: "4%",
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
      marginLeft: '45%',
      marginTop: '3%',
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
      marginBottom:'5%',
      flexDirection: 'row',
      flex:1
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
  
    contenedorConFondo: {
      backgroundColor: Theme.colors.FONDOCARD,  
    },
    
    columna: {
      flex: 1, // Esto hace que cada columna ocupe la mitad del espacio disponible
      justifyContent: 'center', // Esto centra el contenido verticalmente en cada columna
      alignItems: 'left', // Esto centra el contenido horizontalmente en cada columna
      paddingLeft: '6%',
      //height:70, //eliminar de ser necesario
    },
  
    columna2: {
      flex: 1, // Esto hace que cada columna ocupe la mitad del espacio disponible
      justifyContent: 'center', // Esto centra el contenido verticalmente en cada columna
      alignItems: 'left', // Esto centra el contenido horizontalmente en cada columna
      paddingLeft: '2%',
      marginRight:6
    },
  
    searchText:{
      fontSize: Dimensions.get('window').width * 0.045,
    },
  
  
  
  });
  