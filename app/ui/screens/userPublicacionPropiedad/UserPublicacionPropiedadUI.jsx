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

//import MapView, { Marker } from 'react-native-maps';
import i18n from "../../../assets/strings/I18n";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Theme from "../../styles/Theme";
import imagenInmobiliaria from '../../../assets/images/imagenInmobiliaria.png'
import Estados from "../../../assets/funcionTraduccion";
import StarRating from 'react-native-star-rating';
const { width } = Dimensions.get('window');
import { useNavigation } from "@react-navigation/native";

import MapView, { Marker } from 'react-native-maps';
const images = [
    require('../../../assets/images/various/imagenCasaTest.png'),  // Reemplaza con la ruta correcta de tus imágenes
    require('../../../assets/images/various/casatest1.png'),
    require('../../../assets/images/various/casatest2.png'),
    require('../../../assets/images/various/casatest3.png'),
    // Agrega más imágenes aquí
];

//TO DO 

export default function UserPublicacionPropiedadUI({ propiedad, inmobiliaria }) {

    const [fontsLoaded, fontError] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    const [mapRegion, setMapRegion] = useState({
        latitude: null,
        longitude: null,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const [sufijo, setSufijo] = useState("")
    const navigation = useNavigation();

    const Book = () => {
        navigation.navigate("Book")
      }

    useEffect(() => {
        if (propiedad.geoLocalization) {
            const geo = propiedad.geoLocalization.split(",")
            setMapRegion({
                ...mapRegion,
                latitude: parseFloat(geo[0]),
                longitude: parseFloat(geo[1])
            });
        }
        if (propiedad.floor) {
            const ultimoDigito = propiedad.floor % 10;
            const penultimoDigito = Math.floor((propiedad.floor % 100) / 10);

            if (ultimoDigito === 1 && penultimoDigito !== 1) {
                setSufijo('er');
            } else if (ultimoDigito === 2 && penultimoDigito !== 1) {
                setSufijo('do');
            } else if (ultimoDigito === 3 && penultimoDigito !== 1) {
                setSufijo('er');
            } else {
                setSufijo('to');
            }
        }
    }, [])
    if (!fontsLoaded && !fontError) {
        return null;
    }
    let tipo = Estados(propiedad.transaction, propiedad.state)
    let idiomaTipo = "propiedadesEstados." + tipo;
    let i18nIdiomaTipo = i18n.t(idiomaTipo)
    let idiomaDetalleTipo = "detallePropiedadInmobiliaria." + tipo;
    let i18nIdiomaDetalleTipo = i18n.t(idiomaDetalleTipo)
    return (
        <ScrollView style={styles.container}>
            <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
                {propiedad.image && propiedad.image.length > 0 ?
                    (propiedad.image.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            style={styles.propertyImage}
                        />
                    ))) :

                    (images.map((image, index) => (
                        <Image
                            key={index}
                            source={image}
                            style={styles.propertyImage}
                        />
                    )))}
                { }

            </ScrollView>
            <View style={styles.booking}>
            <TouchableOpacity>
                <Text style={styles.bookingButton} onPress={Book}>Reservar</Text>
            </TouchableOpacity>
            <View style={styles.spacing} />

            <TouchableOpacity>
                <Text style={styles.bookingButton} onPress={''}>Agendar visita</Text>
            </TouchableOpacity>
            <View style={styles.spacing} />

            <TouchableOpacity>
                <Text style={styles.bookingButton} onPress={''}>Favorito</Text>
            </TouchableOpacity>
            </View>

            <Text style={styles.titulo}>{propiedad.title}</Text>
            <View style={styles.containerDetalles}>
                <View style={styles.viewDetalles}>
                    <MaterialIcons name="pin-drop" size={35} style={{ marginHorizontal: 30 }} />
                    <Text style={styles.textDetalles1}>{propiedad.direction}</Text>
                </View>
                <View style={styles.viewDetalles}>
                    <MaterialIcons name="home" size={35} style={{ marginHorizontal: 8 }} />
                    <Text style={styles.textDetalles}>{i18n.t(`REUploadAssetChoices.${propiedad.type}`)} {i18nIdiomaTipo} </Text>
                </View>
                <View style={styles.viewDetalles}>
                    <MaterialIcons name="straighten" size={35} style={{ marginHorizontal: 8 }} />
                    <Text style={styles.textDetalles}>{propiedad.mTotal} m2 {i18n.t("detallePropiedad.total")}, {propiedad.mIndoor} m2 {i18n.t("detallePropiedad.cubiertos")}</Text>
                </View>

                {propiedad.floor ?
                    <View style={styles.viewDetalles}>
                        <MaterialIcons name="apartment" size={35} style={{ marginHorizontal: 8 }} />
                        <Text style={styles.textDetalles}>{propiedad.floor}{i18n.t(`detallePropiedad.${sufijo}`)} {i18n.t("detallePropiedad.piso")} </Text>
                    </View> : null}
                {/* {propiedad.floor ?  : null} */}

            </View>
            <View style={styles.viewValores}>
                <View style={styles.viewValores1}>
                    <Text style={styles.textValores}>{i18nIdiomaDetalleTipo}</Text>
                    {propiedad.bills ? <Text style={styles.textValores}>{i18n.t('detallePropiedadInmobiliaria.expensas')}</Text> : null}


                </View>
                <View style={styles.viewValores1}>
                    <Text style={styles.textValores}>{propiedad.coin} {propiedad.price}</Text>
                    {propiedad.bills ?
                        <Text style={styles.textValores}>$ {propiedad.bills}</Text>
                        : null}
                </View>


            </View>
            <Text style={styles.descripcion}>{propiedad.description}</Text>
            <View style={styles.chipContainer}>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>{propiedad.room} {propiedad.room > 1 ? i18n.t("detallePropiedad.ambientes") : i18n.t("detallePropiedad.ambiente")}</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>{propiedad.bedroom} {propiedad.bedroom > 1 ? i18n.t("detallePropiedad.habitaciones") : i18n.t("detallePropiedad.habitacion")}</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>{propiedad.bath} {propiedad.bath > 1 ? i18n.t("detallePropiedad.banios") : i18n.t("detallePropiedad.banio")}</Text>
                </View>
                {propiedad.garage ? <View style={styles.chip}>
                    <Text style={styles.chipText}>{propiedad.garage} {propiedad.garage > 1 ? i18n.t("detallePropiedad.cocheras") : i18n.t("detallePropiedad.cochera")}</Text>
                </View> : null}
                {propiedad.storage ? <View style={styles.chip}>
                    <Text style={styles.chipText}>{propiedad.storage} {propiedad.storage > 1 ? i18n.t("detallePropiedad.bauleras") : i18n.t("detallePropiedad.baulera")}</Text>
                </View> : <View style={styles.chip}>
                    <Text style={styles.chipText}> No {i18n.t("detallePropiedad.baulera")}</Text>
                </View>}

                {propiedad.amenities.map((chip, index) => (
                    <View key={index} style={styles.chip}>
                        <Text style={styles.chipText}>{i18n.t(`REUploadAssetChoices.${chip}`)}</Text>
                    </View>
                ))}


            </View>
            <View style={styles.viewUbicacion}>
                <Text style={styles.textUbicacion}>{i18n.t("detallePropiedad.ubicacion")}</Text>
                <MapView style={styles.map} region={mapRegion}>
                    {mapRegion.latitude !== null && mapRegion.longitude !== null && (
                        <Marker
                            coordinate={{
                                latitude: mapRegion.latitude,
                                longitude: mapRegion.longitude,
                            }}
                        />
                    )}
                </MapView>
            </View>
            <View style={styles.viewExtras}>
                <Text style={styles.textExtras}>{i18n.t("detallePropiedad.coordenadas")}: {propiedad.geoLocalization}</Text>

                {propiedad.frontBack ? <Text style={styles.textExtras}>{i18n.t("detallePropiedad.vista")}: {i18n.t(`REUploadAssetChoices.${propiedad.frontBack}`)}</Text> : null}
                {propiedad.orientation.length > 0 ? <Text style={styles.textExtras}>{i18n.t("detallePropiedad.orientacion")}: {propiedad.orientation.map((texto, index, array) => (
                    <>
                        {i18n.t(`REUploadAssetChoices.${texto}`)}
                        {index !== array.length - 1 && ", "}
                    </>
                ))}</Text> : null}

                <Text style={styles.textExtras}>{i18n.t("detallePropiedad.antiguedad")}: {propiedad.antiquity} {propiedad.antiquity > 1 ? i18n.t("detallePropiedad.anios") : i18n.t("detallePropiedad.anio")}</Text>
            </View>
            <View style={styles.viewCardInmobiliaria}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imagenCardInmobiliaria} source={imagenInmobiliaria} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.tituloCI}>{inmobiliaria.fantasyName}</Text>
                    <Text style={styles.textoCI}>{inmobiliaria.logInEmail}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.textoCI}>{i18n.t("detallePropiedad.valoracion")}</Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={3.6}
                            starSize={22}
                        />
                        <Text style={styles.textoCI}>(12)</Text>
                    </View>

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
        marginVertical: 10,
        alignItems: 'flex-start',
        paddingHorizontal: 2,
        justifyContent: 'center',
        //backgroundColor:'red'

    },
    textDetalles: {
        paddingHorizontal: 15,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: Dimensions.get("window").width * 0.04,
    },
    textDetalles1: {

        fontFamily: 'Poppins_600SemiBold',
        fontSize: Dimensions.get("window").width * 0.039,
        paddingHorizontal: 15,
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
        paddingHorizontal: '5%',
    },
    titulo:{
        fontFamily:"Poppins_700Bold",
        fontSize: Dimensions.get("window").width * 0.05,
        paddingLeft:'5%'
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
        paddingHorizontal: '2%',

    },
    viewExtras: {
        padding: 10,
    },
    textExtras: {
        fontFamily: 'Poppins_500Medium',
        fontSize: Dimensions.get("window").width * 0.039,
        paddingHorizontal: '2%',

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
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    tituloCI: {
        fontFamily: 'Poppins_700Bold',
        fontSize: Dimensions.get("window").width * 0.045,
    },
    textoCI: {
        fontFamily: 'Poppins_500Medium',
        fontSize: Dimensions.get("window").width * 0.039,
    },
    map: {
        height: 200,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },

    booking:{
        marginLeft: "3%",
        marginRight: "3%",
        height:58,
        backgroundColor:Theme.colors.FONDOCARD,
        borderTopLeftRadius: 10,
        borderTopRi7ghtRadius: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        marginBottom:10,
        marginTop:15,
        flex: 1, // Esto hace que el contenedor ocupe todo el espacio disponible
        flexDirection: 'row', // Esto establece la dirección del diseño a horizontal (columnas)
        justifyContent: 'center', // Centra en el eje principal (horizontal)
        alignItems: 'center', // Centra en el eje secundario (vertical)
      },
    
      bookingText:{
        fontSize: Dimensions.get('window').width * 0.04,
        marginBottom:10
      },
    
      bookingButton:{
        fontSize: Dimensions.get('window').width * 0.03,
        fontFamily: 'Poppins_700Bold',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderWidth:1.5,
        paddingTop:8,
        paddingLeft:10,
        paddingBottom:3,
        paddingRight:10,
        width:'100%',
        textAlign:'center',

      },

      spacing: {
        width: 20,
      },
    
})