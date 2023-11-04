
import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";

import DetallePropiedadRSUI from './detallePropiedadRSUI';
import postIdAsset from '../../../api/idAssetPOST.api';

export default function DetallePropiedadRS({ route }) { //tendria que recibir id para hacer una busqueda en bd
    const [propiedad, setPropiedad] = useState([])
    const { propiedadId } = route.params;
    const [tipo, setTipo] = useState()
    //const [botones, setBotones] = useState(false)
    const necesitaBoton = ['venta', 'alquiler', 'pausada', 'alquilada']
    useEffect(() => {
        const busquedaPropiedades = async () => {

            try {

                const respuesta = await postIdAsset(propiedadId)
                setPropiedad(respuesta[0]);
            }
            catch (error) {
                console.error('Error al obtener la busquedass:', error);
            }



        };
        busquedaPropiedades()
        analisisBtnera()

    }, [setPropiedad])


    const analisisBtnera = () => {
        if (propiedad.transaction == 0 && propiedad.state == 1) {
            setTipo('venta')
        }
        else if (propiedad.transaction == 1 && propiedad.state == 1) {

            setTipo('alquiler')
        }
        else if (propiedad.transaction == 1 && propiedad.state == 0) {
            setTipo('alquilada')
        }
        else if (propiedad.state == 2) {
            setTipo('pausada')
        }
        else if (propiedad.transaction == 0 && propiedad.state == 0) {
            setTipo('vendida')
        }




    }
    let botones = false
    if (necesitaBoton.includes(tipo)) {
        botones = true
    }
    return (
        <DetallePropiedadRSUI mostrarBotones={botones} informacion={propiedad} tipo={tipo}/>
    )
}
