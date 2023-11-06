import React from 'react';
import RealEstateProfileUI from './RealEstateProfileUI';
import i18n from '../../../assets/strings/I18n';

import { getReById } from '../../../api/realEstatesAPI';


//funcion que crea pantalla 
/*
export default function RealEstateProfile({route}) {
    const { realEstateId } = route.params;

    const [realEstate, setRealEstate] = useState([])

    useEffect(()=> {
        let respuesta
        const busquedaRealEstate = async => {
            try {
                respuesta = await getReById(realEstateId)
                setRealEstate(respuesta.asset[0]);
            } catch (error) {
                console.error('Error al obtener RealEstate')
            }
        }
    },[])

    busquedaRealEstate()
    
    return (
        <RealEstateProfileUI realEstate ={realEstate} />
    )
}

*/