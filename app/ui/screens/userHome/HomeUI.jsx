import React from "react";
import { useState, useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';
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
  TouchableOpacity,
  RefreshControl,

} from "react-native";
import { useCallback } from "react";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";

import i18n from "../../../assets/strings/I18n";
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"

import CardPropiedad from "../../components/cards/cardPropiedad";
import Theme from "../../styles/Theme";

import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

import searchIcon from "../../../assets/images/icons/searchIcon.png";
import advancedIcon from "../../../assets/images/icons/advancedSearch.png";

//import de Asset API
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAssets } from '../../../api/assetsAPI';


export default function HomeUI(listadoPropiedades) {

  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [propiedades, setPropiedades] = useState()
  const [propiedadesBD, setPropiedadesBD] = useState()
  const [refreshing, setRefreshing] = useState(false);

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

  const Search = () => {
    navigation.navigate("UserProfile") //cambiar
  }

  const onRefresh = () => {
    setRefreshing(true);
    const busquedaPropiedades = async () => {

      try {
        const bodyData = {
          state: '',
          transaction: ''
        }

        const respuesta = await getAssets(bodyData)

        setPropiedades(respuesta.asset);
        setPropiedadesBD(respuesta.asset)
        setRefreshing(false)
      }
      catch (error) {
        console.error('Error al obtener la busqueda:', error);
      }

      };


      busquedaPropiedades()
      setTimeout(() => {
        setRefreshing(false);
      }, 2000); 
    };
    //  useFocusEffect(
    //    React.useCallback(() => {
    //      setPropiedades(listadoPropiedades.asset);
    //      setPropiedadesBD(listadoPropiedades.asset);
    //    }, [setPropiedades, listadoPropiedades])
    //);
    

  

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
      
      {propiedades && propiedades.length > 0 ? (<View style={styles.cardsContainer}>
        <ScrollView horizontal
          data={propiedades}
          keyExtractor={item => item.transaccion} //especificar venta
          renderItem={({ item }) => <CardPropiedad moneda={item.coin} valor={item.price} calle={item.streetName} numero={item.streetNumber} barrio={item.neighbourhood} ambientes={item.room} metros={item.mTotal} estado={item.state} transaccion={item.transaction} onPress={() => navigation.navigate("DetallesPropiedadRE", { propiedadId: item._id })} />}
          contentContainerStyle={styles.scrollViewContent} 
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
        </View>) : (<View style={styles.emptyContainer} ><Text style={styles.textEmpty}>{i18n.t('homeScreenRS.noPropiedad')} {"\n"} </Text><Text style={styles.textEmpty}>{i18n.t('homeScreenRS.noPropiedad1')}</Text></View>)

      }

      {propiedades && propiedades.length > 0 ? (<View style={styles.cardsContainer}>
        <ScrollView horizontal
          data={propiedades}
          keyExtractor={item => item.transaccion} //especificar alquiler
          renderItem={({ item }) => <CardPropiedad moneda={item.coin} valor={item.price} calle={item.streetName} numero={item.streetNumber} barrio={item.neighbourhood} ambientes={item.room} metros={item.mTotal} estado={item.state} transaccion={item.transaction} onPress={() => navigation.navigate("DetallesPropiedadRE", { propiedadId: item._id })} />}
          contentContainerStyle={styles.scrollViewContent} 
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
        </View>) : (<View style={styles.emptyContainer} ><Text style={styles.textEmpty}>{i18n.t('homeScreenRS.noPropiedad')} {"\n"} </Text><Text style={styles.textEmpty}>{i18n.t('homeScreenRS.noPropiedad1')}</Text></View>)

      }

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
    marginLeft: '17%',
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
