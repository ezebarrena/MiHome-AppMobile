import React, { useState, useEffect } from "react";
import {

    StyleSheet,
    View,
    Text,
    Pressable,
    ScrollView,
    Dimensions,
    Image,



} from "react-native";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";


import i18n from "../../../assets/strings/I18n";
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"


import Theme from "../../styles/Theme";

import imagenTest from '../../../assets/images/various/imagenCasaTest.png'

export default function DetallePropiedadRSUI(mostrarBotones) {
    //console.log(mostrarBotones.mostrarBotones);
    //{mostrarBotones.mostrarBotones ? <Text>Bienvenidos, Usuario</Text> : null}
    const [fontsLoaded, fontError] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const navModificar = () => {

    }

    const pausar = () => {

    }

    const eliminar = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.divImagen}>
                <Image source={imagenTest} style={styles.imagen} />
            </View>
            <View style={styles.botonera}>
                <Pressable onPress={() => navModificar()} style={[styles.boton, styles.botonMod]}>
                    <Text style={styles.botonTexto}>{i18n.t("detallePropiedadInmobiliaria.modificarPublicacion")}</Text>
                </Pressable>

                <Pressable onPress={() => pausar()} style={[styles.boton, styles.botonPausa]}>
                    <Text style={styles.botonTexto}>{i18n.t("detallePropiedadInmobiliaria.pausar")}</Text>
                </Pressable>

                <Pressable onPress={() => eliminar()} style={[styles.boton, styles.botonEliminar]}>
                    <Text style={[styles.botonTexto, styles.textoEliminar]}>{i18n.t("detallePropiedadInmobiliaria.eliminar")}</Text>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imagen: {
        width: '80%',
        borderRadius: 15,
        height: '80%'
    },
    divImagen: {
        width: '100%',
        height: '30%',

        alignItems: 'center',
        justifyContent: 'center'
    },
    botonera: {
        flexDirection: "row", // Alineación horizontal
        justifyContent: 'space-evenly', // Alineación central horizontal
        alignItems: 'center'
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3,

    },

    botonTexto: {
        fontFamily: "Poppins_500Medium",
        fontSize: Dimensions.get('window').width * 0.038,
    },

    botonMod:{
        backgroundColor: Theme.colors.FONDOS
    },

    botonPausa:{
        backgroundColor: Theme.colors.FONDOCARD
    },
    botonEliminar:{
        backgroundColor: Theme.colors.BTNELIMINAR
    },

    textoEliminar:{
        color:Theme.colors.FONDOS
    }
 

})