import React, { useState, useEffect } from "react";
import {

  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Dimensions,
  Image,

} from "react-native";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

import i18n from "../../../assets/strings/I18n";
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"

import CardPropiedad from "../../components/cardPropiedad/cardPropiedad.js"
import Theme from "../../styles/Theme";
import DropDownPicker from 'react-native-dropdown-picker';


//SplashScreen.preventAutoHideAsync();

export default function HomeRSUI() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: i18n.t('propiedadesEstados.todo'), value: '0' },
    { label: i18n.t('propiedadesEstados.venta'), value: '1' },
    { label: i18n.t('propiedadesEstados.vendida'), value: '2' },
    { label: i18n.t('propiedadesEstados.alquiler'), value: '3' },
    { label: i18n.t('propiedadesEstados.alquiladas'), value: '4' },
    { label: i18n.t('propiedadesEstados.pausada'), value: '5' },]);
  const [itemSeleccionado, setItemSeleccionado] = useState()

  const [propiedades, setPropiedades] = useState([{ valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'venta' }, { valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquiler' }, { valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquiladas' }])


  /*useEffect(() => {
    const listado = [{ valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'venta' }, { valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquiler' }, { valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquiladas' }]
    if (itemSeleccionado == undefined) {
      setPropiedades(listado);
    }
    /*if (itemSeleccionado != undefined) {
      const tipoDeseado = 'venta'; // Cambia 'venta' al tipo que desees buscar

      const objetosFiltrados = listado.filter(objeto => objeto.tipo === tipoDeseado);
      setPropiedades(objetosFiltrados)
    }
  })*/

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const filtrarItems = (item) => {
    setItemSeleccionado(item.value)
    console.log(item.value);
  }


  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.contenedorHead}>
          <Text style={styles.textoHead}>{i18n.t('homeScreenRS.main')}</Text>
          <Image source={fotoPerfil} style={styles.imagenHead} />
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
          />
        </View>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        {propiedades.map((propiedad, index) => (
<<<<<<< HEAD:app/ui/screens/homeRealState/homeRSUI.jsx
          <View key={index} style={{ height: '5%', marginBottom: "55%" }}>
=======
          <View key={index} style={{ height: '5%', marginBottom: '50%' }}>
>>>>>>> 727a0203de9a450c5319745ccdccd02333565fb3:app/ui/screens/realEstateHome/homeRSUI.jsx
            <CardPropiedad valor={propiedad.valor} ubicacion={propiedad.ubicacion} ambientes={propiedad.ambientes} metros={propiedad.metros} tipo={propiedad.tipo} margen={0} />
          </View>

        ))}
      </ScrollView>
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
    height: "25%",
    borderBottomLeftRadius: 15, // Redondea la esquina inferior izquierda
    borderBottomRightRadius: 15,
    marginBottom: 30,
  },
  textoHead: {
    fontFamily: 'Poppins_700Bold',
    color: 'white',
    fontSize: Dimensions.get('window').width * 0.07,

  },
  imagenHead: {
    resizeMode: 'contain',
    height: "120%"

  },
  contenedorHead: {
    flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
    alignItems: 'center',
    marginLeft: "3%",

  },
  contenedorHead2: {
    marginTop: '5%',
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
<<<<<<< HEAD:app/ui/screens/homeRealState/homeRSUI.jsx
    flexGrow: 0,
    zIndex: -1,
=======
    flexGro2: 0,

>>>>>>> 727a0203de9a450c5319745ccdccd02333565fb3:app/ui/screens/realEstateHome/homeRSUI.jsx

  },

  scrollViewContent: {
    alignItems: "center",

  },
})