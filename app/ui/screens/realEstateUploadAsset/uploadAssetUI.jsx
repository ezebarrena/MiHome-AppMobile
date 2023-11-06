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
  { key: '1', value: 'Casa' },
  { key: '2', value: 'Departamento' },
  { key: '3', value: 'Casa quinta' },
  { key: '4', value: 'PH' },
  { key: '5', value: 'Galpon' },
  { key: '6', value: 'Oficina' },
  { key: '7', value: 'Comercio' },
  { key: '8', value: 'Terreno' },
];

const dataTransaccion = [
  { key: '1', value: 'Venta' },
  { key: '2', value: 'Alquiler' },
];

const dataCurrency = [
  { key: '1', value: 'U$D dolar estadounidense' },
  { key: '2', value: 'AR$ peso argentino' },
];

const dataRooms = [
  { key: '1', value: '1' },
  { key: '2', value: '2' },
  { key: '3', value: '3' },
  { key: '4', value: '4' },
  { key: '5', value: '5' },
  { key: '6', value: '6' },
  { key: '7', value: '7' },
  { key: '8', value: '8' },
  { key: '9', value: '9' },
  { key: '10', value: '10' },
  { key: '11', value: 'Mas de 10' },
];

const dataFloors = [
  { key: '1', value: '1' },
  { key: '2', value: '2' },
  { key: '3', value: '3' },
  { key: '4', value: '4 o mas' },
];

const dataBaths = [
  { key: '1', value: '1' },
  { key: '2', value: '2' },
  { key: '3', value: '3' },
  { key: '4', value: '4 o mas' },
];

const dataBedrooms = [
  { key: '1', value: '1' },
  { key: '2', value: '2' },
  { key: '3', value: '3' },
  { key: '4', value: '4 o mas' },
];

const dataGarages = [
  { key: '1', value: '1 vehiculo' },
  { key: '2', value: '2 vehiculos' },
  { key: '3', value: '3 vehiculos' },
  { key: '4', value: '4 o mas vehiculos' },
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

export default function UploadAssetUI({}) {
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

  const initialFormState = {
    realEstateName: '',
    title: '',
    image: [],
    type: '',
    transaction: '',
    price: '',
    coin: '',
    bills: '',
    description: '',
    amenities: [],
    room: '',
    floor: '',
    bath: '',
    bedroom: '',
    garage: '',
    mTotal: '',
    mIndoor: '',
    storage: '',
    antiquity: '',
    streetName: '',
    streetNumber: '',
    neighbourhood: '',
    locality: '',
    province: '',
    country: '',
    geoLocalization: '',
    frontBack: '',
    state: '',
    realEstateName: '',
  };
  
  const { form, onChange } = useForm(initialFormState);
 
  
  const handleSubmit = async () => {
    const realEstateName2 = await AsyncStorage.getItem('realEstateId')
    onChange(realEstateName2, realEstateName)
    console.log(form);
    const response = await createAsset(form);
    if (response) {
      navigation.navigate("LandingStackRE");
    }
    else {
      alert("error Upload Asset");
    } 
  };
  

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
          onChangeText={(value) => onChange( value,"title")} 
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
          onValueSelect={(value) => onChange(value,"type")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.transaction')}</Text>
        <ChoiceInput 
          data={dataTransaccion} 
          value={form.transaction}
          onValueSelect={(value) => onChange(value,"transaction")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.price')}</Text>
        <CustomTextInput 
          keyboardType={'numeric'}
          value={form.price}
          onChangeText={(value)  => onChange(value,"price")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.coin')}</Text>
        <ChoiceInput 
          data={dataCurrency} 
          value={form.coin}
          onValueSelect={(value)  => onChange(value,"coin")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bills')}</Text>
        <CustomTextInput 
          keyboardType={'numeric'}
          value={form.bills}
          onChangeText={(value)  => onChange(value,"bills")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.description')}</Text>
        <CustomTextInput 
          value={form.description}
          onChangeText={(value)  => onChange(value,"description")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.amenities')}</Text>
        <ChoiceMultipleInput
          data={dataAmenities}
          value={form.amenities}
          onValueSelect={(value)  => onChange(value,"amenities")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.rooms')}</Text>
        <ChoiceInput 
          data={dataRooms} 
          value={form.room}
          onValueSelect={(value) => onChange(value,"room")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.floors')}</Text>
        <ChoiceInput 
        data={dataFloors} 
        value={form.floor}
        onValueSelect={(value) => onChange(value,"floor")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bath')}</Text>
        <ChoiceInput 
        data={dataBaths} 
        value={form.bath}
        onValueSelect={(value) => onChange(value,"bath")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bedroom')}</Text>
        <ChoiceInput 
        data={dataBedrooms} 
        value={form.bedroom}
        onValueSelect={(value) => onChange(value,"bedroom")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.garage')}</Text>
        <ChoiceInput 
        data={dataGarages} 
        value={form.garage}
        onValueSelect={(value) => onChange(value,"garage")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.mTotal')}</Text>
        <CustomTextInput 
          keyboardType={'numeric'}
          value={form.mTotal}
          onChangeText={(value)  => onChange(value,"mTotal")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.mCover')}</Text>
        <CustomTextInput 
          keyboardType={'numeric'}
          value={form.mIndoor} 
          onChangeText={(value)  => onChange(value,"mIndoor")}
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.storage')}</Text>
        <CustomTextInput 
          value={form.storage} 
          onChangeText={(value)  => onChange(value,"storage")}             
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.antiquity')}</Text>
        <CustomTextInput 
          keyboardType={'numeric'}
          value={form.antiquity} 
          onChangeText={(value)  => onChange(value,"antiquity")}   
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.frontBack')}</Text>
        <CustomTextInput 
          value={form.frontBack} 
          onChangeText={(value)  => onChange(value,"frontBack")}   
        />

        <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.location')}</Text>
        <CustomSearchBar
          onAddressSelect={(coordinates) => setMapRegion({
            ...mapRegion,
            latitude: coordinates[0],
            longitude: coordinates[1],
          })}
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
        
       <Button title={"Publicar"} titleColor={"white"} onPress={()=> handleSubmit()} />
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
