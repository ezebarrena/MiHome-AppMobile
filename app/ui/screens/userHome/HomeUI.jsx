import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image, Dimensions, Modal, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import i18n from "../../../assets/strings/I18n";
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"
import CardPropiedad from "../../components/cards/cardPropiedad";
import Theme from "../../styles/Theme";
import { useNavigation } from "@react-navigation/native";
import searchIcon from "../../../assets/images/icons/searchIcon.png";
import advancedIcon from "../../../assets/images/icons/advancedSearch.png";
import { getAssets } from '../../../api/assetsAPI';
import imagenTest from "../../../assets/images/various/imagenCasaTest.png";
import DropDownPicker from 'react-native-dropdown-picker';


export default function HomeUI() {

  const navigation = useNavigation();
  const [propiedades, setPropiedades] = useState()
  const [isPropiedadesLoading, setIsPropiedadesLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([
    { label: i18n.t('propiedadesEstados.todo'), value: 'todo' },
    { label: i18n.t('propiedadesEstados.venta'), value: 0 },
    { label: i18n.t('propiedadesEstados.alquiler'), value: 2 },
  ]);
  const [items2, setItems2] = useState([
    { label: i18n.t('REUploadAssetChoices.house'), value: 'house' },
    { label: i18n.t('REUploadAssetChoices.department'), value: 'department' },
    { label: i18n.t('REUploadAssetChoices.country_house'), value: 'country_house' },
    { label: i18n.t('REUploadAssetChoices.PH'), value: 'PH' },
    { label: i18n.t('REUploadAssetChoices.shed'), value: 'shed' },
    { label: i18n.t('REUploadAssetChoices.office'), value: 'office' },
    { label: i18n.t('REUploadAssetChoices.commerce'), value: 'commerce' },
    { label: i18n.t('REUploadAssetChoices.terrain'), value: 'terrain' },
  ])
  const [openTransaction, setOpenTransaction] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);

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

  const Search2 = () => {
    try {
      if(value !== null && value2 !== null){
        navigation.navigate("SearchResults", { transaction: value, type: value2, avanzada:false });
      }
      else{
        setModalVisible(true)
      }
      //console.log("Resultados de búsqueda:", results);
      
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  }


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




  const tipoTransaccionFiltro = 1;
  const tipoEstadoFiltro = 1;


  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.head}>
        <View style={styles.contenedorHead}>
          <Text style={styles.textoHead}>{i18n.t('homeScreen.PHUsuario')}</Text>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={fotoPerfil} style={styles.imagenHead} />
          </TouchableOpacity>
        </View>
        <View style={styles.contenedorHead2}>
          <DropDownPicker
            open={openTransaction}
            maxHeight={250}
            value={value}
            items={items}
            setOpen={setOpenTransaction}
            setValue={setValue}
            setItems={setItems}
            textStyle={{ fontFamily: "Poppins_500Medium" }}
            containerStyle={{ width: "39%" }}
            placeholder={i18n.t('homeScreen.transaccion')}
          />
          <DropDownPicker
            open={openType}
            maxHeight={350}
            value={value2}
            items={items2}
            setOpen={setOpenType}
            setValue={setValue2}
            setItems={setItems2}
            textStyle={{ fontFamily: "Poppins_500Medium" }}
            containerStyle={{ width: "39%" }}
            placeholder={i18n.t('homeScreen.tipo')}
          />
          <View style={styles.botones}>
            <TouchableOpacity onPress={Search2} style={styles.search1}>
              <Image source={searchIcon} style={styles.searchIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={advancedSearchScreen} style={styles.search2}>
              <Image source={advancedIcon} style={styles.advanced} />
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <ScrollView vertical>


        <Text style={styles.textoBody2}>{i18n.t('homeScreen.Interest')}</Text>


        <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>


          {!isPropiedadesLoading ? (propiedades.slice(0, 20).filter(propiedad => propiedad.state === tipoEstadoFiltro).map(propiedad => (
            <CardPropiedad titulo={propiedad.title} firstImage={propiedad.image && propiedad.image.length > 0 ? propiedad.image[0] : imagenTest} valor={propiedad.price} moneda={propiedad.coin} calle={propiedad.streetName} numero={propiedad.streetNumber} barrio={propiedad.Neighborhood} ambientes={propiedad.room} metros={propiedad.mTotal} tipo={propiedad.tipo} margen={propiedad.margen} estado={propiedad.state} transaccion={propiedad.transaction} onPress={() => navigation.navigate("Publicacion", { propiedadId: propiedad._id, name: propiedad.title })} />))) : null}


        </ScrollView>




        <Text style={styles.textoBody2}>{i18n.t('homeScreen.SaleProperties')} </Text>

        <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>


          {!isPropiedadesLoading ? (propiedades.filter(propiedad => propiedad.transaction === 0 && propiedad.state === tipoEstadoFiltro).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 15).map(propiedad => (
            <CardPropiedad titulo={propiedad.title} firstImage={propiedad.image && propiedad.image.length > 0 ? propiedad.image[0] : imagenTest} valor={propiedad.price} moneda={propiedad.coin} calle={propiedad.streetName} numero={propiedad.streetNumber} barrio={propiedad.Neighborhood} ambientes={propiedad.room} metros={propiedad.mTotal} estado={propiedad.state} transaccion={propiedad.transaction} margen={propiedad.margen} onPress={() => navigation.navigate("Publicacion", { propiedadId: propiedad._id, name: propiedad.title })} />
          ))) : null}


        </ScrollView>

        <Text style={styles.textoBody2}>{i18n.t('homeScreen.RentProperties')} </Text>


        <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>
          {!isPropiedadesLoading ? (propiedades.filter(propiedad => propiedad.transaction === 1 && propiedad.state === tipoEstadoFiltro).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 15).map(propiedad => (
            <CardPropiedad titulo={propiedad.title} firstImage={propiedad.image && propiedad.image.length > 0 ? propiedad.image[0] : imagenTest} valor={propiedad.price} moneda={propiedad.coin} calle={propiedad.streetName} numero={propiedad.streetNumber} barrio={propiedad.Neighborhood} ambientes={propiedad.room} metros={propiedad.mTotal} estado={propiedad.state} transaccion={propiedad.transaction} margen={propiedad.margen} onPress={() => navigation.navigate("Publicacion", { propiedadId: propiedad._id, name: propiedad.title })} />
          ))) : null}
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
    paddingStart: '3%',
    paddingEnd: "3%",
    paddingBottom: "1%",
  },

  head: {
    width: "100%",
    backgroundColor: Theme.colors.PRIMARY,
    paddingTop: "8%",
    justifyContent: 'center',
    height: "22%",
    borderBottomLeftRadius: 15, // Redondea la esquina inferior izquierda
    borderBottomRightRadius: 15,
    zIndex: 1
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
    fontSize: Dimensions.get('window').width * 0.045,
    marginLeft: "5%",
    marginTop: '4%'
  },

  imagenHead: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.11,
    marginLeft: '22%',
    marginTop: '-4%'
  },

  contenedorHead: {
    flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
    alignItems: 'center',
    marginLeft: "3%",
    marginTop: "2%",

  },

  contenedorHead2: {
    flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',

  },

  contenedorHead2: {
    marginTop: '1.5%',
    marginLeft: '2%',
    marginRight: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
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
    paddingLeft: 10,
    flex: 1

  },

  searchIcon: {
    maxWidth: Dimensions.get('window').width * 0.063,
    maxHeight: Dimensions.get('window').width * 0.063,

  },

  advanced: {
    maxWidth: Dimensions.get('window').width * 0.09,
    maxHeight: Dimensions.get('window').width * 0.09,

  },

  search1: {
    margin: 0,

  },

  search2: {
    margin: 0,

  },
  botones: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width: "22%",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
