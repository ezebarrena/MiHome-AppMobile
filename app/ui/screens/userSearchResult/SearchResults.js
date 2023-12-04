import React from 'react';
import SearchResultsUI from './SearchResultsUI';
import i18n from '../../../assets/strings/I18n';
import { getAssets } from '../../../api/assetsAPI';
import { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from 'react-native';
//funcion que crea pantalla 
export default function SearchResults({ route }) {
    const { transaction, type } = route.params;
    const [propiedades, setPropiedades] = useState()
    const [isPropiedadesLoading, setIsPropiedadesLoading] = useState(true);
    console.log(transaction, type);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const propiedadesData = await getAssets();
                if(propiedadesData.status === 200){
                    const propiedadesFiltradas = filtrarPropiedades(propiedadesData.asset);
                    setPropiedades(propiedadesFiltradas);
                    setIsPropiedadesLoading(false);
                }

            } catch (error) {
                console.error('Error fetching assets', error);
            }
        };

        fetchData();
    }, [route.params]);
    const filtrarPropiedades = (propiedades) => {
        let propiedadesFiltradas;
    
        if (transaction === "todo") {
            console.log('aca');
            propiedadesFiltradas = propiedades.filter(propiedad => {
                if(propiedad.state !== undefined && propiedad.type !== undefined){
                    return propiedad.state === 1 && propiedad.type === type;
                }
                // Verificar que la propiedad tenga el campo 'state', 'type' y otros campos necesarios
                
            });
        } else {
            propiedadesFiltradas = propiedades.filter(propiedad => {
                if(propiedad.state !== undefined && propiedad.transaction !== undefined && propiedad.type !== undefined){
                    return propiedad.state === 1 && propiedad.transaction === transaction && propiedad.type === type;
                }
                // Verificar que la propiedad tenga el campo 'state', 'transaction', 'type' y otros campos necesarios
                
            });
        }
    
        return propiedadesFiltradas;
    };
    return (
        <React.Fragment>
            {propiedades ? <SearchResultsUI propiedades={propiedades} /> : <ActivityIndicator style={{ flex: 1 }} size="large" />}
        </React.Fragment>


    )
}

