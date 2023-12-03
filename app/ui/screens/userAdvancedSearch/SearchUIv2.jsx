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
import CustomTextInput from "../../../ui/components/inputs/CustomTextInput";
import CustomTextInput2 from "../../../ui/components/inputs/CustomTextInput2";
import ChoiceInput from "../../../ui/components/inputs/ChoiceInput";
import ChoiceMultipleInput from "../../../ui/components/inputs/ChoiceMultipleInput";
import Button from "../../../ui/components/buttons/Button";

import { filterSearch } from "../../../api/assetsAPI"; //no esta declarada

export default function SearchUIv2() {

    const navigation = useNavigation();

    const goHome = () => {
        navigation.navigate("UserHome")
    }

    const { form, onChange } = useForm({
        title:"",
        transaction:"",
        type:"",
        location:"",
        min_price:"",
        max_price:"",
        coin:"",
        room:"",
        amenities:[],
    });
  
    const [fontsLoaded, fontError] = useFonts({
      Poppins_700Bold,
      Poppins_500Medium,
    });
  
    if (!fontsLoaded && !fontError) {
      return null;
    }
  
    const limitInput = (value, fieldName, maxLength) => {
      const truncatedValue = value.slice(0, maxLength);
      onChange(truncatedValue, fieldName);
    };

    const handleSubmit = async () => {
      try {
        const results = await filterSearch(form);
        console.log("Resultados de búsqueda:", results);
        navigation.navigate("UserResults", { results });
      } catch (error) {
        console.error("Error al realizar la búsqueda:", error);
      }
    };
  
    return (
        <View style={styles.container}>
            <View style={styles.contenedorHead}>
                <Text style={styles.textoHead}>Advanced search</Text>
                <TouchableOpacity onPress={goHome}>
                    <Image source={close} style={styles.imagenHead} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                
                <Text style={styles.textoBody1}>Que estas buscando? Te ayudamos!</Text>
                <CustomTextInput
                    placeholder="Titulo de propiedad"
                    onChangeText={(value) => onChange(value, "title")}
                    value={form.title}
                />
            
                <Text style={styles.textoBody1}>Tipo de Operacion</Text>
                <ChoiceInput
                    data={[
                        { value: "Compra" },
                        { value: "Venta" },
                    ]}
                    onValueSelect={(value) => onChange(value, "transaction")}
                />

                <Text style={styles.textoBody1}>Tipo de Propiedad</Text>
                <ChoiceInput
                    data={[
                        { value: "Casa" },
                        { value: "Departamento" },
                        { value: "Casa quinta" },
                        { value: "Pen House" },
                        { value: "Terreno" },
                        { value: "Oficina" },
                    ]}
                    onValueSelect={(value) => onChange(value, "type",)}
                />

                <Text style={styles.textoBody1}>Ubicacion</Text>
                <CustomTextInput
                    placeholder="Localidad"
                    onChangeText={(value) => onChange(value, "location")}
                    value={form.location}
                />

                <View >
                    <Text style={styles.textoBody1}>Precio y moneda</Text>
                    <View style={styles.contenedor}>
                        <CustomTextInput2
                            placeholder="Minimo"
                            onChangeText={(value) => limitInput(value, "min_price",15)}
                            value={form.min_price}
                            keyboardType="numeric"

                        />
                        <CustomTextInput2
                            placeholder="Maximo"
                            onChangeText={(value) => limitInput(value, "max_price",15)}
                            value={form.max_price}
                            keyboardType="numeric"
                        />
                    </View>
                    <ChoiceInput
                        data={[
                            { value: "Dolares (USD)" },
                            { value: "Pesos" },
                        ]}
                        onValueSelect={(value) => onChange(value, "coin")}
                    />
                </View>

                <Text style={styles.textoBody1}>Ambientes</Text>
                <CustomTextInput
                    placeholder="Cantidad de ambientes"
                    onChangeText={(value) => limitInput(value, "room",2)}
                    value={form.room}
                    keyboardType="numeric"
                />

                <Text style={styles.textoBody1}>Amenities</Text>
                <ChoiceMultipleInput
                    data = {[
                        { key: 'pool', value: i18n.t('REUploadAssetChoices.pool') },
                        { key: 'climatized_pool', value: i18n.t('REUploadAssetChoices.climatized_pool') },
                        { key: 'covered_pool', value: i18n.t('REUploadAssetChoices.covered_pool') },
                        { key: 'jacuzzi', value: i18n.t('REUploadAssetChoices.jacuzzi') },
                        { key: 'gym', value: i18n.t('REUploadAssetChoices.gym') },
                        { key: 'mpr', value: i18n.t('REUploadAssetChoices.mpr') },
                        { key: 'grill', value: i18n.t('REUploadAssetChoices.grill') },
                        { key: 'terrace', value: i18n.t('REUploadAssetChoices.terrace') },
                        { key: 'garden', value: i18n.t('REUploadAssetChoices.garden') },
                        { key: 'security', value: i18n.t('REUploadAssetChoices.security') },
                        { key: 'sport', value: i18n.t('REUploadAssetChoices.sport') },
                    ]}
                    value={form.amenities}
                    onValueSelect={(key) => onChange(key, "amenities")}
                />

                <Button  title={"Buscar ahora"} titleColor={"white"} size = 'medium' onPress={() => handleSubmit()}/>



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
  