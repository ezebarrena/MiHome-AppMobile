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
import TextInput from "../../../ui/components/inputs/CustomTextInput";
import CustomTextInput from "../../../ui/components/inputs/CustomTextInput";
import Button from "../../../ui/components/buttons/Button";



export default function uploadAssetUI() {

    return (
        <ScrollView style = {styles.ScrollView}>

            <View style={styles.contenedorHead}>
                <Text style={styles.textoHead}>Publicar Propiedad</Text>
            </View>
            
            <View style={styles.dataEntry}> 
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.title')}</Text>
                <CustomTextInput keyboardType={String}/>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.type')}</Text>
                <CustomTextInput/>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.transaction')}</Text>
                <CustomTextInput/>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.price')}</Text>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.coin')}</Text>
                <CustomTextInput/>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bills')}</Text>
                <CustomTextInput/>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.description')}</Text>
                <CustomTextInput/>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.rooms')}</Text>
                <CustomTextInput/>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.floors')}</Text>
                <CustomTextInput/>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bath')}</Text>
                <CustomTextInput/>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.bedroom')}</Text>
                <CustomTextInput/>
                <Text style={styles.textoBody1}>{i18n.t('realEstateUploadAsset.garage')}</Text>
                <CustomTextInput/>
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
