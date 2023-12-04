import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CreditCard from "../../components/cards/CreditCard";
import CustomTextInput from "../../components/inputs/CustomTextInput";
import ChoiceInput from "../../components/inputs/ChoiceInput";
import { useForm } from "../../../hooks/useForm";
import Button from "../../components/buttons/Button";
import { addPaymentMethod } from "../../../api/usersAPI";

const NewPaymentMethodUI = () => {
    const navigation = useNavigation();

    const { form, onChange } = useForm({
        cardNumber: "",
        cardHolder: "",
        cardExpiration: "",
        cardCvv: "",
        cardBank: "",
    });

    const limitInput = (value, fieldName, maxLength) => {
        const truncatedValue = value.slice(0, maxLength);
        onChange(truncatedValue, fieldName);
    };

    const limitExpirationInput = (value, fieldName) => {
        const numericValue = value.replace(/\D/g, '').slice(0, 4);

        if (numericValue.length === 3) {
            const formattedValue = numericValue.slice(0, 2) + '/' + numericValue.slice(2);
            onChange(formattedValue, fieldName);
        } else if (numericValue.length === 4) {
            const formattedValue = numericValue.replace(/^(\d{2})/, '$1/');
            onChange(formattedValue, fieldName);
        } else {
            onChange(numericValue, fieldName);
        }
    };

    return (
        <View style={styles.container}>
            <CreditCard
                cardNumber={form.cardNumber}
                cardHolder={form.cardHolder}
                cardExpiration={form.cardExpiration}
                cardCvv={form.cardCvv}
                cardBank={form.cardBank}
            />
            <View style={styles.formContainer}>
                <CustomTextInput
                    placeholder="Número de tarjeta"
                    onChangeText={(value) => limitInput(value, "cardNumber", 16)}
                    value={form.cardNumber}
                    keyboardType="numeric"
                />
                <CustomTextInput
                    placeholder="Titular"
                    onChangeText={(value) => limitInput(value, "cardHolder", 20)}
                    value={form.cardHolder}
                />
                <CustomTextInput
                    placeholder="Vencimiento"
                    onChangeText={(value) => limitExpirationInput(value, "cardExpiration")}
                    value={form.cardExpiration}
                    keyboardType="numeric"
                />
                <CustomTextInput
                    placeholder="CVV"
                    onChangeText={(value) => limitInput(value, "cardCvv", 3)}
                    value={form.cardCvv}
                    keyboardType="numeric"
                />
                <ChoiceInput
                    data={[
                        { value: "SANTANDER" },
                        { value: "GALICIA" },
                        { value: "BBVA" },
                    ]}
                    onValueSelect={(value) => onChange(value, "cardBank")}
                />
                <Button
                    title="Guardar"
                    onPress={() => navigation.navigate("UserPaymentMethods")}
                    size="medium"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        marginTop: 20,
        alignItems: "center",
    },
    formContainer: {
        flex: 1,
        width: 328,
    },
});

export default NewPaymentMethodUI;
