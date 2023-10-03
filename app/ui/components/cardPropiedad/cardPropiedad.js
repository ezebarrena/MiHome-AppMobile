import React from "react";
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,

} from "react-native";

import Theme from "../../styles/Theme";

import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import imagenTest from '../../../assets/images/varios/imagenCasaTest.png'

const data = [
    'US$180.000',
    'Calle Mitre 890',
    '4 amb',
    '168 m2 totales',
];

//funcion que crea pantalla 
export default function CardPropiedad() {
    const [fontsLoaded, fontError] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const renderItem = ({ item }) => (
        <View style={styles.gridItem}>
            <Text style={styles.Texto}>{item}</Text>
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.contenedorPrincipal}>
                <View style={styles.indicador}>
                    <Text style={styles.textoIndicador}>
                        VENTA
                    </Text>
                </View>
                <Image source={imagenTest} style={styles.imagenEstilo} />
                <View style={styles.contenedorData}>
                    <View style={styles.row}>
                        <View style={styles.gridItem}>
                            <Text style={styles.Texto}>US$180.000</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Text style={styles.Texto}>Calle Mitre 890</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.gridItem}>
                            <Text style={styles.Texto}>4 amb</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Text style={styles.Texto}>168 m2 totales</Text>
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

    contenedorPrincipal: {
        backgroundColor: 'blue',
        width: 330,
        height: 135,
        borderRadius: 10,
        elevation: 15,

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