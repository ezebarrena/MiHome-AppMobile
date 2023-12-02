import React, { useEffect, useState } from 'react';
import RealEstateEditProfileUI from './RealEstateEditProfileUI';
import { getRealEstateID } from '../../../api/realEstatesAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RealEstateEditProfile() {

    const [realEstate, setRealEstate] = useState([])

    useEffect(() => {
        const getRealEstate = async () => {
            const realEstateId = await AsyncStorage.getItem('realEstateId')
            try {
                const response = await getRealEstateID(realEstateId)
                setRealEstate(response.realEstates)
            } catch (error) {
                console.error('Error al obtener la busqueda:', error);
            }
        }
        getRealEstate()
    }, [])
    
    return (
        <RealEstateEditProfileUI params={realEstate} />
    )
}
