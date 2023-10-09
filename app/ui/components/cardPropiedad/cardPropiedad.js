import React from "react";
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,
    Dimensions,

} from "react-native";

import Theme from "../../styles/Theme";

import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import imagenTest from '../../../assets/images/various/imagenCasaTest.png'



//funcion que crea pantalla 
export default function CardPropiedad({ valor, ubicacion, ambientes, metros, tipo, margen }) {
    const [fontsLoaded, fontError] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }



    return (
        <View>

            <View style={{ width: 330, borderRadius: 10, elevation: 10, marginRight: margen }}>
                <View style={styles.indicador}>
                    <Text style={styles.textoIndicador}>
                        {tipo}
                    </Text>
                </View>
                <Image source={imagenTest} style={styles.imagenEstilo} />
                <View style={styles.contenedorData}>
                    <View style={styles.row}>
                        <View style={styles.gridItem}>
                            <Text style={styles.Texto}>{valor}</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Text style={styles.Texto}>{ambientes} ambientes</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.gridItem}>
                            <Text style={styles.Texto}>{ubicacion}</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Text style={styles.Texto}>{metros} m2 totales</Text>
                        </View>
                    </View>


                </View>
            </View>






        </View>
    )
}

const styles = StyleSheet.create({
    container: {



        alignItems: 'center',




    },


    imagenEstilo: {
        resizeMode: 'cover',
        width: "100%",
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 0,
    },

    contenedorData: {
        backgroundColor: Theme.colors.FONDOCARD,
        width: "100%",
        alignItems: 'center',
        borderBottomLeftRadius: 10, // Redondea la esquina inferior izquierda
        borderBottomRightRadius: 10,
        elevation: 15,


    },
    Texto: {
        padding: 2,
        fontFamily: 'Poppins_400Regular'
    },

    indicador: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: Theme.colors.PRIMARY,
        zIndex: 1,
        borderTopLeftRadius: 10,
        borderBottomEndRadius: 10,
        elevation: 5,

    },

    textoIndicador: {
        color: "white",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'Poppins_400Regular'


    },

    gridItem: {
        flex: 1,
        alignItems: 'center',
        margin: 2,



    },

    row: {
        flexDirection: 'row',
    },

});