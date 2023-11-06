import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useFonts, Poppins_700Bold_Italic, Poppins_400Regular } from "@expo-google-fonts/poppins";
import Boton from "../../components/buttons/BotonMenuPerfil";
import home from "../../../assets/images/icons/home.png";
import ruedita from "../../../assets/images/icons/settings.png";
import calendar from "../../../assets/images/icons/calendar_month.png";
import logout from "../../../assets/images/icons/logout.png";
import fotoPerfil from "../../../assets/images/icons/fotoRE.png";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RealEstateProfileUI({params}) {
    const navigation = useNavigation();
    const [fontsLoaded, fontError] = useFonts({
        Poppins_700Bold_Italic,
        Poppins_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const onLogout = async () => {
        try {
            await AsyncStorage.clear(); // Elimina todos los datos almacenados en AsyncStorage
        } catch (error) {
            console.error('Error al limpiar AsyncStorage:', error);
        }

        navigation.reset({
            index: 0,
            routes: [{ name: "Welcome" }],
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={fotoPerfil}/>
                <Text style={styles.userNameText}>{params.fantasyName}</Text>
                <Text style={styles.mailText}>{params.logInEmail}</Text>
            </View>

            <View style={styles.contenedorOpciones}>
                <Boton iconSource={home} title={"Mis Propiedades"}/>
                <Boton iconSource={calendar} title={"Calendario"}/>
                <Boton iconSource={ruedita} title={"Ajustes"}/>
            </View>

            <View style={styles.contenedorCerrarSesion}>
                <Boton iconSource={logout} title={"Cerrar sesión"} onPress={onLogout}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    userInfo: {
        alignItems: 'center',
        paddingTop:50,
    },
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
        fontSize: 35,
        fontWeight: "bold",
    },
    mailText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#646464",
        marginBottom: 20,
    },
});
