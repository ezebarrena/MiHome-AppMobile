import React, { useState, useEffect } from "react";
import {


    StyleSheet,
    View,
    Text,
    Pressable,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    Modal,
    Button,
} from "react-native";
import {
    useFonts,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import i18n from "../../../assets/strings/I18n";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Theme from "../../styles/Theme";
import imagenInmobiliaria from '../../../assets/images/imagenInmobiliaria.png'

const { width } = Dimensions.get('window');

const images = [
    require('../../../assets/images/various/imagenCasaTest.png'),  // Reemplaza con la ruta correcta de tus imágenes
    require('../../../assets/images/various/casatest1.png'),
    require('../../../assets/images/various/casatest2.png'),
    require('../../../assets/images/various/casatest3.png'),
    // Agrega más imágenes aquí
];

export default function PublicacionPropiedadUI({ propiedad }) {
    const [fontsLoaded, fontError] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    let idiomaTipo = "propiedadesEstados." + propiedad.tipo;
    let i18nIdiomaTipo = i18n.t(idiomaTipo)
    let idiomaDetalleTipo = "detallePropiedadInmobiliaria." + propiedad.tipo;
    let i18nIdiomaDetalleTipo = i18n.t(idiomaDetalleTipo)
    return (
        <ScrollView style={styles.container}>
            <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={image}
                        style={styles.propertyImage}
                    />
                ))}
            </ScrollView>
            <View style={styles.containerDetalles}>
                <View style={styles.viewDetalles}>
                    <Ionicons name="location-outline" size={33} style={{ marginHorizontal: 8 }} />
                    <Text style={styles.textDetalles1}>{propiedad.calle} {propiedad.numero}, {propiedad.barrio}, {propiedad.localidad}, {propiedad.provincia}</Text>
                </View>
                <View style={styles.viewDetalles}>
                    <Ionicons name="home-outline" size={33} style={{ marginHorizontal: 8 }} />
                    <Text style={styles.textDetalles}>{propiedad.tipoPropiedad} {i18nIdiomaTipo} </Text>
                </View>
                <View style={styles.viewDetalles}>
                    <MaterialIcons name="straighten" size={33} style={{ marginHorizontal: 8 }} />
                    <Text style={styles.textDetalles}>{propiedad.m2cubiertos} m2 totales, {propiedad.m2descubiertos} m2 cubiertos</Text>
                </View>

            </View>
            <View style={styles.viewValores}>
                <View style={styles.viewValores1}>
                    <Text style={styles.textValores}>{i18nIdiomaDetalleTipo}</Text>
                    {propiedad.expensas ? <Text style={styles.textValores}>{i18n.t('detallePropiedadInmobiliaria.expensas')}</Text> : null}


                </View>
                <View style={styles.viewValores1}>
                    <Text style={styles.textValores}>{propiedad.precio}</Text>
                    {propiedad.expensas ?
                        <Text style={styles.textValores}>{propiedad.expensas}</Text>
                        : null}
                </View>


            </View>
            <Text style={styles.descripcion}>{propiedad.descripcion}</Text>
            <View style={styles.chipContainer}>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>{propiedad.ambientes} {propiedad.ambientes > 1 ? i18n.t("detallePropiedad.ambientes") : i18n.t("detallePropiedad.ambiente")}</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>{propiedad.cantCuartos} {propiedad.cantCuartos > 1 ? i18n.t("detallePropiedad.habitaciones") : i18n.t("detallePropiedad.habitacion")}</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>{propiedad.nBaths} {propiedad.nBaths > 1 ? i18n.t("detallePropiedad.banios") : i18n.t("detallePropiedad.banio")}</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>{propiedad.cochera} {propiedad.cochera > 1 ? i18n.t("detallePropiedad.cocheras") : i18n.t("detallePropiedad.cochera")}</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>{propiedad.baulera} {propiedad.baulera > 1 ? i18n.t("detallePropiedad.bauleras") : i18n.t("detallePropiedad.baulera")}</Text>
                </View>

                {propiedad.amenities.map((chip, index) => (
                    <View key={index} style={styles.chip}>
                        <Text style={styles.chipText}>{chip}</Text>
                    </View>
                ))}


            </View>
            <View style={styles.viewUbicacion}>
                <Text style={styles.textUbicacion}>{i18n.t("detallePropiedad.ubicacion")}</Text>
            </View>
            <View style={styles.viewExtras}>
                <Text style={styles.textExtras}>{i18n.t("detallePropiedad.coordenadas")}: {propiedad.geolocalizacion}</Text>
                <Text style={styles.textExtras}>{i18n.t("detallePropiedad.orientacion")}: oeste, norte</Text>
                <Text style={styles.textExtras}>{i18n.t("detallePropiedad.antiguedad")}: 25 {i18n.t("detallePropiedad.anios")}</Text>
            </View>
            <View style={styles.viewCardInmobiliaria}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imagenCardInmobiliaria} source={imagenInmobiliaria} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.tituloCI}>{propiedad.inmobiliaria}</Text>
                    <Text style={styles.textoCI}>lla@gmail.com</Text>
                    <Text style={styles.textoCI}>valoracion</Text>
                    <View style={styles.bntneraCI}>
                        <Pressable style={styles.btnCI} onPress={() => { console.log("contactar") }}><Text>{i18n.t("detallePropiedad.contactar")}</Text></Pressable>
                        <Pressable style={styles.btnCI} onPress={() => { console.log("propiedades") }}><Text>{i18n.t("detallePropiedad.propiedades")}</Text></Pressable>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    scrollView: {
        flexGrow: 0,
        marginTop: '5%'
    },

    propertyImage: {
        width: width * 0.95,  // Ajusta el ancho según tus necesidades
        height: width * 0.65, // Ajusta la altura según tus necesidades
        marginHorizontal: 10, // Espacio entre imágenes
        borderRadius: 10,

    },
    viewDetalles: {
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        //backgroundColor:'green',
        paddingVertical: 3,
    },

    containerDetalles: {
        marginVertical: 25,
        alignItems: 'flex-start',

        justifyContent: 'center',
        //backgroundColor:'red'

    },
    textDetalles: {
        paddingHorizontal:15,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: Dimensions.get("window").width * 0.039,
    },
    textDetalles1:{

        fontFamily: 'Poppins_600SemiBold',
        fontSize: Dimensions.get("window").width * 0.039,
        paddingHorizontal:15,
    },
    viewValores: {
        backgroundColor: Theme.colors.PRIMARY,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        elevation: 10,
    },
    viewValores1: {

        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 5,
    },

    textValores: {
        color: 'white',
        fontSize: Dimensions.get("window").width * 0.04,
        fontFamily: 'Poppins_500Medium'
    },
    descripcion: {
        marginVertical: 20,
        alignSelf: 'center',
        fontSize: Dimensions.get("window").width * 0.043,
        fontFamily: 'Poppins_500Medium',
        paddingHorizontal: 10,
    },
    chip: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 9,
        margin: 5,
    },
    chipText: {
        color: 'black',
        fontSize: Dimensions.get("window").width * 0.038,
        fontFamily: 'Poppins_500Medium',
    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 15,
    },
    viewUbicacion: {
        padding: 10,
    },
    textUbicacion: {
        fontFamily: 'Poppins_700Bold',
        fontSize: Dimensions.get("window").width * 0.045,
    },
    viewExtras: {
        padding: 10,
    },
    textExtras: {
        fontFamily: 'Poppins_500Medium',
        fontSize: Dimensions.get("window").width * 0.039,
    },
    viewCardInmobiliaria: {
        backgroundColor: Theme.colors.FONDOCARD,
        marginHorizontal: 20,
        marginVertical: 25,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 15,
        elevation: 10,
        flexDirection: 'row', // Establece la dirección del flexbox en "row"
        alignItems: 'center',
    },
    imagenCardInmobiliaria: {
        width: width * 0.2,  // Ajusta el ancho según tus necesidades
        height: width * 0.2, // Ajusta la altura según tus necesidades
        borderRadius: 100,
    },
    bntneraCI: {
        flexDirection: "row",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 15,
    },
    btnCI: {
        fontFamily: 'Poppins_500Medium',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 6,
        borderRadius: 7,

    },
    imageContainer: {
        marginRight: 15, // Espacio entre la imagen y el contenido a la derecha
    },
    textContainer: {
        flex: 1, // Toma todo el espacio disponible
        alignItems:'flex-start',
        justifyContent:'center'
    },
    tituloCI:{
        fontFamily: 'Poppins_700Bold',
        fontSize: Dimensions.get("window").width * 0.045,
    },
    textoCI:{
        fontFamily: 'Poppins_500Medium',
        fontSize: Dimensions.get("window").width * 0.039,
    },

})