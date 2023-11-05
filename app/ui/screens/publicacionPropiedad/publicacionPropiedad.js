import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";
import PublicacionPropiedadUI from './publicacionPropiedadUI';
import { getAssetById } from '../../../api/assetsAPI';
import { ActivityIndicator } from 'react-native';

export default function PublicacionPropiedad({ route }) {
    const { propiedadId } = route.params;
    const [informacion, setInformacion] = useState(null);

    useEffect(() => {
        const busquedaPropiedades = async () => {
            try {
                const respuesta = await getAssetById(propiedadId);
                setInformacion(respuesta.asset[0]);
            } catch (error) {
                console.error('Error al obtener la busqdueddass:', error);
            }
        };

        busquedaPropiedades();
    }, []);

    return (
        <React.Fragment>
            {informacion ? (
                <PublicacionPropiedadUI propiedad={informacion} />
            ) : (
                <ActivityIndicator size="large" />
            )}
        </React.Fragment>
    );
}