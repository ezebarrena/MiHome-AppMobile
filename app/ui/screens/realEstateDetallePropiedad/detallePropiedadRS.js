
import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";

import DetallePropiedadRSUI from './detallePropiedadRSUI';
import { getAssetById } from '../../../api/assetsAPI';

export default function DetallePropiedadRS({ route }) { //tendria que recibir id para hacer una busqueda en bd
    const { propiedadId } = route.params;

    const [propiedad, setPropiedad] = useState([])
    //const [botones, setBotones] = useState(false)
    
    useEffect(() => {
        let respuesta
        const busquedaPropiedades = async () => {

            try {

                respuesta = await getAssetById(propiedadId)
                setPropiedad(respuesta.asset[0]);

   
            }
            catch (error) {
                console.error('Error al obtener la busqduedass:', error);
            }




        };

        busquedaPropiedades()
 

        /* setPropiedad(detallePropiedad)
        analisisBtnera() */

    }, [])

    

    //console.log(propiedad, 'trass');
    return (

        <DetallePropiedadRSUI informacion={propiedad} />


    )
}


