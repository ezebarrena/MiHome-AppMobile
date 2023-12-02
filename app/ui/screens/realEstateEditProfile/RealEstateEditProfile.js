import React, { useEffect, useState } from 'react';
import RealEstateEditProfileUI from './RealEstateEditProfileUI';
import { getRealEstateID } from '../../../api/realEstatesAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function RealEstateEditProfile() {

    const [realEstate, setRealEstate] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const getRealEstate = async () => {
            const realEstateId = await AsyncStorage.getItem('realEstateId')
            try {
                const response = await getRealEstateID(realEstateId)
                console.log(response);
                if (response.status === 200) {
                    setRealEstate(response.realEstates)
                    setCargando(false)
                }

            } catch (error) {
                console.error('Error al obtener la busqueda:', error);
            }
        }
        getRealEstate()
    }, [])

    return (
        <React.Fragment>
            {cargando ? <ActivityIndicator style={{ flex: 1 }} size="large" /> : <RealEstateEditProfileUI params={realEstate} />}

        </React.Fragment>




    )
}
