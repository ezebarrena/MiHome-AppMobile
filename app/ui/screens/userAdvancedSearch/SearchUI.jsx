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

import i18n from "../../../assets/strings/I18n";

import Theme from "../../styles/Theme";

import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import searchIcon from "../../../assets/images/icons/searchIcon.png";
import close from "../../../assets/images/icons/close.png";

import CustomTextInput2 from "../../../ui/components/inputs/CustomTextInput2";
import ChoiceInput from "../../../ui/components/inputs/ChoiceInput";
import ChoiceMultipleInput from "../../../ui/components/inputs/ChoiceMultipleInput";
import Button from "../../../ui/components/buttons/Button";


export default function SearchUI() {

  const navigation = useNavigation();

  const [text, setText] = useState('');

  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const goHome = () => {
    navigation.navigate("UserHome")
  }

  const advancedSearchScreen = () => {
    navigation.navigate("AdvancedSearch") //cambiar
  }

  const Search = () => {
    navigation.navigate("UserProfile") //cambiar
  }



  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.contenedorHead}>
          <Text style={styles.textoHead}>{i18n.t('AdvancedSearch.title')}</Text>
          <TouchableOpacity onPress={goHome}>
            <Image source={close} style={styles.imagenHead} />
          </TouchableOpacity>
        </View>
        <View style={styles.contenedorHead2}>
          <TextInput placeholder={i18n.t('homeScreen.PHBusqueda')} 
            style={styles.input}  
            onChangeText={newText => setText(newText)}
          />
          <TouchableOpacity onPress={Search} style={styles.search1}>
            <Image source={searchIcon} style={styles.searchIcon}/>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView> 

            <View style={styles.contenedor}>
              <View style={styles.columna}>
                {/* Contenido de la primera columna */}
                <Text>Precio</Text>
              </View>
              <View style={styles.columna}>
                {/* Contenido de la segunda columna */}
                <CustomTextInput2/>  
              </View>
            </View>

            <View style={styles.contenedor}>
              <View style={styles.columna}>
                {/* Contenido de la primera columna */}
                <Text>Precio</Text>
              </View>
              <View style={styles.columna}>
                {/* Contenido de la segunda columna */}
                <CustomTextInput2/>  
              </View>
            </View>

            <View style={styles.contenedor}>
              <View style={styles.columna}>
                {/* Contenido de la primera columna */}
                <Text>Precio</Text>
              </View>
              <View style={styles.columna}>
                {/* Contenido de la segunda columna */}
                <CustomTextInput2/>  
              </View>
            </View>

            <View style={styles.contenedor}>
              <View style={styles.columna}>
                {/* Contenido de la primera columna */}
                <Text>Precio</Text>
              </View>
              <View style={styles.columna}>
                {/* Contenido de la segunda columna */}
                <CustomTextInput2/>  
              </View>
            </View>

            <View style={styles.contenedor}>
              <View style={styles.columna}>
                {/* Contenido de la primera columna */}
                <Text>Precio</Text>
              </View>
              <View style={styles.columna}>
                {/* Contenido de la segunda columna */}
                <ChoiceInput/>  
              </View>
            </View>

        <Button title={"Busca ahora"} titleColor={"white"} size = 'medium'/>
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
    fontFamily: 'Poppins_700Bold',
    color: 'black',
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
    marginLeft: '49%',
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
  columna: {
    flex: 1, // Esto hace que cada columna ocupe la mitad del espacio disponible
    justifyContent: 'center', // Esto centra el contenido verticalmente en cada columna
    alignItems: 'left', // Esto centra el contenido horizontalmente en cada columna
    paddingLeft: '6%',

  },
});
