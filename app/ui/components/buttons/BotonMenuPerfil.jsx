import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import i18n from '../../../assets/strings/I18n';
import Theme from "../../styles/Theme";
import { useFonts, Poppins_700Bold_Italic, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";


const Boton = ({ iconSource, title, onPress }) => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold_Italic,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.buttonContent}>
        <MaterialIcons name={iconSource} size={28} style={styles.icon} color={Theme.colors.SECONDARY} />
        {/* <Image source={iconSource} style={styles.icon} /> */}
        <Text style={styles.title}>{i18n.t(`REprofile.${title}`)}</Text>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row', // Alinea los elementos horizontalmente
    alignItems: 'center', // Centra verticalmente los elementos
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinea los elementos a la izquierda
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: Dimensions.get("window").width * 0.04,

  },
  icon: {
    marginRight: 5,
  }
});

export default Boton;