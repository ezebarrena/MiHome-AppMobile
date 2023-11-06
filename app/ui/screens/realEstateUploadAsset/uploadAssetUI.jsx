import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
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
import { createAsset } from "../../../api/assetsAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";




const dataTypes = [
  { key: '1', value: i18n.t('REUploadAssetChoices.house') },
  { key: '2', value: i18n.t('REUploadAssetChoices.department') },
  { key: '3', value: i18n.t('REUploadAssetChoices.country_house') },
  { key: '4', value: i18n.t('REUploadAssetChoices.PH') },
  { key: '5', value: i18n.t('REUploadAssetChoices.shed') },
  { key: '6', value: i18n.t('REUploadAssetChoices.office') },
  { key: '7', value: i18n.t('REUploadAssetChoices.commerce') },
  { key: '8', value: i18n.t('REUploadAssetChoices.terrain') },
];

const dataFrontBack = [
  { key: '1', value: 'Frente' },
  { key: '2', value: 'Contrafrente' },
]

const dataTransaccion = [
  { key: '1', value: 'Venta' },
  { key: '2', value: 'Alquiler' },
];

const dataCurrency = [
  { key: '1', value: 'U$D' },
  { key: '2', value: 'AR$' },
];

const dataStorage = [
  { key: '1', value: 'Si' },
  { key: '2', value: 'No' },
];



const dataAmenities = [
  { key: '1', value: 'pileta' },
  { key: '2', value: 'pileta climatizada' },
  { key: '3', value: 'pileta techada' },
  { key: '4', value: 'jacuzzi' },
  { key: '5', value: 'Gimnasio' },
  { key: '6', value: 'Quincho' },
  { key: '7', value: 'Parrilla' },
  { key: '8', value: 'Terraza' },
  { key: '9', value: 'Jardin' },
  { key: '10', value: 'Seguridad privada' },
  { key: '11', value: 'Espacio para deportes' },
];

export default function UploadAssetUI({ }) {
  const [imageUris, setImageUris] = useState([]);

  const [mapRegion, setMapRegion] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  /*
  var raw = JSON.stringify({
    "title": title,
    "image":image,
    "type": type,
    "transaction": transaction, //1 alquiler, 0 venta
    "price":price,
    "coin":coin,
    "bills":bills,
    "description":description,
    "amenities":amenities,
    "room":room,
    "floor":floor,
    "bath":bath,
    "bedroom":bedroom,
    "garage":garage,
    "mTotal":mTotal,
    "mIndoor":mIndoor,
    "storage":storage,
    "antiquity":antiquity,
    "streetName":streetName,
    "streetNumber":streetNumber,
    "neighbourhood":neighbourhood,
    "locality":locality,
    "province":province,
    "country":country,
    "geoLocalization":geoLocalization,
    "frontBack":frontBack,
    "state":state, //1 disponible, 0 no disponible
    "realEstateName":realEstateName,
  });
  */

  /*   const initialFormState = {
      "title": '',
      "image": [],
      "type": '',
      "transaction": null,
      "price": null,
      "coin": '',
      "bills": null,
      "description": '',
      "amenities": [],
      "room": null,
      "floor": null,
      "bath": null,
      "bedroom": null,
      'garage': null,
      'mTotal': null,
      'mIndoor': null,
      'storage': null,
      "antiquity": null,
      "streetName": '',
      "streetNumber": '',
      "neighbourhood": '',
      "locality": '',
      "province": '',
      "country": '',
      "geoLocalization": '',
      "frontBack": '',
      "state": null,
      "realEstateName": '',
    }; */


  const initialFormState = {
    "title": "",
    "image": [],
    "type": "",
    "transaction": null,
    "price": null,
    "coin": "",
    "bills": null,
    "description": "",
    "amenities": [],
    "room": null,
    "floor": null,
    "bath": null,
    "bedroom": null,
    "garage": null,
    "mTotal": null,
    "mIndoor": null,
    "storage": false,
    "antiquity": null,
    "streetName": "",
    "streetNumber": null,
    "neighbourhood": "",
    "locality": "",
    "province": "",
    "country": "",
    "geoLocalization": "",
    "frontBack": "",
    "state": 1,
    "realEstateName": ""

  }




  const { form, onChange, setFormValue } = useForm(initialFormState);




  const handleSubmit = async () => {
    const value = await AsyncStorage.getItem('realEstateId')

    if (value) {
      onChange(value, "realEstateName")
      const nuevoForm = removeNullFields(form)
      console.log(nuevoForm, 'asdf');
      if (nuevoForm) {
        const response = await createAsset(nuevoForm);
        if (response) {
          navigation.navigate("LandingStackRE");
        }
        else {
          alert("error Upload Asset");
        }
      }
    }


  };

  function removeNullFields(obj) {
    const result = {};
    for (const key in obj) {
      if (obj[key] !== "") {
        result[key] = obj[key];
      }
    }
    return result;
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

  return (

    <ScrollView style={styles.ScrollView}>
      <View style={styles.contenedorHead}>
        <Text style={styles.textoHead}>{i18n.t('realEstateUploadAsset.headTitle')}</Text>
      </View>

      <View style={styles.dataEntry}>
        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.title')}</Text>
        <CustomTextInput
          value={form.title}
          onChangeText={(value) => onChange(value, "title")}
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
          value={form.types}
          onValueSelect={(value) => onChange(value, "type")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.transaction')}</Text>
        <ChoiceInput
          data={dataTransaccion}
          value={form.transaction}
          onValueSelect={(value) => {
            let transaccion
            if (value == "Alquiler") {
              transaccion = 1
            }
            if (value == 'Venta') {
              transaccion = 0
            }
            onChange(parseInt(transaccion), "transaction")
          }}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.price')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.price}
          onChangeText={(value) => onChange(parseInt(value), "price")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.coin')}</Text>
        <ChoiceInput
          data={dataCurrency}
          value={form.coin}
          onValueSelect={(value) => onChange(value, "coin")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bills')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.bills}
          onChangeText={(value) => onChange(parseInt(value), "bills")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.description')}</Text>
        <CustomTextInput
          value={form.description}
          onChangeText={(value) => onChange(value, "description")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.amenities')}</Text>
        <ChoiceMultipleInput
          data={dataAmenities}
          value={form.amenities}
          onValueSelect={(value) => onChange(value, "amenities")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.rooms')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.room}
          onChangeText={(value) => onChange(parseInt(value), "room")}
        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.floors')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.floor}
          onChangeText={(value) => onChange(parseInt(value), "floor")}
        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bath')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.bath}
          onChangeText={(value) => onChange(parseInt(value), "bath")}
        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bedroom')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.bedroom}
          onChangeText={(value) => onChange(parseInt(value), "bedroom")}
        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.garage')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.garage}
          onChangeText={(value) => onChange(parseInt(value), "garage")}
        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.mTotal')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.mTotal}
          onChangeText={(value) => onChange(parseInt(value), "mTotal")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.mCover')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.mIndoor}
          onChangeText={(value) => onChange(parseInt(value), "mIndoor")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.storage')}</Text>
        <ChoiceInput
          data={dataStorage}
          value={form.storage}
          onValueSelect={(value) => {
            let valor= false 
            if(value == 'Si' || value == 'si'){
              valor = true
            }
            onChange(valor, "storage")}}
        />



        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.antiquity')}</Text>
        <CustomTextInput
          keyboardType={'numeric'}
          value={form.antiquity}
          onChangeText={(value) => onChange(value, "antiquity")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.frontBack')}</Text>
        <ChoiceInput
          data={dataFrontBack}
          value={form.frontBack}
          onValueSelect={(value) => onChange(value, "frontBack")}
        />


        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.location')}</Text>
        <CustomSearchBar
          onAddressSelect={(item) => {
            console.log(item);

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
                streetNumber: streetNumber,
                neighbourhood: item.address.adminDistrict2,
                locality: item.address.locality,
                province: item.address.adminDistrict,
                country: item.address.countryRegion,
                geoLocalization: item.point.coordinates,
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

        <Button title={"Publicar"} titleColor={"white"} onPress={() => handleSubmit()} />
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
});
