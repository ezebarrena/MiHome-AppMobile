import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/buttons/Button";

const ReserveConfirmedUI = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../../assets/images/purpleCheck.png")} />
            <Text style={styles.title}>¡Reserva confirmada!</Text>
            <Button
                title="Volver al inicio"
                onPress={() => navigation.navigate("LandingStack")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 16,
        justifyContent: "space-evenly",
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
    },
});

export default ReserveConfirmedUI;