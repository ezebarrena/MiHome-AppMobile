import React from "react";
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Pressable,
    Image,
} from "react-native";

//import ImagePicker from 'react-native-image-picker';
import i18n from "../../../assets/strings/I18n";
import Theme from "../../styles/Theme";
import { Dimensions } from "react-native";
import CustomTextInput from "../../../ui/components/inputs/CustomTextInput";
import ChoiceInput from "../../../ui/components/inputs/ChoiceInput";
import ChoiceMultipleInput from "../../../ui/components/inputs/ChoiceMultipleInput";
import Button from "../../../ui/components/buttons/Button";
import {launchImageLibrary} from 'react-native-image-picker';

const dataTypes = [
    {key:'1', value:'Casa'},
    {key:'2', value:'Departamento'},
    {key:'3', value:'Casa quinta'},
    {key:'4', value:'PH'},
    {key:'5', value:'Galpon'},
    {key:'5', value:'Oficina'},
    {key:'5', value:'Comercion'},
    {key:'5', value:'Terreno'},
]
const dataTransaccion = [
    {key:'1', value:'Venta'},
    {key:'2', value:'Alquiler'},
]
const dataCurrency = [
    {key:'1', value:'U$D dolar estadounidense'},
    {key:'2', value:'AR$ peso argentino'},
]
const dataRooms = [
    {key:'1', value:'1'},
    {key:'2', value:'2'},
    {key:'3', value:'3'},
    {key:'4', value:'4'},
    {key:'5', value:'5'},
    {key:'6', value:'6'},
    {key:'7', value:'7'},
    {key:'8', value:'8'},
    {key:'9', value:'9'},
    {key:'10', value:'10'},
    {key:'11', value:'Mas de 10'},
]
const dataFloors = [
    {key:'1', value:'1'},
    {key:'2', value:'2'},
    {key:'3', value:'3'},
    {key:'4', value:'4 o mas'},
]
const dataBaths = [
    {key:'1', value:'1'},
    {key:'2', value:'2'},
    {key:'3', value:'3'},
    {key:'4', value:'4 o mas'},
]
const dataBedrooms = [
    {key:'1', value:'1'},
    {key:'2', value:'2'},
    {key:'3', value:'3'},
    {key:'4', value:'4 o mas'},
]
const dataGarages = [
    {key:'1', value:'1 vehiculo'},
    {key:'2', value:'2 vehiculos'},
    {key:'3', value:'3 vehiculos'},
    {key:'4', value:'4 o mas vehiculos'}
]
const dataAmenities = [
    {key:'1', value:'pileta'},
    {key:'2', value:'pileta climatizada'},
    {key:'3', value:'pileta techada'},
    {key:'4', value:'jacuzzi'},
    {key:'5', value:'Gimnasio'},
    {key:'6', value:'Quincho'},
    {key:'7', value:'Parrilla'},
    {key:'8', value:'Terraza'},
    {key:'9', value:'Jardin'},
    {key:'10', value:'Seguridad privada'},
    {key:'11', value:'Espacio para deportes'},
]


export default function uploadAssetUI() {

    return (
        <ScrollView style = {styles.ScrollView}>

            <View style={styles.contenedorHead}>
                <Text style={styles.textoHead}>{i18n.t('realEstateUploadAsset.headTitle')}</Text>
            </View>
            
            <View style={styles.dataEntry}> 
            
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.title')}</Text>
                <CustomTextInput keyboardType={String}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.image')}</Text>
                <CustomTextInput keyboardType={String}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.type')}</Text>
                <ChoiceInput data={dataTypes}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.transaction')}</Text>
                <ChoiceInput data={dataTransaccion}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.price')}</Text>
                <CustomTextInput/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.coin')}</Text>
                <ChoiceInput data={dataCurrency}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bills')}</Text>
                <CustomTextInput/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.description')}</Text>
                <CustomTextInput/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.amenities')}</Text>
                <ChoiceMultipleInput data={dataAmenities}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.rooms')}</Text>
                <ChoiceInput data={dataRooms}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.floors')}</Text>
                <ChoiceInput data={dataFloors}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bath')}</Text>
                <ChoiceInput data={dataBaths}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bedroom')}</Text>
                <ChoiceInput data={dataBedrooms}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.garage')}</Text>
                <ChoiceInput data={dataGarages}/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.mTotal')}</Text>
                <CustomTextInput/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.mCover')} </Text>
                <CustomTextInput/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.storage')}</Text>
                <CustomTextInput/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.antiquity')}</Text>
                <CustomTextInput/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.frontBack')}</Text>
                <CustomTextInput/>

                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.location')}</Text>
                <CustomTextInput/>

                <Button title={"Publicar"} titleColor={"white"}/>

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

        inputImagen:{
            width: 200, 
            height: 200 
        },

        textoHead: {
            fontFamily: 'Poppins_700Bold',
            color: 'black',
            fontSize: Dimensions.get('window').width * 0.07,
        },

        contenedorHead: {
            flexDirection: 'row', // Coloca los elementos uno al lado del otro horizontalmente
            alignItems: 'center',
            marginLeft: "3%",
            paddingTop: 30,
          },
        
        textoBody1: {
            fontFamily: "Poppins_500Medium", //cambiar a roboto
            fontSize: Dimensions.get('window').width * 0.045,
            marginLeft: "3%",
          },
        

    },

);
