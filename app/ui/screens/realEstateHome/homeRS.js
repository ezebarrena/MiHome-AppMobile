
import HomeRSUI from "./homeRSUI";
import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";

export default function HomeRS() {
    const [propiedades, setPropiedades] = useState([])
    useEffect(() => {
        const listado = [{ id: 1, valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'venta' }, { id: 2, valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquiler' }, { id: 3, valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquilada' }]
        setPropiedades(listado);

    }, [setPropiedades])

    //console.log(propiedades, 'home js');
    return (

        <HomeRSUI listadoPropiedades={propiedades} />
    )
}
