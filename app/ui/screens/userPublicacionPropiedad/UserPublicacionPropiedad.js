import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";
import UserPublicacionPropiedadUI from './UserPublicacionPropiedadUI';
import { getAssetById } from '../../../api/assetsAPI';
import { ActivityIndicator } from 'react-native';
import { getRealEstateID } from '../../../api/realEstatesAPI';

export default function PublicacionPropiedad({ route }) {
    const { propiedadId } = route.params;
    const [informacion, setInformacion] = useState(null);
    const [inmobiliaria, setInmboliaria] = useState()

    useEffect(() => {
        const busquedaPropiedades = async () => {
            try {
                const respuesta = await getAssetById(propiedadId);
                setInformacion(respuesta.asset[0]);
            } catch (error) {
                console.error('Error al obtener la busqueda:', error);
            }
        };


        busquedaPropiedades();
        

    }, []);
    useEffect(()=>{
        const busquedaRealEstate = async () => {
            let realEstateID = informacion.realEstateName
            console.log(realEstateID);
            try {
                const respuesta = await getRealEstateID(realEstateID);

                setInmboliaria(respuesta.realEstates)
            } catch (error) {
                console.error('Error al obtener la busqdueddass:', error);
            }
        };
        busquedaRealEstate()
    },[informacion])

    return (
        <React.Fragment>
            {informacion && inmobiliaria ? (
                <UserPublicacionPropiedadUI propiedad={informacion} inmobiliaria={inmobiliaria} />
            ) : (
                <ActivityIndicator style={{flex:1}} size="large" />
            )}
        </React.Fragment>
    );
}