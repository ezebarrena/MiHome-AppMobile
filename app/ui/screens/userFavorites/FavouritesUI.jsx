import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  RefreshControl
} from "react-native";

import { useFonts, Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";
import i18n from "../../../assets/strings/I18n";
import CardPropiedad from "../../components/cards/cardPropiedad";
import { useNavigation } from "@react-navigation/native";
import Theme from "../../styles/Theme";
import { getMyRealEstateAssets } from '../../../api/assetsAPI';
import { useState, useEffect } from "react";


export default function WelcomeUI(listadoPropiedades) {
 
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [active, setActive] = useState(true)
  const [propiedades, setPropiedades] = useState()
  const [propiedadesBD, setPropiedadesBD] = useState()
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    const busquedaPropiedades = async () => {
      const valor = await AsyncStorage.getItem('realEstateId')

      try {
        const bodyData = {
          realEstateName: valor,
          state: '',
          transaction: ''
        }

        const respuesta = await getMyRealEstateAssets(bodyData)


        setPropiedades(respuesta.asset);
        setPropiedadesBD(respuesta.asset)
      }
      catch (error) {
        console.error('Error al obtener la busqueda:', error);
      }

    };

    seEffect(() => {


      setPropiedades(listadoPropiedades.asset);
      setPropiedadesBD(listadoPropiedades.asset);
      if (listadoPropiedades.asset && listadoPropiedades.asset.length > 0) {
        setActive(false)
      }
      console.log(propiedades, 's');
    }, [setPropiedades, listadoPropiedades])


  }




  return (
    <View style={styles.container}>
      <View style={styles.contenedorHead}>
        <Text style={styles.textoHead}>Favoritos</Text>
      </View>
        
      {propiedades && propiedades.length > 0 ? (<View style={styles.cardsContainer}>
        <FlatList
          data={propiedades}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <CardPropiedad moneda={item.coin} valor={item.price} calle={item.streetName} numero={item.streetNumber} barrio={item.neighbourhood} ambientes={item.room} metros={item.mTotal} estado={item.state} transaccion={item.transaction} onPress={() => navigation.navigate("DetallesPropiedadRE", { propiedadId: item._id })} />}
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
      </View>) : (<View style={styles.emptyContainer} ><Text style={styles.textEmpty}>Agrega propiedades a favoritos {"\n"} </Text><Text style={styles.textEmpty}></Text></View>)

      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  contenedorHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: "3%",
    paddingTop: 30,
  },

  textoHead: {
    marginTop: 20,
    fontFamily: 'Poppins_700Bold',
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.07,
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
