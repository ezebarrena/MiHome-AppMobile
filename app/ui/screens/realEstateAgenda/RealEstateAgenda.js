import React, { useState, useEffect } from 'react';
import RealEstateAgendaUI from './RealEstateAgendaUI';
import i18n from '../../../assets/strings/I18n';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMyRealEstateBookings } from '../../../api/assetsAPI';

export default function RealEstateAgenda() {
    const [bookings, setBookings] = useState([])
    useFocusEffect(
        React.useCallback(() => {
            const busquedaBookings = async () => {
                const valor = await AsyncStorage.getItem('realEstateId')

                try {
                    const bodyData = {
                        realEstateID: valor,
                    }

                    const respuesta = await getMyRealEstateBookings(bodyData)
                    setBookings(respuesta.bookings);
                }
                catch (error) {
                    console.error('Error al obtener la busqueda:', error);
                }

            };


            busquedaBookings()
        }, [setBookings])
    );
    return (
        <RealEstateAgendaUI bookings={bookings} />
    )
}

