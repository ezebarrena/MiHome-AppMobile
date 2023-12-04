import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useCallback } from "react";
import { useFonts, Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import CardBooking from "../../components/cards/CardBooking";



import i18n from "../../../assets/strings/I18n";
import Theme from "../../styles/Theme";




export default function BookingsUI() {

  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    
    Poppins_700Bold_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  const goHome = () => {
    navigation.navigate("UserHome")
  }


  return (
    <View style={styles.container}>

      <View style={styles.contenedorHead}>
        <Text style={styles.textoHead}>Bookings</Text>
      </View>

      <ScrollView>

        <View style={styles.booking}>
          <Text style={styles.bookingText}>Do you want a book a property?</Text>
          <TouchableOpacity>
            <Text style={styles.bookingButton} onPress={goHome}>See properties</Text>
          </TouchableOpacity>
        </View>

        <CardBooking dateBooked={"11/09/2024"} dateBookedEnd={"11/11/2024"} estado={"Alquilada"} price={'$3000'}
        calle={'Los Laureles'} numero={'124'} assetName={'Casa de verano'}
        />




      </ScrollView>
  
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
    backgroundColor: "rgba(81,47,123,1)",
    width: 270,

    height: "auto",
    borderRadius: 10,
  },
  textoBoton: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    padding: 10,
  },


  contenedorHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: "3%",
    paddingTop: 30,
  },
  

  textoHead: {
    marginLeft: 5,
    marginTop: 30,    
    fontFamily: 'Poppins_700Bold',
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.06,
  },

  booking:{
    marginLeft: "3%",
    marginRight: "3%",
    height:90,
    backgroundColor:Theme.colors.FONDOCARD,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    paddingLeft:15,
    paddingTop:10,
    marginBottom:10,
    marginTop:5
  },

  bookingText:{
    fontSize: Dimensions.get('window').width * 0.04,
    marginBottom:10
  },

  bookingButton:{
    fontSize: Dimensions.get('window').width * 0.035,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:1,
    padding:7,
    width:'40%',
    textAlign:'center'

  },

});
