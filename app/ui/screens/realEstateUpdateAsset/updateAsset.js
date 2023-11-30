
import React, { useState, useEffect } from "react";
import UpdateAssetUI from './updateAssetUI';
import { getAssetById } from '../../../api/assetsAPI';
import i18n from '../../../assets/strings/I18n';
import { ActivityIndicator } from 'react-native';

export default function UpdateAsset({ route }) {
    const { propiedadId } = route.params;
    const [informacion, setInformacion] = useState(null);
    useEffect(() => {
        const busquedaPropiedades = async () => {
            try {
                const respuesta = await getAssetById(propiedadId);
                setInformacion(respuesta.asset[0]);
            } catch (error) {
                console.error('Error al obtener la busqdueddas:', error);
            }
        };


        busquedaPropiedades();


    }, []);
    return (
        <React.Fragment>
            {informacion ? (
                <UpdateAssetUI propiedad={informacion} />
            ) : (
                <ActivityIndicator style={{flex:1}} size="large" />
            )}
        </React.Fragment>
        
    )
}
