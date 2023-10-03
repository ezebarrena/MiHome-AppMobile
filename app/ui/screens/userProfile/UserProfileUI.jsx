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
//import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "../../../assets/strings/I18n";
import fondo from "../../../assets/images/Fondos/fondo.png";
import Theme from "../../styles/Theme";
import profilePic from "../../../assets/images/varios/icon.png"

export default function WelcomeUI() {
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
                <Image source={profilePic} />
                <Text style={styles.logoText}>{i18n.t("userName")}</Text>
                <Text style={styles.mailText}>{i18n.t("userEmail")}</Text>
            </View>



            <View style={styles.contenedorOpciones}>
                <Pressable>
                    <Text>Tus Favoritos</Text>
                </Pressable>

                <Pressable>
                    <Text>Tus Medios de pago</Text>
                </Pressable>

                <Pressable>
                    <Text>Ajustes</Text>
                </Pressable>
            </View>
            <View style={styles.contenedorCerrarSesion}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      alignItems: 'center',
      justifyContent: 'center',
    },

    
  });