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


/*
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
*/

export default function uploadAssetUI() {

    return (
        <View style = {styles.ScrollView}>

            <View style={styles.contenedorHead}>
                <Text style={styles.textoHead}>Publicar Propiedad</Text>
            </View>
            
            <View style={styles.dataEntry}> 
                <Text style={styles.textoBody1}>Titulo</Text>
                <CustomTextInput keyboardType={String}/>
                <Text style={styles.textoBody1}>Descripcion</Text>
                <CustomTextInput/>
                <Text style={styles.textoBody1}>Extras</Text>
                <CustomTextInput/>
                <Button title={"Publicar"} titleColor={"white"}/>
            </View>

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
            fontSize: Dimensions.get('window').width * 0.05,
            marginLeft: "3%",
          },
    },

);
