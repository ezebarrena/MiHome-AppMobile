
import HomeRSUI from "./homeRSUI";
import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";
import postmyREAssets from "../../../api/myREassetsPOST.api";

export default function HomeRS() {
    const [propiedades, setPropiedades] = useState([])
    useEffect(() => {
        const busquedaPropiedades = async () => {

            try {
                const respuesta = await postmyREAssets("654032a899e75ce5e8e99510", "", "")

                setPropiedades(respuesta);
            }
            catch (error) {
                console.error('Error al obtener la busqueda:', error);
            }



        };


        busquedaPropiedades()
    }, [setPropiedades])

    //console.log(propiedades, 'home js');
    const cargarDatos = async () => {
        try {
            const respuesta = await postmyREAssets("654032a899e75ce5e8e99510", "", "")

            setPropiedades(respuesta);
        }
        catch (error) {
            console.error('Error al obtener la busqueda:', error);
        }
    }
    return (

        <HomeRSUI listadoPropiedades={propiedades} />
    )
}
