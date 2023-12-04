import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import i18n from "../../../assets/strings/I18n";
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"
import CardPropiedad from "../../components/cards/cardPropiedad";
import Theme from "../../styles/Theme";
import { useNavigation } from "@react-navigation/native";
import searchIcon from "../../../assets/images/icons/searchIcon.png";
import advancedIcon from "../../../assets/images/icons/advancedSearch.png";
import { getAssets } from '../../../api/assetsAPI';

export default function HomeUI() {

  const navigation = useNavigation();
  const [propiedades, setPropiedades] = useState()
  const [isPropiedadesLoading, setIsPropiedadesLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const propiedadesData = await getAssets();
        setPropiedades(propiedadesData.asset);
        setIsPropiedadesLoading(false);
      } catch (error) {
        console.error('Error fetching assets', error);
      }
    };

    fetchData();
  }, []);


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

  const advancedSearchScreen = () => {
    navigation.navigate("AdvancedSearch")
  }

  const Search = async () => {
    try {
      const results = await getAssets();
      //console.log("Resultados de búsqueda:", results);
      navigation.navigate("UserProfile", { results });
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  const tipoTransaccionFiltro = 1;

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
          <TouchableOpacity onPress={Search} style={styles.search1}>
            <Image source={searchIcon} style={styles.searchIcon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={advancedSearchScreen} style={styles.search2}>
            <Image source={advancedIcon} style={styles.advanced}/>
          </TouchableOpacity>
        </View>

      </View>
      
      <ScrollView vertical>
      
      <Text style={styles.textoBody2}>Puede interesarte </Text>


      <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>


      {!isPropiedadesLoading ? (propiedades.slice(0, 15) .map(propiedad => (
          <CardPropiedad  titulo={propiedad.title} valor={propiedad.price} moneda={propiedad.coin} calle={propiedad.streetName} numero={propiedad.streetNumber} barrio={propiedad.Neighborhood} ambientes={propiedad.room} metros={propiedad.mTotal} tipo={propiedad.tipo} margen={propiedad.margen} onPress={() => navigation.navigate("UserPublicacionPropiedad", { propiedadId: propiedad._id })} />))) : null}


      </ScrollView>




      <Text style={styles.textoBody1}>{i18n.t('homeScreen.SaleProperties')} </Text>

        <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>


          {!isPropiedadesLoading ? (propiedades.slice(0, 15) .filter(propiedad => propiedad.transaction === tipoTransaccionFiltro) .map(propiedad => (
          <CardPropiedad  titulo={propiedad.title} valor={propiedad.price} moneda={propiedad.coin} calle={propiedad.streetName} numero={propiedad.streetNumber} barrio={propiedad.Neighborhood} ambientes={propiedad.room} metros={propiedad.mTotal} tipo={propiedad.transaction} margen={propiedad.margen}/>
          ))) : null}


        </ScrollView>

      <Text style={styles.textoBody1}>{i18n.t('homeScreen.RentProperties')} </Text>

      
      <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>
        {!isPropiedadesLoading ? (propiedades.slice(0, 15) .filter(propiedad => propiedad.transaction !== tipoTransaccionFiltro) .map(propiedad => (
          <CardPropiedad  titulo={propiedad.title} valor={propiedad.price} moneda={propiedad.coin} calle={propiedad.streetName} numero={propiedad.streetNumber} barrio={propiedad.Neighborhood} ambientes={propiedad.room} metros={propiedad.mTotal} tipo={propiedad.transaction} margen={propiedad.margen}/>
        ))) : null}
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
    marginLeft: '22%',
    marginTop: '-4%'
  },

  contenedorHead: {
    flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
    alignItems: 'center',
    marginLeft: "3%",    
    marginTop:"2%",

  },

    contenedorHead2: {
      flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
  },

  contenedorHead2: {
    marginTop: '1.5%',
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

  advanced:{
    maxWidth: Dimensions.get('window').width * 0.09,
    maxHeight: Dimensions.get('window').width * 0.09,
    
  },

  search1:{
    position:'absolute',
    marginLeft: '80%'
    
  },  
  
  search2:{
    position:'absolute',
    marginLeft: '87%'
  },
});
