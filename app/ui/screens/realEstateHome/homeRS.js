
import HomeRSUI from "./homeRSUI";
import React, { useState, useEffect } from "react";
import { getMyRealEstateAssets } from '../../../api/assetsAPI';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';



export default function HomeRS() {
    const [propiedades, setPropiedades] = useState([])
    /* useEffect(() => {
        const busquedaPropiedades = async () => {
            const valor = await AsyncStorage.getItem('realEstateId')

            try {
                const bodyData = {
                    realEstateName: valor,
                    state: '',
                    transaction: ''
                }

                const respuesta = await getMyRealEstateAssets(bodyData)


                setPropiedades(respuesta);
            }
            catch (error) {
                console.error('Error al obtener la busqueda:', error);
            }



        };


        busquedaPropiedades()
    }, [setPropiedades]) */
    useFocusEffect(
        React.useCallback(() => {
            const busquedaPropiedades = async () => {
                const valor = await AsyncStorage.getItem('realEstateId')
    
                try {
                    const bodyData = {
                        realEstateName: valor,
                        state: '',
                        transaction: ''
                    }
    
                    const respuesta = await getMyRealEstateAssets(bodyData)
    
    
                    setPropiedades(respuesta);
                }
                catch (error) {
                    console.error('Error al obtener la busqueda:', error);
                }
    
    
    
            };
    
    
            busquedaPropiedades()
        }, [setPropiedades])
    );
    return (

        <HomeRSUI listadoPropiedades={propiedades} />
    )
}


