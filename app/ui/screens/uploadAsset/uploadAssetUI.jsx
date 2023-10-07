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
import ImagePicker from 'react-native-image-picker';
import i18n from "../../../assets/strings/I18n";
import Theme from "../../styles/Theme";
import googleLogo from '../../../assets/images/varios/googleG.png'
import { Dimensions } from "react-native";


const [text, onChangeText] = React.useState('');
const [number, onChangeNumber] = React.useState('');

const MyImagePicker = () => {
    const [image, setImage] = useState(null);
  
    const selectImage = () => {
      ImagePicker.showImagePicker({ title: 'Select Image' }, (response) => {
        if (!response.didCancel && !response.error) {
          setImage({ uri: response.uri });
        }
      });
    };
}

export default function uploadAssetUI() {
    const [fontsLoaded, fontError] = useFonts({
        Poppins_700Bold_Italic,
        Poppins_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        <View style = {styles.ScrollView}>
            
            <Text style={textoTitulo}>{i18n.t("TEXTO")}</Text>  //subir a i18n

            <View style ={styles.inputImagen}>
                <Button title={i18n.t("Seleccionar imagen")} onPress={selectImage} />
                {image && <Image source={image} />}
            </View>

            <TextInput
                style={styles.inputBox}
                onChangeText={onChangeText}
                value={text}
                placeholder={i18n.t("TXT")}
                keyboardType="text"
            />

            <TextInput
                style={styles.inputBox}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={i18n.t("TXT")}
                keyboardType="number"
            />


        </View>
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

        textoTitulo:{
            fontSize: Dimensions.get('window').width*0.1,
        },

        inputImagen:{
            width: 200, 
            height: 200 
        }
    },
);
