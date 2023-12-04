
import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";

import DetallePropiedadRSUI from './detallePropiedadRSUI';
import { getAssetById } from '../../../api/assetsAPI';
import { getMyRealEstateBookings } from '../../../api/assetsAPI';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ActivityIndicator } from 'react-native';

export default function DetallePropiedadRS({ route }) { //tendria que recibir id para hacer una busqueda en bd
    const { propiedadId } = route.params;

    const [propiedad, setPropiedad] = useState([])
    const [bookings, setBookings] = useState([])
    //const [botones, setBotones] = useState(false)

    useEffect(() => {
        let respuesta
        const busquedaPropiedades = async () => {

            try {

                respuesta = await getAssetById(propiedadId)
                console.log(respuesta.asset[0]);
                if (respuesta.status === 200) {
                    setPropiedad(respuesta.asset[0]);
                    if (respuesta.asset[0].state === 0) {
                        busquedaBookings()
                    }
                }



            }
            catch (error) {
                console.error('Error al obtener la busqduedass:', error);
            }




        };
        const busquedaBookings = async () => {
            const valor = await AsyncStorage.getItem('realEstateId')

            try {
                const bodyData = {
                    realEstateID: valor,
                }

                const respuesta = await getMyRealEstateBookings(bodyData)
                if (respuesta.status === 200) {
                    const filteredBookings = respuesta.bookings.find(booking => booking.asset === propiedadId);

                    setBookings(filteredBookings)
                }
            }
            catch (error) {
                console.error('Error al obtener la busqueda:', error);
            }

        };

        busquedaPropiedades()



        /* setPropiedad(detallePropiedad)
        analisisBtnera() */

    }, [])



    //console.log(propiedad, 'trass');
    return (
        <React.Fragment>
            {propiedad ? (
                <DetallePropiedadRSUI informacion={propiedad} booking={bookings} />
            ) : (
                <ActivityIndicator style={{ flex: 1 }} size="large" />
            )}
        </React.Fragment>



    )
}


