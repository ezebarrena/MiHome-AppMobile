import React from "react";
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,
} from "react-native";

import { useFonts, Poppins_700Bold_Italic, Poppins_400Regular } from "@expo-google-fonts/poppins";

import i18n from "../../../assets/strings/I18n";

import Boton from "../../components/botonesPerfil/BotonMenuPerfil"
import favorito from "../../../assets/images/icons/favorite.png"
import ruedita from "../../../assets/images/icons/settings.png"
import billetera from "../../../assets/images/icons/account_balance_wallet.png"
import logout from "../../../assets/images/icons/logout.png"
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"


export default function UserProfileUI() {
    const [fontsLoaded, fontError] = useFonts({
        Poppins_700Bold_Italic,
        Poppins_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        
        <View style={styles.container}>
            
            
            
            

            <View style={styles.userInfo}>
                <Image source={fotoPerfil}/>
                <Text style={styles.userNameText}>Javier</Text>
                <Text style={styles.mailText}>javi@gmail.com</Text>
            </View>



            <View style={styles.contenedorOpciones}>
                <Boton iconSource={favorito} title={"Tus Favoritos"}/>

                <Boton iconSource={billetera} title={"Tus Medios de pago"}/>
                <Boton iconSource={ruedita} title={"Ajustes"}/>
            </View>
            
            <View style={styles.contenedorCerrarSesion}>
                <Boton iconSource={logout} title={"Cerrar sesion"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      alignItems: 'center',
      //justifyContent: 'center',
      
    },

    contenedorOpciones: {
        width: 328,
        borderWidth: 1,
        borderRadius: 10,
    },

    contenedorCerrarSesion:{
        width: 328,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
    },
    userNameText: {
        fontSize: 35,
        fontWeight: "bold"
    },

    mailText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#646464",
        marginBottom: 20,
    }
    
  });