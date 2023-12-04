import React, { useEffect, useState, useCallback } from "react";
import { View, ScrollView, StyleSheet, Text, RefreshControl } from "react-native";
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
    const [paymentMethodtoDelete, setPaymentMethodToDelete] = useState(null);
    const [isPaymentMethodDeleted, setIsPaymentMethodDeleted] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getPaymentMethodsFromAPI().finally(() => setRefreshing(false));
    }, []);

    const getPaymentMethodsFromAPI = async () => {
        const userId = await AsyncStorage.getItem('userId');
        const paymentMethodsFromAPI = await getPaymentMethods(userId);
        console.log("Payment methods from API: ", paymentMethodsFromAPI);
        setPaymentMethods(paymentMethodsFromAPI);
        if (isPaymentMethodDeleted) {
            setIsPaymentMethodDeleted(false);
        }
    };

    useEffect(() => {
        getPaymentMethodsFromAPI();
    }, [isPaymentMethodDeleted]);

    const onPressTrashIcon = (paymentMethod) => {
        console.log("Trash icon pressed for card with id: ", paymentMethod);
        setPaymentMethodToDelete(paymentMethod);
        setIsConfirmationModalVisible(true);
    };

    const onAccept = () => {
        const deletePaymentMethodFromAPI = async () => {
            const userId = await AsyncStorage.getItem('userId');
            const paymentMethod = {
                _id: paymentMethodtoDelete._id,
                cardNumber: Number(paymentMethodtoDelete.cardNumber),
                expiration: paymentMethodtoDelete.expiration,
                bank: paymentMethodtoDelete.bank,
                ccv: Number(paymentMethodtoDelete.ccv),
                name: paymentMethodtoDelete.name,
            };
            console.log("User id: ", userId);
            console.log("Payment methods to delete: ", paymentMethod);
            const response = await deletePaymentMethod(userId, paymentMethod);
            console.log("Response from API: ", response);
            setIsPaymentMethodDeleted(true);
        };
        deletePaymentMethodFromAPI();
        setIsConfirmationModalVisible(false);
    };

    const onDeny = () => {
        console.log("Denied");
        setIsConfirmationModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.cardsContainer}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {paymentMethods && paymentMethods.map((paymentMethod) => (
                    <CreditCardPreview
                        key={paymentMethod._id}
                        cardNumber={paymentMethod.cardNumber.toString()}
                        cardExpiration={paymentMethod.expiration}
                        cardBank={paymentMethod.bank}
                        showTrashIcon={true}
                        onPressTrashIcon={() => onPressTrashIcon(paymentMethod)}
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
};

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
