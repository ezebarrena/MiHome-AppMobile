import React, { useState } from "react";
import {

  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  FlatList,


} from "react-native";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";

import i18n from "../../../assets/strings/I18n";
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"

import CardPropiedad from "../../components/cardPropiedad/cardPropiedad";
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
  const propiedades = [{ id:'1', valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'VENTA' }, { id:'2', valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'venta' }, { id:'3', valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'venta' }]
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
      <View style={styles.cardsContainer}>
      <FlatList
          data={propiedades}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardPropiedad valor={item.valor} ubicacion={item.ubicacion} ambientes={item.ambientes} metros={item.metros} margen={item.margen} tipo={item.tipo} onPress={() => { console.log("hola") }} />}
          contentContainerStyle={{ 
            alignItems: "center",
            flexGrow: 1,
           }}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
  cardsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
})