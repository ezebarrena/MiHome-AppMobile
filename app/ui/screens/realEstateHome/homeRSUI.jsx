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
import { useNavigation } from "@react-navigation/native";
import CardPropiedad from "../../components/cardPropiedad/cardPropiedad.js"
import Theme from "../../styles/Theme";
import DropDownPicker from 'react-native-dropdown-picker';


//SplashScreen.preventAutoHideAsync();

export default function HomeRSUI(listadoPropiedades) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: i18n.t('propiedadesEstados.todo'), value: 'todo' },
    { label: i18n.t('propiedadesEstados.venta'), value: 'venta' },
    { label: i18n.t('propiedadesEstados.vendida'), value: 'vendidas' },
    { label: i18n.t('propiedadesEstados.alquiler'), value: 'alquiler' },
    { label: i18n.t('propiedadesEstados.alquiladas'), value: 'alquiladas' },
    { label: i18n.t('propiedadesEstados.pausada'), value: 'pausada' }
  ]);

  const [propiedades, setPropiedades] = useState()

  useEffect(() => {

    const listado = [{ ids: 1, valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'venta' }, { ids: 2, valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquiler' }, { ids: 3, valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquiladas' }]
    //console.log(listadoPropiedades.listadoPropiedades);
    setPropiedades(listado);

  }, [setPropiedades])
  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const filtrarItems = (item) => {



    const tipoDeseado = item.value; // Cambia 'venta' al tipo que desees buscar

    const objetosFiltrados = listadoPropiedades.listadoPropiedades.filter(objeto => objeto.tipo === tipoDeseado);

    setPropiedades(objetosFiltrados)

    if (item.value == 'todo') {
      setPropiedades(listadoPropiedades.listadoPropiedades)
    }
  }

  const abrirDetalles = (identificacion) => {
    console.log(identificacion, 't');
    navigation.navigate("LandingStackRE")
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
          <Pressable key={index} style={{ height: '5%', marginBottom: "55%", backgroundColor: 'red' }} onPress={() => abrirDetalles(propiedad.ids)}>
            <CardPropiedad valor={propiedad.valor} ubicacion={propiedad.ubicacion} ambientes={propiedad.ambientes} metros={propiedad.metros} tipo={propiedad.tipo} margen={0} />
          </Pressable>

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
    flexGrow: 0,
    zIndex: -1,
  },

  scrollViewContent: {
    alignItems: "center",
    justifyContent: 'flex-start'

  },
})