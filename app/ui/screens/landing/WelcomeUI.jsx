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
import googleLogo from '../../../assets/images/varios/googleG.png'

//SplashScreen.preventAutoHideAsync();

/*<Image style={styles.tinyLogo} source={googleLogo} />*/

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
            <LinearGradient
                colors={["rgba(0, 0, 0, 0.45)", Theme.colors.PRIMARY]}
                style={styles.background}
            >
                <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
                    <View style={styles.overlay}>
                        <Text style={styles.logoText}>{i18n.t("appName")}</Text>
                    </View>



                    <View style={styles.contenedorLogin}>

                        <Pressable style={styles.boton}>

                            <Text style={styles.textoBoton}>

                                GOOGLE
                            </Text>
                        </Pressable>
                        <Pressable>

                            <Text style={styles.textoLoginInmobiliaria}>

                                {i18n.t("PLInmobiliaria")}
                            </Text>
                        </Pressable>
                    </View>
                </ImageBackground>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    image: {
        flex: 1, // Para que la imagen ocupe toda la pantalla
        justifyContent: "center", // Centrar verticalmente
        alignItems: "center", // Centrar horizontalmente
    },

    background: {
        position: "absolute",
        left: 0,
        right: 0,
        height: "100%",
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-start", // Alinea el contenido en la parte superior
        marginTop: 150, // Espacio en la parte superior para separar el texto del borde superior
        width: "100%",
    },

    logoText: {
        textAlign: "center",
        fontFamily: 'Poppins_700Bold_Italic',
        fontSize: 50,
        color: "white",
    },

    boton: {
        backgroundColor: Theme.colors.PRIMARY,
        width: 270,
        padding: 8,
        borderRadius: 10,



    },
    textoBoton: {
        fontSize: 28,
        color: "white",
        textAlign: "center",

        fontFamily: 'Poppins_400Regular',


    },
    textoLoginInmobiliaria: {
        color: "white",
        fontFamily: 'Poppins_400Regular',
    },

    contenedorLogin: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",

    },

    tinyLogo: {
        width: 40,
        height: 40,
        alignSelf: 'center',

    },
});
