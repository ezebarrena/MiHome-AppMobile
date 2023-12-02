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
import { useNavigation } from "@react-navigation/native";
import i18n from "../../../assets/strings/I18n";

import Boton from "../../components/buttons/BotonMenuPerfil";
import favorito from "../../../assets/images/icons/favorite.png"
import ruedita from "../../../assets/images/icons/settings.png"
import billetera from "../../../assets/images/icons/account_balance_wallet.png"
import logout from "../../../assets/images/icons/logout.png"
import fotoPerfil from "../../../assets/images/icons/Rectangle.png"


export default function UserProfileUI() {
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

    const favoriteNav = () => {
        navigation.navigate("UserFavorites")
    }

    const paymentNav = () => {
        navigation.navigate("UserPaymentMethods")
    }

    return (
        
        <View style={styles.container}>
            
            
            
            

            <View style={styles.userInfo}>
                <Image source={fotoPerfil}/>
                <Text style={styles.userNameText}>Javier</Text>
                <Text style={styles.mailText}>javi@gmail.com</Text>
            </View>



            <View style={styles.contenedorOpciones}>
                <Boton iconSource={favorito} title={"Tus Favoritos"} onPress={favoriteNav}/>

                <Boton iconSource={billetera} title={"Tus Medios de pago"} onPress={paymentNav}/>
                <Boton iconSource={ruedita} title={"Ajustes"}/>
            </View>
            
            <View style={styles.contenedorCerrarSesion}>
                <Boton iconSource={logout} title={"Cerrar sesion"} onPress={onLogout}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      alignItems: 'center',
      //justifyContent: 'center',
      
    },

    userInfo: {
        alignItems: 'center',
        paddingTop:'25%',
    },
    
    contenedorOpciones: {
        width: 328,
        borderWidth: 1,
        borderRadius: 10,
    },

    contenedorCerrarSesion:{
        width: 328,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
    },
    userNameText: {
        fontSize: 35,
        fontWeight: "bold"
    },

    mailText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#646464",
        marginBottom: 20,
    }
    
  });