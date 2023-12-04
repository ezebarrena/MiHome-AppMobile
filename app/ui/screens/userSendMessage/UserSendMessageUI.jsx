import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/buttons/Button";
import CustomTextInput from "../../../ui/components/inputs/CustomTextInput";
import { useForm } from "../../../hooks/useForm";


const ReserveConfirmedUI = () => {
    const navigation = useNavigation();
    
    const { form, onChange } = useForm({
        title:"",
        message: ""
    });

    return (
        <View style={styles.container}>
            
            <View style={styles.contenedorHead}>
                <Text style={styles.textoHead}>Send message</Text>
            </View>
            <View>
                <Text style={styles.userNameText}>LLA PROpiedades</Text>
                <Text style={styles.mailText}>lla@zdm.com</Text>
            </View>
            <CustomTextInput
                    placeholder="Titulo del mensaje"
                    onChangeText={(value) => onChange(value, "title")}
                    value={form.title}
                />
            <CustomTextInput
                    placeholder="Cuerpo del mensaje"
                    onChangeText={(value) => onChange(value, "message")}
                    value={form.message}
                    alto={250}
                />
            <Button title={"Enviar Mensaje"}></Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 16,
        justifyContent: "space-evenly",
    },

    contenedorHead: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
      },
    
      textoHead: {
        marginTop: 30,    
        fontFamily: 'Poppins_700Bold',
        color: 'black',
        fontSize: Dimensions.get('window').width * 0.06,
      },
      

    
});

export default ReserveConfirmedUI;