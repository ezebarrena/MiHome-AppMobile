
import HomeRSUI from "./homeRSUI";
import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";

export default function HomeRS() {
    const [propiedades, setPropiedades] = useState([])
    useEffect(() => {
        const listado = [{ valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'venta' }, { valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquiler' }, { valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquiladas' }]
        setPropiedades(listado);

    }, [])

    console.log(propiedades, 'home js');
    return (

        <HomeRSUI listadoPropiedades={propiedades} />
    )
}
