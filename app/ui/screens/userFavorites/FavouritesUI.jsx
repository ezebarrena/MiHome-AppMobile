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
import imagenTest from "../../../assets/images/various/imagenCasaTest.png";
import { getAssets } from '../../../api/assetsAPI';



export default function FavouritesUI() {
 
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

  const goHome = () => {
    navigation.navigate("UserHome")
  }

  const tipoEstadoFiltro = 1;


  return (
    <View style={styles.container}>
      <View style={styles.contenedorHead}>
        <Text style={styles.textoHead}>Favoritos</Text>
      </View>

      <View style={styles.booking}>
          <Text style={styles.bookingText}>Que estas esperando para hacer tu reserva?</Text>
          <TouchableOpacity>
            <Text style={styles.bookingButton} onPress={goHome}>Ver propiedades</Text>
          </TouchableOpacity>
        </View>

      <ScrollView vertical style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>


      {!isPropiedadesLoading ? (propiedades.slice(0, 20) .filter(propiedad => propiedad.state === tipoEstadoFiltro).map(propiedad => (
      <CardPropiedad  titulo={propiedad.title} firstImage={propiedad.image && propiedad.image.length > 0 ? propiedad.image[0] : imagenTest} valor={propiedad.price} moneda={propiedad.coin} calle={propiedad.streetName} numero={propiedad.streetNumber} barrio={propiedad.Neighborhood} ambientes={propiedad.room} metros={propiedad.mTotal} tipo={propiedad.tipo} margen={propiedad.margen} estado={propiedad.state} transaccion={propiedad.transaction} onPress={() => navigation.navigate("Publicacion", { propiedadId: propiedad._id })} />))) : null}


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
    marginLeft: 30,
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


  bookingText:{
    fontSize: Dimensions.get('window').width * 0.04,
    marginBottom:10
  },

  bookingButton:{
    fontSize: Dimensions.get('window').width * 0.035,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:1,
    padding:7,
    width:'40%',
    textAlign:'center'

  },

  booking:{
    marginLeft: "3%",
    marginRight: "3%",
    height:90,
    backgroundColor:Theme.colors.FONDOCARD,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    paddingLeft:15,
    paddingTop:10,
    marginBottom:10,
    marginTop:5
  },


});
