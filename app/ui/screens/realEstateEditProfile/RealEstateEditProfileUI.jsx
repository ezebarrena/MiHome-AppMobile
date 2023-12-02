import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Modal, Pressable, Dimensions, ActivityIndicator } from "react-native";
import { useFonts, Poppins_700Bold_Italic, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import Boton from "../../components/buttons/BotonMenuPerfil";
import home from "../../../assets/images/icons/home.png";
import ruedita from "../../../assets/images/icons/settings.png";
import calendar from "../../../assets/images/icons/calendar_month.png";
import logout from "../../../assets/images/icons/logout.png";
import fotoPerfil from "../../../assets/images/icons/fotoRE.png";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteRealEstate } from "../../../api/realEstatesAPI";
import CustomTextInput from "../../components/inputs/CustomTextInput";
import i18n from "../../../assets/strings/I18n";
import Theme from "../../styles/Theme";
import { useForm } from "../../../hooks/useForm";


export default function RealEstateEditProfileUI({ params }) {

    const initialFormState = {
        "fantasyName": params.fantasyName != null || params.fantasyName != undefined ? params.fantasyName : "",
        "contactEmail": params.contactEmail != null || params.contactEmail != undefined ? params.contactEmail: "", 


    }

    const { form, onChange, setFormValue } = useForm(initialFormState);
    const navigation = useNavigation();
    const [cargando, setCargando] = useState(false);
    const [fontsLoaded, fontError] = useFonts({
        Poppins_700Bold_Italic,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    console.log(form);

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={fotoPerfil} />
                <Text style={styles.mailText}>{params.logInEmail}</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.textoBody1}>{i18n.t('REeditarPerfil.nombre')}</Text>
                <CustomTextInput
                    value={form.fantasyName}
                    onChangeText={(value) => onChange(value, "fantasyName")}
                    
                />
{/*                 <Text style={styles.textoBody1}>{i18n.t('REeditarPerfil.numContacto')}</Text>
                <CustomTextInput
                    keyboardType={'numeric'}
                    value={form.fantasyName}
                    onChangeText={(value) => onChange(value, "fantasyName")}
                /> */}
                <Text style={styles.textoBody1}>{i18n.t('REeditarPerfil.correoContacto')}</Text>
                <CustomTextInput
                    value={form.contactEmail}
                    onChangeText={(value) => onChange(value, "fantasyName")}
                />
            </View>
            {/* <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{i18n.t(`REprofile.textoEliminar1`)}</Text>
                        <Text style={styles.modalText}>{i18n.t(`REprofile.textoEliminar2`)}</Text>
                        <View style={styles.btnera}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>{i18n.t(`common.cerrar`)}</Text>
                            </Pressable>
                            <Pressable disabled={cargando} style={[styles.button, styles.buttonDelete]} onPress={() => handleDelete()}>
                                {cargando ? <ActivityIndicator size="large" /> : <Text style={styles.textStyle}>{i18n.t(`REprofile.confirmar`)}</Text>}
                                
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 45,
    },
    userInfo: {
        alignItems: 'center',
        paddingTop: 50,
    },
    mailText: {
        fontFamily: 'Poppins_500Medium',
        fontSize: Dimensions.get("window").width * 0.043,
        color: "#646464",
        marginTop: 20,
    },
    /* 
    contenedorOpciones: {
        width: 328,
        borderWidth: 1,
        borderRadius: 10,
    },
    contenedorCerrarSesion: {
        width: 328,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
    },
    userNameText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: Dimensions.get("window").width * 0.08,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 13,
        padding: 11,
        elevation: 2,
    },

    buttonClose: {
        backgroundColor: '#2196F3',
    },
    buttonDelete: {
        backgroundColor: Theme.colors.BTNELIMINAR
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: Dimensions.get("window").width * 0.038,

    },
    modalText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: Dimensions.get("window").width * 0.045,
        marginBottom: 15,
        textAlign: 'center',
    },

    btnera: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }, */
    textoBody1: {
        fontFamily: "Poppins_500Medium",
        fontSize: Dimensions.get('window').width * 0.045,
        textAlign: 'center',
        marginTop:15
    },
    containerForm: {
        width: '80%',
        marginTop: 10
    },

});
