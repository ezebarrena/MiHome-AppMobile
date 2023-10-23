import React from "react";
import { ImageBackground, StyleSheet, View, Text, Pressable, Image, Dimensions } from "react-native";



//funcion que crea pantalla 
export default function CardBookedVisit({ fecha, titulo, margen }) {


    return (
        <View>

            <View style={{ width: 330, borderRadius: 10, elevation: 10, marginRight: margen }}>
                <Text>{fecha}</Text>
                <Text>{titulo}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    

});