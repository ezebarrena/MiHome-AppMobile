import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";

import PublicacionPropiedadUI from './publicacionPropiedadUI';

export default function PublicacionPropiedad({ route }) { //tendria que recibir id para hacer una busqueda en bd
    const { propiedadId } = route.params;

    const [informacion, setInformacion] = useState([])
    //const [botones, setBotones] = useState(false)
    
    useEffect(() => {
        const busquedaPropiedades = async () => {

            try {

                const respuesta = await postIdAsset(propiedadId)

                setInformacion(respuesta[0]);

   
            }
            catch (error) {
                console.error('Error al obtener la busqduedass:', error);
            }

        };

        busquedaPropiedades()


    }, [])

    

    //console.log(propiedad, 'trass');
    return (

        <PublicacionPropiedadUI propiedad={informacion} />


    )
}