import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  RefreshControl,
  ScrollView
} from "react-native";

import { useFonts, Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";
import i18n from "../../../assets/strings/I18n";
import CardPropiedad from "../../components/cards/cardPropiedad";
import { useNavigation } from "@react-navigation/native";
import Theme from "../../styles/Theme";
import { getMyFavouriteAssets } from '../../../api/usersAPI'; //cambiar API user 
import { useState, useEffect } from "react";


export default function FavouritesUI() {
 
  const navigation = useNavigation();

  const [propiedades, setPropiedades] = useState()
  const [propiedadesBD, setPropiedadesBD] = useState()
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    
    const busquedaPropiedades = async () => {

      try {
     
        const respuesta = await getMyFavouriteAssets()

        setPropiedades(respuesta.asset);
        setPropiedadesBD(respuesta.asset)
        setRefreshing(false)

      }
      catch (error) {
        console.error('Error busqueda favoritos:', error);
      }

      busquedaPropiedades()
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);

    };


  }




  return (
    <View style={styles.container}>
      <View style={styles.contenedorHead}>
        <Text style={styles.textoHead}>Favoritos</Text>
      </View>
        
      {propiedades && propiedades.length > 0 ? (<View style={styles.cardsContainer}>
        <ScrollView
          data={propiedades}
          style={styles.scrollView} 
          keyExtractor={item => item}
          
          renderItem={({ item }) => <CardPropiedad moneda={item.coin} valor={item.price} calle={item.streetName} numero={item.streetNumber} barrio={item.neighbourhood} ambientes={item.room} metros={item.mTotal} estado={item.state} transaccion={item.transaction} onPress={() => navigation.navigate("", { propiedadId: item._id })} />}
          contentContainerStyle={{
            alignItems: "center",
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </View>) : (<View style={styles.emptyContainer} ><Text style={styles.textEmpty}>Agrega propiedades a favoritos {"\n"} </Text></View>)

      }

      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollViewContent} 
        showsHorizontalScrollIndicator={false}>
        <View style={{}}>
          <CardPropiedad valor={"US$180.000"} ubicacion={"calle mitre 123"} ambientes={2} metros={168} tipo={"VENTA"} margen={20} />
        </View>
        <View style={{}}>
          <CardPropiedad valor={"US$180.000"} ubicacion={"calle mitre 123"} ambientes={2} metros={168} tipo={"VENTA"} margen={20} />
        </View>
        <View style={{ }}>
          <CardPropiedad valor={"US$180.000"} ubicacion={"calle mitre 123"} ambientes={2} metros={168} tipo={"VENTA"} margen={20} />
        </View>
        <View style={{ }}>
          <CardPropiedad valor={"US$180.000"} ubicacion={"calle mitre 123"} ambientes={2} metros={168} tipo={"VENTA"} margen={20} />
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
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
    alignItems:'center'
  },

  contenedorHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: "3%",
    paddingTop: 30,
  },

  textoHead: {
    marginLeft: 5,
    marginTop: 30,    
    fontFamily: 'Poppins_700Bold',
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.06,
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

  cardsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 15,
  },
  textEmpty: {
    fontSize: Dimensions.get('window').width * 0.05,
  },

});
