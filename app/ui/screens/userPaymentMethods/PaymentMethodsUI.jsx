import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CreditCardPreview from "../../components/cards/CreditCardPreview";
import Button from "../../components/buttons/Button";

const PaymentMethodsUI = () => {
    const navigation = useNavigation();
    
    const paymentMethods = [
        {
            id: 1,
            cardNumber: "5555555555555555",
            cardExpiration: "12/25",
            cardBank: "SANTANDER",
        },
        {
            id: 2,
            cardNumber: "4444444444444444",
            cardExpiration: "12/25",
            cardBank: "GALICIA",
        },
        {
            id: 3,
            cardNumber: "5555333333333333",
            cardExpiration: "12/25",
            cardBank: "BBVA",
        },
        {
            id: 4,
            cardNumber: "5555555555555555",
            cardExpiration: "12/25",
            cardBank: "SANTANDER",
        },
        {
            id: 5,
            cardNumber: "4444444444444444",
            cardExpiration: "12/25",
            cardBank: "GALICIA",
        },
        {
            id: 6,
            cardNumber: "5555333333333333",
            cardExpiration: "12/25",
            cardBank: "BBVA",
        },
        {
            id: 7,
            cardNumber: "5555555555555555",
            cardExpiration: "12/25",
            cardBank: "SANTANDER",
        },
        {
            id: 8,
            cardNumber: "4444444444444444",
            cardExpiration: "12/25",
            cardBank: "GALICIA",
        },
        {
            id: 9,
            cardNumber: "5555333333333333",
            cardExpiration: "12/25",
            cardBank: "BBVA",
        },
        {
            id: 10,
            cardNumber: "5555555555555555",
            cardExpiration: "12/25",
            cardBank: "SANTANDER",
        },
        {
            id: 11,
            cardNumber: "4444444444444444",
            cardExpiration: "12/25",
            cardBank: "GALICIA",
        },
        {
            id: 12,
            cardNumber: "5555333333333333",
            cardExpiration: "12/25",
            cardBank: "BBVA",
        },
    ];

    const onPressTrashIcon = (id) => {
        console.log("Trash icon pressed for card with id: ", id);
    };
    
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.cardsContainer}>
                {paymentMethods.map((paymentMethod) => (
                    <CreditCardPreview
                        key={paymentMethod.id}
                        cardNumber={paymentMethod.cardNumber}
                        cardExpiration={paymentMethod.cardExpiration}
                        cardBank={paymentMethod.cardBank}
                        onPressTrashIcon={() => onPressTrashIcon(paymentMethod.id)}
                    />
                ))}
            </ScrollView>
            <Button
                title="Agregar método de pago"
                onPress={() => navigation.navigate("UserNewPaymentMethod")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    cardsContainer: {
        alignItems: "center",
    },
});

export default PaymentMethodsUI;