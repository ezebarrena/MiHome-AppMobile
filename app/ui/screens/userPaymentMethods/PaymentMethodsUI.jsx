import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CreditCardPreview from "../../components/cards/CreditCardPreview";
import Button from "../../components/buttons/Button";
import ConfirmationModal from "../../components/modals/ConfirmationModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deletePaymentMethod, getPaymentMethods } from "../../../api/usersAPI";

const PaymentMethodsUI = () => {
    const navigation = useNavigation();
    const [isConfirmationModalVisible, setIsConfirmationModalVisible] = React.useState(false);
    const [paymentMethods, setPaymentMethods] = useState([]);

    useEffect(() => {
        const getPaymentMethodsFromAPI = async () => {
            const userId = await AsyncStorage.getItem('realEstateId')
            const paymentMethodsFromAPI = await getPaymentMethods(userId);
            console.log("Payment methods from API: ", paymentMethodsFromAPI);
            setPaymentMethods(paymentMethodsFromAPI);
        };
        getPaymentMethodsFromAPI();
    }, []);
    
    // const paymentMethods = [
    //     {
    //         id: 1,
    //         cardNumber: "5555555555555555",
    //         cardExpiration: "12/25",
    //         cardBank: "SANTANDER",
    //     },
    //     {
    //         id: 2,
    //         cardNumber: "4444444444444444",
    //         cardExpiration: "12/25",
    //         cardBank: "GALICIA",
    //     },
    //     {
    //         id: 3,
    //         cardNumber: "5555333333333333",
    //         cardExpiration: "12/25",
    //         cardBank: "BBVA",
    //     },
    //     {
    //         id: 4,
    //         cardNumber: "5555555555555555",
    //         cardExpiration: "12/25",
    //         cardBank: "SANTANDER",
    //     },
    //     {
    //         id: 5,
    //         cardNumber: "4444444444444444",
    //         cardExpiration: "12/25",
    //         cardBank: "GALICIA",
    //     },
    //     {
    //         id: 6,
    //         cardNumber: "5555333333333333",
    //         cardExpiration: "12/25",
    //         cardBank: "BBVA",
    //     },
    //     {
    //         id: 7,
    //         cardNumber: "5555555555555555",
    //         cardExpiration: "12/25",
    //         cardBank: "SANTANDER",
    //     },
    //     {
    //         id: 8,
    //         cardNumber: "4444444444444444",
    //         cardExpiration: "12/25",
    //         cardBank: "GALICIA",
    //     },
    //     {
    //         id: 9,
    //         cardNumber: "5555333333333333",
    //         cardExpiration: "12/25",
    //         cardBank: "BBVA",
    //     },
    //     {
    //         id: 10,
    //         cardNumber: "5555555555555555",
    //         cardExpiration: "12/25",
    //         cardBank: "SANTANDER",
    //     },
    //     {
    //         id: 11,
    //         cardNumber: "4444444444444444",
    //         cardExpiration: "12/25",
    //         cardBank: "GALICIA",
    //     },
    //     {
    //         id: 12,
    //         cardNumber: "5555333333333333",
    //         cardExpiration: "12/25",
    //         cardBank: "BBVA",
    //     },
    // ];

    const onPressTrashIcon = (id) => {
        console.log("Trash icon pressed for card with id: ", id);
        setIsConfirmationModalVisible(true);
    };

    const onAccept = () => {
        console.log("Accepted");
        setIsConfirmationModalVisible(false);
    };

    const onDeny = () => {
        console.log("Denied");
        setIsConfirmationModalVisible(false);
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
                        showTrashIcon={true}
                        onPressTrashIcon={() => onPressTrashIcon(paymentMethod.id)}
                    />
                ))}
            </ScrollView>
            <Button
                title="Agregar método de pago"
                onPress={() => navigation.navigate("UserNewPaymentMethod")}
            />
            <ConfirmationModal
                message="¿Está seguro que desea eliminar este método de pago?"
                isVisible={isConfirmationModalVisible}
                onAccept={onAccept}
                onDeny={onDeny}
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