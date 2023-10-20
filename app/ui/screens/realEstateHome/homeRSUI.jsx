import React, { useState } from "react";
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
    { label: i18n.t('propiedadesEstados.todo'), value: i18n.t('propiedadesEstados.todo') },
    { label: i18n.t('propiedadesEstados.venta'), value: '1' },
    { label: i18n.t('propiedadesEstados.vendida'), value: '2' },
    { label: i18n.t('propiedadesEstados.alquiler'), value: '3' },
    { label: i18n.t('propiedadesEstados.alquiladas'), value: '4' },
    { label: i18n.t('propiedadesEstados.pausada'), value: '5' },

  ]);
  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const propiedades = [{ valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'VENTA' }, { valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'venta' }, { valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'venta' }]
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
            onSelectItem={(item) => { console.log(item) }}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} >
        {propiedades.map((propiedad, index) => (
          <View key={index} style={{ height: '5%', marginBottom: '50%' }}>
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
    flexGro2: 0,


  },

  scrollViewContent: {
    alignItems: "center",

  },
})