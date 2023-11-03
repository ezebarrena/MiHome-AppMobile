import React, { useState, useEffect } from "react";
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

import CardPropiedad from "../../components/cards/cardPropiedad";
import { useNavigation } from "@react-navigation/native";

import Theme from "../../styles/Theme";
import DropDownPicker from 'react-native-dropdown-picker';

import DetallePropiedadRS from "../realEstateDetallePropiedad/detallePropiedadRS";

//SplashScreen.preventAutoHideAsync();

export default function HomeRSUI({ listadoPropiedades }) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: i18n.t('propiedadesEstados.todo'), value: 'todo' },
    { label: i18n.t('propiedadesEstados.venta'), value: 'venta' },
    { label: i18n.t('propiedadesEstados.vendida'), value: 'vendida' },
    { label: i18n.t('propiedadesEstados.alquiler'), value: 'alquiler' },
    { label: i18n.t('propiedadesEstados.alquilada'), value: 'alquilada' },
    { label: i18n.t('propiedadesEstados.pausada'), value: 'pausada' }
  ]);
  const [propiedadesBD, setPropiedadesBD] = useState()
  const [propiedades, setPropiedades] = useState()


  useEffect(() => {
    //const listados = { valor: 'US$175.500', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquilada', expensas: '$35.000', tieneExpensas: 'si', usuario: 'Alberto Massa', fechaVenta: '21/10/2023', fechaDesde: '22/09/2022', fechaHasta: '22/09/2025' }
    const listado = [
      {
        id: 1,
        valor: 'US$150,000',
        ubicacion: 'Avenida Libertador 123',
        ambientes: 3,
        metros: 200,
        margen: 5,
        tipo: 'venta',
        tieneExpensas: 'no'
      },
      {
        id: 2,
        valor: '$100,000',
        ubicacion: 'Calle Rivadavia 456',
        ambientes: 2,
        metros: 150,
        margen: 2,
        tipo: 'alquiler',
        tieneExpensas: 'si',
        expensas: '$15,000'
      },
      {
        id: 3,
        valor: 'US$250,000',
        ubicacion: 'Calle San Martin 789',
        ambientes: 4,
        metros: 300,
        margen: 10,
        tipo: 'vendida',
        tieneExpensas: 'si',
        expensas: '$30,000',
        fechaVenta: '15/05/2023'
      },
      {
        id: 4,
        valor: '$180,000',
        ubicacion: 'Avenida Belgrano 987',
        ambientes: 2,
        metros: 180,
        margen: 3,
        tipo: 'alquiler',
        tieneExpensas: 'no'
      },
      {
        id: 5,
        valor: 'US$280,000',
        ubicacion: 'Calle Sarmiento 234',
        ambientes: 5,
        metros: 400,
        margen: 15,
        tipo: 'venta',
        tieneExpensas: 'no'
      },
      {
        id: 6,
        valor: '$220,000',
        ubicacion: 'Avenida 9 de Julio 567',
        ambientes: 3,
        metros: 220,
        margen: 6,
        tipo: 'alquiler',
        tieneExpensas: 'si',
        expensas: '$25,000'
      },
      {
        id: 7,
        valor: 'US$320,000',
        ubicacion: 'Calle Buenos Aires 345',
        ambientes: 4,
        metros: 350,
        margen: 12,
        tipo: 'venta',
        tieneExpensas: 'si',
        expensas: '$40,000'
      },
      {
        id: 8,
        valor: '$140,000',
        ubicacion: 'Calle Defensa 678',
        ambientes: 2,
        metros: 160,
        margen: 1,
        tipo: 'alquiler',
        tieneExpensas: 'si',
        expensas: '$10,000'
      },
      {
        id: 9,
        valor: 'US$210,000',
        ubicacion: 'Avenida Corrientes 456',
        ambientes: 3,
        metros: 250,
        margen: 8,
        tipo: 'vendida',
        tieneExpensas: 'no'
      },
      {
        id: 10,
        valor: '$160,000',
        ubicacion: 'Calle Alvear 789',
        ambientes: 2,
        metros: 170,
        margen: 4,
        tipo: 'alquiler',
        tieneExpensas: 'no'
      },
      {
        id: 11,
        valor: '$260,000',
        ubicacion: 'Calle Urquiza 123',
        ambientes: 3,
        metros: 180,
        margen: 6,
        tipo: 'alquilada',
        tieneExpensas: 'si',
        expensas: '$20,000',
        usuario: 'Luis Rodriguez',
        fechaDesde: '10/08/2023',
        fechaHasta: '10/08/2026'
      },
      {
        id: 12,
        valor: 'US$280,000',
        ubicacion: 'Calle Belgrano 567',
        ambientes: 4,
        metros: 250,
        margen: 8,
        tipo: 'vendida',
        tieneExpensas: 'si',
        expensas: '$45,000',
        fechaVenta: '28/06/2023'
      },
      {
        id: 13,
        valor: '$180,000',
        ubicacion: 'Calle San Martin 789',
        ambientes: 2,
        metros: 150,
        margen: 4,
        tipo: 'alquilada',
        tieneExpensas: 'si',
        expensas: '$15,000',
        usuario: 'Laura Pérez',
        fechaDesde: '12/11/2023',
        fechaHasta: '12/11/2025'
      }


    ]


    setPropiedades(listado);
    setPropiedadesBD(listado)

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

    const objetosFiltrados = propiedadesBD.filter(objeto => objeto.tipo === tipoDeseado);


    setPropiedades(objetosFiltrados)

    if (item.value == 'todo') {
      setPropiedades(propiedadesBD)
    }
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
      <View style={styles.cardsContainer}>
        <FlatList
          data={propiedades}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardPropiedad valor={item.valor} ubicacion={item.ubicacion} ambientes={item.ambientes} metros={item.metros} margen={item.margen} tipo={item.tipo} onPress={() => navigation.navigate("DetallesPropiedadRE", {propiedadId:item.id})} />}
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
    zIndex:1,
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