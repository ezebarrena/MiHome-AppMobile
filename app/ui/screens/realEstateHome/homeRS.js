
import HomeRSUI from "./homeRSUI";
import React, { useState, useEffect } from "react";
import { getMyRealEstateAssets } from '../../../api/assetsAPI';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function HomeRS() {
    const [propiedades, setPropiedades] = useState([])
    useEffect(() => {
        const busquedaPropiedades = async () => {

            try {
                const bodyData={
                    realEstateName: AsyncStorage.getItem('realEstateId'),
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
