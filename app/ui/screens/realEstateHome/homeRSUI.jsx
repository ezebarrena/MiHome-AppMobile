import React, { useState, useEffect } from "react";
import {

  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity

} from "react-native";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";

import i18n from "../../../assets/strings/I18n";
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"

import CardPropiedad from "../../components/cards/cardPropiedad";
import { useNavigation } from "@react-navigation/native";

import Theme from "../../styles/Theme";
import DropDownPicker from 'react-native-dropdown-picker';

import DetallePropiedadRS from "../realEstateDetallePropiedad/detallePropiedadRS";
//import UserProfile from "../../screens/userProfile/UserProfile.js"

//SplashScreen.preventAutoHideAsync();

export default function HomeRSUI({ listadoPropiedades }) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: i18n.t('propiedadesEstados.todo'), value: 'todo' },
    { label: i18n.t('propiedadesEstados.venta'), value: 0 },
    { label: i18n.t('propiedadesEstados.vendida'), value: 1 },
    { label: i18n.t('propiedadesEstados.alquiler'), value: 2 },
    { label: i18n.t('propiedadesEstados.alquilada'), value: 3 },
    { label: i18n.t('propiedadesEstados.pausada'), value: 4 }
  ]);
  const[active, setActive]=useState(true)

  const [propiedades, setPropiedades] = useState()


  useEffect(() => {


    setPropiedades(listadoPropiedades.asset);
    if(listadoPropiedades.asset && listadoPropiedades.asset.length > 0){
      setActive(false)
    }
    console.log(propiedades,'s');
  }, [setPropiedades, listadoPropiedades])

  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const filtrarItems = (item) => {

    const asset = listadoPropiedades.asset

    const tipoDeseado = item.value; // Cambia 'venta' al tipo que desees buscar
    let transaccion;
    let estado;

    switch (tipoDeseado) {
      case 0:
        transaccion = 0
        estado = 1
        break
      case 1:
        transaccion = 0
        estado = 0
        break
      case 2:
        transaccion = 1
        estado = 1
        break
      case 3:
        transaccion = 1
        estado = 0
        break
      case 4:
        estado = 0
        const objetosFiltrados = asset.filter(objeto => objeto.state === estado);
        setPropiedades(objetosFiltrados)
        break
    }

    if (tipoDeseado != 4) {
      const objetosFiltrados = asset.filter(objeto => objeto.transaction === transaccion && objeto.state === estado);
      setPropiedades(objetosFiltrados)
    }





    if (item.value == 'todo') {
      setPropiedades(listadoPropiedades.asset)
    }
  }


  const handleImagePress = () => {
    navigation.navigate("RealEstateProfile")
  }


  return (
    <View style={styles.container}>

      <View style={styles.head}>
        <View style={styles.contenedorHead}>
          <Text style={styles.textoHead}>{i18n.t('homeScreenRS.main')}</Text>

          <TouchableOpacity onPress={handleImagePress} style={styles}>
            <Image source={fotoPerfil} style={styles.imagenHead} />
          </TouchableOpacity>
        </View>
        <View style={styles.contenedorHead2}>
          <Text style={styles.textoHead2}>{i18n.t('homeScreenRS.headVisualization')}</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            textStyle={{ fontFamily: "Poppins_500Medium" }}
            containerStyle={{ width: "50%" }}
            placeholder={i18n.t('propiedadesEstados.todo')}
            onSelectItem={(items) => filtrarItems(items)}
            disabled={active}
          />
        </View>
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
        />
      </View>) : (<View style={styles.emptyContainer} ><Text style={styles.textEmpty}>NO TIENES PROPIEDADES CARGADAS {"\n"} </Text><Text style={styles.textEmpty}>CARGA NUEVAS PROPIEDADES HACIENDO CLIC EN PUBLICAR!</Text></View>)

      }

    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    width: "100%",
    backgroundColor: Theme.colors.PRIMARY,
    paddingTop: "8%",
    justifyContent: 'center',
    height: "22%",
    borderBottomLeftRadius: 15, // Redondea la esquina inferior izquierda
    borderBottomRightRadius: 15,
    zIndex: 1,
  },
  textoHead: {
    fontFamily: 'Poppins_700Bold',
    color: 'white',
    fontSize: Dimensions.get('window').width * 0.06,
    paddingLeft: 28
  },
  imagenHead: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.11,
    marginLeft: 20,
  },
  contenedorHead: {
    flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
    alignItems: 'center',
    marginLeft: "3%",

  },
  contenedorHead2: {
    marginTop: '4%',
    flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',

  },
  textoHead2: {
    color: 'white',
    fontFamily: "Poppins_500Medium",
    fontSize: Dimensions.get('window').width * 0.045,
  },
  dropdown: {
    fontFamily: "Poppins_500Medium",
  },
  scrollView: {
    flexGrow: 0,

  },
  scrollViewContent: {
    alignItems: "center",
  },
  cardsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  emptyContainer:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    paddingHorizontal:15,
  },
  textEmpty:{
    fontFamily: 'Poppins_700Bold',
    fontSize: Dimensions.get('window').width * 0.05,
  },
})