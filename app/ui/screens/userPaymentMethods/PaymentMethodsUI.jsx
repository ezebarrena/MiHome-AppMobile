import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CreditCardPreview from "../../components/cards/CreditCardPreview";
import Button from "../../components/buttons/Button";

const PaymentMethodsUI = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Payment Methods</Text>
        <CreditCardPreview
            cardNumber="1234 5678 9012 3456"
            cardHolder="John Doe"
            cardExpiry="12/24"
            cardCvv="123"
            onPress={() => navigation.navigate("UserNewPaymentMethod")}
        />
        <Button
            title="Add Payment Method"
            onPress={() => navigation.navigate("UserNewPaymentMethod")}
        />
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
});

export default PaymentMethodsUI;