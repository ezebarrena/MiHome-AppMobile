import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, Modal, Pressable } from "react-native";
import i18n from "../../../assets/strings/I18n";
import Theme from "../../styles/Theme";
import { Dimensions } from "react-native";
import CustomTextInput from "../../../ui/components/inputs/CustomTextInput";
import ChoiceInput from "../../../ui/components/inputs/ChoiceInput";
import ChoiceMultipleInput from "../../../ui/components/inputs/ChoiceMultipleInput";
import Button from "../../../ui/components/buttons/Button";
import ImagePickerModal from "../../components/modals/ImagePickerModal";
import { Ionicons } from "@expo/vector-icons"; // Asegúrate de importar Ionicons desde tu proyecto
import MapView, { Marker } from 'react-native-maps';
import CustomSearchBar from "../../components/inputs/CustomSearchBar";
import { useForm } from "../../../hooks/useForm";
import { updateAsset } from "../../../api/assetsAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Estados from "../../../assets/funcionTraduccion";

const dataTypes = [
  { key: 'house', value: i18n.t('REUploadAssetChoices.house') },
  { key: 'department', value: i18n.t('REUploadAssetChoices.department') },
  { key: 'country_house', value: i18n.t('REUploadAssetChoices.country_house') },
  { key: 'PH', value: i18n.t('REUploadAssetChoices.PH') },
  { key: 'shed', value: i18n.t('REUploadAssetChoices.shed') },
  { key: 'office', value: i18n.t('REUploadAssetChoices.office') },
  { key: 'commerce', value: i18n.t('REUploadAssetChoices.commerce') },
  { key: 'terrain', value: i18n.t('REUploadAssetChoices.terrain') },
];

const dataFrontBack = [
  { key: 'frente', value: i18n.t('REUploadAssetChoices.frente') },
  { key: 'contrafrente', value: i18n.t('REUploadAssetChoices.contrafrente') },
]

const dataTransaccion = [

  { key: '0', value: i18n.t('REUploadAssetChoices.venta') },
  { key: '1', value: i18n.t('REUploadAssetChoices.alquiler') },

];

const dataCurrency = [
  { key: 'U$D', value: 'U$D' },
  { key: 'AR$', value: 'AR$' },
];

const dataStorage = [
  { key: true, value: i18n.t('REUploadAssetChoices.yes') },
  { key: false, value: i18n.t('REUploadAssetChoices.no') },
];

const dataOrientacion = [
  { key: 'norte', value: i18n.t('REUploadAssetChoices.norte') },
  { key: 'sur', value: i18n.t('REUploadAssetChoices.sur') },
  { key: 'este', value: i18n.t('REUploadAssetChoices.este') },
  { key: 'oeste', value: i18n.t('REUploadAssetChoices.oeste') },
];


const dataAmenities = [
  { key: 'pool', value: i18n.t('REUploadAssetChoices.pool') },
  { key: 'climatized_pool', value: i18n.t('REUploadAssetChoices.climatized_pool') },
  { key: 'covered_pool', value: i18n.t('REUploadAssetChoices.covered_pool') },
  { key: 'jacuzzi', value: i18n.t('REUploadAssetChoices.jacuzzi') },
  { key: 'gym', value: i18n.t('REUploadAssetChoices.gym') },
  { key: 'mpr', value: i18n.t('REUploadAssetChoices.mpr') },
  { key: 'grill', value: i18n.t('REUploadAssetChoices.grill') },
  { key: 'terrace', value: i18n.t('REUploadAssetChoices.terrace') },
  { key: 'garden', value: i18n.t('REUploadAssetChoices.garden') },
  { key: 'security', value: i18n.t('REUploadAssetChoices.security') },
  { key: 'sport', value: i18n.t('REUploadAssetChoices.sport') },
];

export default function UpdateAssetUI({ propiedad }) {

  const [imageUris, setImageUris] = useState([]);
  const [listaCambios, setListaCambios] = useState({})
  const [defaultOptionsAmenties, setDefaultOptionsAmenties] = useState([])
  const [subiendo, setSubiendo] = useState(false);
  const [defaultLocation, setDefaultLocation] = useState("")
  const [error, setError] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (propiedad.geoLocalization) {
      const geo = propiedad.geoLocalization.split(",")
      setDefaultLocation(propiedad.direction)
      setMapRegion({
        ...mapRegion,
        latitude: parseFloat(geo[0]),
        longitude: parseFloat(geo[1])
      });
    }
  }, [])

  const initialFormState = {
    "title": propiedad.title != undefined || propiedad.title != null ? propiedad.title : "",
    "image": [],
    "type": propiedad.type ? propiedad.type : "",
    "transaction": propiedad.transaction ? propiedad.transaction.toString() : null,
    "price": propiedad.price ? propiedad.price.toString() : null,
    "coin": propiedad.coin ? propiedad.coin : "",
    "bills": propiedad.bills ? propiedad.bills.toString() : null,
    "description": propiedad.description ? propiedad.description : "",
    "amenities": propiedad.amenities ? propiedad.amenities : [],
    "room": propiedad.room ? propiedad.room.toString() : null,
    "floor": propiedad.floor ? propiedad.floor.toString() : null,
    "bath": propiedad.bath ? propiedad.bath.toString() : null,
    "bedroom": propiedad.bedroom ? propiedad.bedroom.toString() : null,
    "garage": propiedad.garage ? propiedad.garage.toString() : null,
    "mTotal": propiedad.mTotal ? propiedad.mTotal.toString() : null,
    "mIndoor": propiedad.mIndoor ? propiedad.mIndoor.toString() : null,
    "storage": propiedad.storage != undefined || propiedad.storage != null ? propiedad.storage : false,
    "antiquity": propiedad.antiquity ? propiedad.antiquity.toString() : null,
    "streetName": propiedad.streetName ? propiedad.streetName : "",
    "streetNumber": propiedad.streetNumber ? propiedad.streetNumber.toString() : null,
    "neighbourhood": propiedad.neighbourhood ? propiedad.neighbourhood : "",
    "locality": propiedad.locality ? propiedad.locality : "",
    "province": propiedad.province ? propiedad.province : "",
    "country": propiedad.country ? propiedad.country : "",
    "geoLocalization": propiedad.geoLocalization ? propiedad.geoLocalization : "",
    "frontBack": propiedad.frontBack ? propiedad.frontBack : "",
    "state": 1,
    "realEstateName": propiedad.realEstateName ? propiedad.realEstateName : "",
    "orientation": [],
    "direction": propiedad.direction ? propiedad.direction : ""
  }

  const { form, onChange, setFormValue } = useForm(initialFormState);

  const enCambio = (valor, campo) => {

    if (propiedad[campo] !== valor) {
      setListaCambios({
        ...listaCambios,
        [campo]: valor
      })
    }

  }


  /* const handleSubmit = async () => {
    const value = await AsyncStorage.getItem('realEstateId')
    console.log(value);

    if (value) {
      console.log(value);
      repartidor(value, "realEstateName")
      console.log(form.realEstateName);
      if (form.realEstateName != "") {
        const nuevoForm = removeNullFields(form)
        if (nuevoForm) {
          setSubiendo(true)
          const response = await createAsset(nuevoForm);
          console.log(response);
          if (response.status === 200) {
            console.log(response.status);
            setSubiendo(false)
            setModalVisible(true)
          }
          else {
            alert("error Upload Asset");
            setError(true)
          }
        }
      }

    }


  }; */

  const handleSubmit = async () => {
    setSubiendo(true)
    if (Object.keys(listaCambios).length > 0) {
      const response = await updateAsset(listaCambios, propiedad._id)
      if (response.status === 200) {
        console.log(response.status);
        setSubiendo(false)
        setModalVisible(true)
      }
      else {
        alert("error Upload Asset");
        setError(true)
      }
    }
    else {
      setSubiendo(false)
      setError(true)
      setModalVisible(true)
    }
  }


  const renderImagePreview = (imageUris) => {
    return (
      <FlatList
        data={imageUris}
        keyExtractor={(uri, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.previewContainer}>
            <Image source={{ uri: item }} style={styles.previewImage} />
            <TouchableOpacity
              onPress={() => removeImage(index)}
              style={styles.deleteIcon}
            >
              <Ionicons name="trash-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  const addImageToUris = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const removeImage = (index) => {
    const updatedImages = [...imageUris];
    updatedImages.splice(index, 1);
    setImageUris(updatedImages);
  };
  let tipo = Estados(propiedad.transaction, propiedad.state)

  let almacenamiento
  if (propiedad.storage === true) {
    almacenamiento = 'yes'
  }
  else if (propiedad.storage === false) {
    almacenamiento = 'no'
  }

  const repartidor = (valor, campo) => {
    onChange(valor, campo)
    enCambio(valor, campo)
  }

  return (

    <ScrollView style={styles.ScrollView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {error ? <Text style={styles.modalText}>{i18n.t('realEstateUpdateAsset.mensajeError')}</Text>:<Text style={styles.modalText}>{i18n.t('realEstateUpdateAsset.mensajePublicado')}</Text>}

            {error ? <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => { setModalVisible(!modalVisible); setError(false) }}>
              <Text style={styles.textStyle}>{i18n.t('common.cerrar')}</Text>
            </Pressable> : <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => { setModalVisible(!modalVisible); navigation.navigate("Home"); }}>
              <Text style={styles.textStyle}>{i18n.t('common.cerrar')}</Text>
            </Pressable>}

          </View>
        </View>
      </Modal>
      <View style={styles.contenedorHead}>
        <Text style={styles.textoHead}>{i18n.t('realEstateUploadAsset.headTitle')}</Text>
      </View>

      <View style={styles.dataEntry}>
        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.title')}</Text>
        <CustomTextInput
          value={form.title}
          onChangeText={(value) => repartidor(value, 'title')}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.image')}</Text>
        <ImagePickerModal
          buttonText="Seleccionar imagen"
          modalTitle="Seleccionar imagen"
          onImageSelected={(uri) => addImageToUris(uri)}
        />
        {renderImagePreview(imageUris)}

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.type')}</Text>
        <ChoiceInput
          data={dataTypes}
          value={i18n.t(`REUploadAssetChoices.${form.type}`)}
          defaultOption={propiedad.type ? { key: propiedad.type, value: i18n.t(`REUploadAssetChoices.${propiedad.type}`) } : []}
          onValueSelect={(value) => {
            const resultado = dataTypes.find(item => item.value === value);
            if (resultado) {

              repartidor(resultado.key, "type")
            }

          }}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.transaction')}</Text>
        <ChoiceInput
          data={dataTransaccion}
          value={form.transaction}
          defaultOption={propiedad.transaction != undefined || propiedad.transaction != null ? { key: propiedad.transaction.toString(), value: i18n.t(`REUploadAssetChoices.${tipo}`) } : []}
          onValueSelect={(value) => {
            const resultado = dataTransaccion.find(item => item.value === value);
            if (resultado) {

              repartidor(parseInt(resultado.key), "transaction")
            }

          }}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.price')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.price}
          onChangeText={(value) => repartidor(parseInt(value), "price")}

        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.coin')}</Text>
        <ChoiceInput
          data={dataCurrency}
          value={form.coin}
          onValueSelect={(value) => repartidor(value, "coin")}
          defaultOption={propiedad.coin ? { key: propiedad.coin, value: propiedad.coin } : []}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bills')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.bills}
          onChangeText={(value) => repartidor(parseInt(value), "bills")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.description')}</Text>
        <CustomTextInput
          value={form.description === "" ? (propiedad.description ? propiedad.description : "") : form.description}
          onChangeText={(value) => repartidor(value, "description")}

        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.amenities')}</Text>
        <ChoiceMultipleInput
          data={dataAmenities}
          value={form.amenities}
          onValueSelect={(key) => repartidor(key, "amenities")}
          defaultOption={propiedad.amenities ? propiedad.amenities.map((amenitie, index) => ({
            key: amenitie,
            value: i18n.t(`REUploadAssetChoices.${amenitie}`),
          })) : []}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.rooms')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.room}
          onChangeText={(value) => repartidor(parseInt(value), "room")}

        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.floors')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.floor}
          onChangeText={(value) => repartidor(parseInt(value), "floor")}

        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bath')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.bath}
          onChangeText={(value) => repartidor(parseInt(value), "bath")}
        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bedroom')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.bedroom}
          onChangeText={(value) => repartidor(parseInt(value), "bedroom")}

        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.garage')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.garage}
        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.mTotal')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.mTotal}
          onChangeText={(value) => repartidor(parseInt(value), "mTotal")}

        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.mCover')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.mIndoor}
          onChangeText={(value) => repartidor(parseInt(value), "mIndoor")}

        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.storage')}</Text>
        <ChoiceInput
          data={dataStorage}
          value={form.storage}
          onValueSelect={(value) => {
            const resultado = dataTransaccion.find(item => item.value === value);
            if (resultado) {

              repartidor(resultado.key, "storage")
            }
          }}
          defaultOption={propiedad.storage != undefined || propiedad.storage != null ? { key: propiedad.storage, value: i18n.t(`REUploadAssetChoices.${almacenamiento}`) } : []}
        />



        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.antiquity')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.antiquity}
          onChangeText={(value) => repartidor(parseInt(value), "antiquity")}

        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.frontBack')}</Text>
        <ChoiceInput
          data={dataFrontBack}
          value={i18n.t(`REUploadAssetChoices.${form.frontBack}`)}
          onValueSelect={(value) => {
            const resultado = dataFrontBack.find(item => item.value === value);
            if (resultado) {

              repartidor(resultado.key, "frontBack")
            }

          }}
          defaultOption={propiedad.frontBack ? { key: propiedad.frontBack, value: i18n.t(`REUploadAssetChoices.${propiedad.frontBack}`) } : []}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.orientacion')}</Text>
        <ChoiceMultipleInput
          data={dataOrientacion}
          value={form.orientation}
          onValueSelect={(key) => repartidor(key, "orientation")}
          defaultOption={form.orientation}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.location')}</Text>
        <CustomSearchBar
          defaultValue={defaultLocation}
          onAddressSelect={(item) => {


            // Obtener las coordenadas y actualizar el mapa
            setMapRegion({
              ...mapRegion,
              latitude: item.point.coordinates[0],
              longitude: item.point.coordinates[1]
            });

            // Obtener la dirección de la calle y dividirla en partes
            const streetAddress = item.address.addressLine;
            const addressParts = streetAddress.split(' '); // Suponiendo que las partes están separadas por espacios

            // Obtener el nombre de la calle y el número
            const streetName = addressParts.slice(0, -1).join(' '); // El nombre de la calle son todas las partes excepto la última
            const streetNumber = addressParts.slice(-1)[0]; // El número de la calle es la última parte

            // Actualizar el estado o realizar otras acciones necesarias

            setFormValue(
              {
                ...form,
                streetName: streetName,
                streetNumber: parseInt(streetNumber),
                neighbourhood: item.address.adminDistrict2,
                locality: item.address.locality,
                province: item.address.adminDistrict,
                country: item.address.countryRegion,
                geoLocalization: String(item.point.coordinates),
              }
            );

          }}
        />
        <MapView style={styles.map} region={mapRegion}>
          {mapRegion.latitude !== null && mapRegion.longitude !== null && (
            <Marker
              coordinate={{
                latitude: mapRegion.latitude,
                longitude: mapRegion.longitude,
              }}
            />
          )}
        </MapView>

        <Button loading={subiendo} title={i18n.t('realEstateUpdateAsset.botonModificar')} titleColor={"white"} onPress={() => handleSubmit()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },

  inputImagen: {
    width: 200,
    height: 200,
  },

  textoHead: {
    marginTop: 20,
    fontFamily: 'Poppins_700Bold',
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.07,
  },

  contenedorHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: "3%",
    paddingTop: 30,
  },

  textoBody1: {
    fontFamily: "Poppins_500Medium",
    fontSize: Dimensions.get('window').width * 0.045,
    marginLeft: "3%",
  },

  textoBody2: {
    fontFamily: "Poppins_500Medium",
    color: 'white',
    textAlign: 'center',
    fontSize: Dimensions.get('window').width * 0.035,
    marginLeft: "3%",
  },

  test: {
    height: 50,
    backgroundColor: Theme.colors.PRIMARY,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    margin: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  previewContainer: {
    margin: 10,
  },

  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },

  deleteIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  map:
  {
    height: 200,
    marginHorizontal: 14,
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    elevation: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: '#512F7B',
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: "Poppins_500Medium",
    fontSize: Dimensions.get("window").width * 0.039,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: "Poppins_500Medium",
    fontSize: Dimensions.get("window").width * 0.039,
  },
});


