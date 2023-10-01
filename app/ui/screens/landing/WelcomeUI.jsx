import React from "react";
import { LinearGradient, ImageBackground, StyleSheet, View, Text } from "react-native";
import { useCallback } from "react";
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import fondo from "../../../assets/images/fondo.png"

SplashScreen.preventAutoHideAsync();

export default function WelcomeUI() {
    const [fontsLoaded] = useFonts({
        'Poppins': require('../../../assets/fonts/Poppins-BoldItalic.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded){
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded){
        return null
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['transparent','rgba(81,47,123,1)']} style={styles.background}>
                <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
                
                    <Text style={styles.logoText}>MiHome</Text>
                </ImageBackground> 
            </LinearGradient>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: '100%',
    },
    

    logoText: {
        textAlign: 'center',
        fontFamily: 'PoppinsBoldItalic',
        fontSize: 32,
        color: 'white',
    },
    
  });
