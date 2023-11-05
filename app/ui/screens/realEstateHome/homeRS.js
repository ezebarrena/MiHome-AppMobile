
import HomeRSUI from "./homeRSUI";
import React, { useState, useEffect } from "react";
import { getMyRealEstateAssets } from '../../../api/assetsAPI';


export default function HomeRS() {
    const [propiedades, setPropiedades] = useState([])
    useEffect(() => {
        const busquedaPropiedades = async () => {

            try {
                const bodyData={
                    realEstateName: "6547ec1614f01fe26599736b",
                    state:'',
                    transaction:''
                }

                const respuesta = await getMyRealEstateAssets(bodyData)
                

                setPropiedades(respuesta);
            }
            catch (error) {
                console.error('Error al obtener la busqueda:', error);
            }



        };


        busquedaPropiedades()
    }, [setPropiedades])
    return (

        <HomeRSUI listadoPropiedades={propiedades} />
    )
}
