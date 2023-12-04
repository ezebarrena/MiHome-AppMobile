import React from 'react';
import SearchResultsUI from './SearchResultsUI';
import i18n from '../../../assets/strings/I18n';
import { getAssets } from '../../../api/assetsAPI';
import { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from 'react-native';
//funcion que crea pantalla 
export default function SearchResults({ route }) {
    const { transaction, type, avanzada } = route.params;
    const [propiedades, setPropiedades] = useState()
    const [isPropiedadesLoading, setIsPropiedadesLoading] = useState(true);
    console.log(transaction, type);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const propiedadesData = await getAssets();
                if (propiedadesData.status === 200) {
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

        console.log(avanzada);
        /* if (avanzada === true) {
            let propiedadesFiltradasAvanzadas;
            const { filtros } = route.params
            console.log(filtros);
            if (transaction === "todo") {
                console.log('aca');
                propiedadesFiltradasAvanzadas = propiedades.filter(propiedad => {
                    if (propiedad.state !== undefined && propiedad.type !== undefined) {
                        return propiedad.state === 1 && propiedad.type === type;
                    }
                    // Verificar que la propiedad tenga el campo 'state', 'type' y otros campos necesarios

                });
                let filtro2
                Object.keys(filtros).forEach(filtro => {

                    // Filtrar por campos específicos hasta que aparezca "min_price", "max_price" o "coin"
                    if (filtro !== "min_price" && filtro !== "max_price") {
                        propiedadesFiltradasAvanzadas = propiedadesFiltradasAvanzadas.filter(propiedad => {
                            return propiedad[filtro] === filtros[filtro];
                        });
                    }

                });

                if (filtros.min_price !== undefined && filtros.min_price !== "") {
                    propiedadesFiltradasAvanzadas = propiedadesFiltradasAvanzadas.filter(propiedad => {
                        return propiedad.price >= parseFloat(filtros.min_price);
                    });
                }

                if (filtros.max_price !== undefined && filtros.max_price !== "") {
                    propiedadesFiltradasAvanzadas = propiedadesFiltradasAvanzadas.filter(propiedad => {
                        return propiedad.price <= parseFloat(filtros.max_price);
                    });
                }




            } else {
                propiedadesFiltradasAvanzadas = propiedades.filter(propiedad => {
                    if (propiedad.state !== undefined && propiedad.transaction !== undefined && propiedad.type !== undefined) {
                        return propiedad.state === 1 && propiedad.transaction === transaction && propiedad.type === type;
                    }
                    // Verificar que la propiedad tenga el campo 'state', 'transaction', 'type' y otros campos necesarios

                });

                Object.keys(filtros).forEach(filtro => {

                    // Filtrar por campos específicos hasta que aparezca "min_price", "max_price" o "coin"
                    if (filtro !== "min_price" && filtro !== "max_price") {
                        propiedadesFiltradasAvanzadas = propiedadesFiltradasAvanzadas.filter(propiedad => {
                            return propiedad[filtro] === filtros[filtro];
                        });
                    }

                });

                if (filtros.min_price !== undefined && filtros.min_price !== "") {
                    propiedadesFiltradasAvanzadas = propiedadesFiltradasAvanzadas.filter(propiedad => {
                        return propiedad.price >= parseFloat(filtros.min_price);
                    });
                }

                if (filtros.max_price !== undefined && filtros.max_price !== "") {
                    propiedadesFiltradasAvanzadas = propiedadesFiltradasAvanzadas.filter(propiedad => {
                        return propiedad.price <= parseFloat(filtros.max_price);
                    });
                }

            }
            return propiedadesFiltradasAvanzadas;
        } 
        if(avanzada ===false) {

        }*/
        let propiedadesFiltradas;
        if (transaction === "todo") {
            console.log('aca');
            propiedadesFiltradas = propiedades.filter(propiedad => {
                if (propiedad.state !== undefined && propiedad.type !== undefined) {
                    return propiedad.state === 1 && propiedad.type === type;
                }
                // Verificar que la propiedad tenga el campo 'state', 'type' y otros campos necesarios

            });
        } else {
            console.log('acas');
            propiedadesFiltradas = propiedades.filter(propiedad => {
                if (propiedad.state !== undefined && propiedad.transaction !== undefined && propiedad.type !== undefined) {
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

