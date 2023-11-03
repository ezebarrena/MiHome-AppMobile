
import HomeRSUI from "./homeRSUI";
import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";
import postmyREAssets from "../../../api/myREassetsPOST.api";

export default function HomeRS() {
    const [propiedades, setPropiedades] = useState([])

    useEffect(() => {
        const busquedaPropiedades = async () => {

            try {
                const respuesta = await postmyREAssets("654032a899e75ce5e8e99510", 1)
                console.log(respuesta, 's');
                setPropiedades(respuesta);
            }
            catch (error) {
                console.error('Error al obtener la busqueda:', error);
            }



        };
        
        
        busquedaPropiedades()
    }, [setPropiedades])

    //console.log(propiedades, 'home js');
    return (

        <HomeRSUI listadoPropiedades={propiedades} />
    )
}
