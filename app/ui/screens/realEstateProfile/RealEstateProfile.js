import React, { useEffect, useState } from 'react';
import RealEstateProfileUI from './RealEstateProfileUI';
import { getRealEstateID } from '../../../api/realEstatesAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RealEstateProfile() {

    const [realEstate, setRealEstate] = useState([])

    useEffect(() => {
        const getRealEstate = async () => {
            const realEstateId = await AsyncStorage.getItem('realEstateId')
            try {
                const response = await getRealEstateID(realEstateId)
                setRealEstate(response)
            } catch (error) {
                console.error('Error al obtener la busqueda:', error);
            }
        }
        getRealEstate()
    }, [])
    
    return (
        <RealEstateProfileUI realEstate ={realEstate} />
    )
}
