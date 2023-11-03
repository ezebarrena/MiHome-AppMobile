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
import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";


import i18n from "../../../assets/strings/I18n";
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"


import Theme from "../../styles/Theme";

import imagenTest from '../../../assets/images/various/imagenCasaTest.png'

export default function PanelDetalles({ datosPropiedad }) {

    const [fontsLoaded, fontError] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    let idioma = "propiedadesEstados." + datosPropiedad.tipo;
    let i18nIdioma = i18n.t(idioma).toLocaleUpperCase();

    let venta = datosPropiedad.tipo === "venta";
    let alquiler = datosPropiedad.tipo === "alquiler";
    let vendida = datosPropiedad.tipo === "vendida";
    let alquilado = datosPropiedad.tipo === "alquilada";
    let pausada = datosPropiedad.tipo === "pausada";
    let expensas = datosPropiedad.tieneExpensas === 'si'
    return (
        <View style={styles.container}>
            <View style={styles.headEstadoPropiedad}>
                <Text style={styles.textoHead}>{i18n.t('detallePropiedadInmobiliaria.estadoPropiedad')}</Text>
                <Text style={styles.textoEstado}>{i18nIdioma}</Text>
            </View>

            {venta ? <View style={styles.headEstadoPropiedad}>
                <Text style={styles.textos}>{i18n.t('detallePropiedadInmobiliaria.venta')}</Text>
                <Text style={styles.textos}>{datosPropiedad.valor}</Text>
            </View> : null}
            {alquiler ? <View style={styles.headEstadoPropiedad}>
                <Text style={styles.textos}>{i18n.t('detallePropiedadInmobiliaria.alquiler')}</Text>
                <Text style={styles.textos}>{datosPropiedad.valor}</Text>
            </View> : null}
            {vendida ? <View>
                <Text style={[styles.textos, styles.centrar]}>{i18n.t('detallePropiedadInmobiliaria.vendidoA')} {datosPropiedad.usuario}</Text>
                <View style={styles.headEstadoPropiedad}>
                    <Text style={styles.textos}>{i18n.t('detallePropiedadInmobiliaria.vendido')}</Text>
                    <Text style={styles.textos}>{datosPropiedad.valor}</Text>
                </View>
                <Text style={[styles.textos, styles.centrar]}>{i18n.t('detallePropiedadInmobiliaria.fechaVenta')} {datosPropiedad.fechaVenta}</Text>
            </View> : null}

            {alquilado ? <View>
                <Text style={[styles.textos, styles.centrar]}>{i18n.t('detallePropiedadInmobiliaria.alquiladoA')} {datosPropiedad.usuario}</Text>
                <View style={styles.headEstadoPropiedad}>
                    <Text style={styles.textos}>{i18n.t('detallePropiedadInmobiliaria.alquiler')}</Text>
                    <Text style={styles.textos}>{datosPropiedad.valor}</Text>
                </View>
                <View style={styles.headEstadoPropiedad}>
                    <Text style={styles.textos}>{i18n.t('detallePropiedadInmobiliaria.alquiladoDesde')}</Text>
                    <View>
                        <Text style={styles.textos}>{datosPropiedad.fechaDesde}</Text>
                        <Text style={[styles.textos, styles.centrar]}>{i18n.t('detallePropiedadInmobiliaria.alquiladoHasta')}</Text>
                        <Text style={styles.textos}>{datosPropiedad.fechaHasta}</Text>
                    </View>

                </View>


            </View> : null}



            {(vendida || alquilado) ? null : (
                expensas ? (
                    <View style={styles.headEstadoPropiedad}>
                        <Text style={styles.textos}>{i18n.t('detallePropiedadInmobiliaria.expensas')}</Text>
                        <Text style={styles.textos}>{datosPropiedad.expensas}</Text>
                    </View>
                ) : (
                    <View style={styles.headEstadoPropiedad}>
                        <Text style={styles.textos}>{i18n.t('detallePropiedadInmobiliaria.noExpensas')}</Text>
                    </View>
                )
            )}





        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 330,

        borderRadius: 5,
        backgroundColor: Theme.colors.FONDOCARD,
        marginVertical: 35,
        marginHorizontal: 5,
        alignSelf: 'center',
        elevation: 8,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 0.3,
    },
    headEstadoPropiedad: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
    },
    textoHead: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: Dimensions.get("window").width * 0.045,
    },
    textoEstado: {
        fontFamily: 'Poppins_500Medium',
        fontSize: Dimensions.get("window").width * 0.045,
        backgroundColor: Theme.colors.PRIMARY,
        color: Theme.colors.FONDOS,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
    },
    textos: {
        fontFamily: 'Poppins_500Medium',
        fontSize: Dimensions.get("window").width * 0.04,
    },
    centrar: {
        alignSelf: 'center',
        paddingVertical: 10,
    },
})