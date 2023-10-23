
import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";

import DetallePropiedadRSUI from './detallePropiedadRSUI';

export default function DetallePropiedadRS() { //tendria que recibir id para hacer una busqueda en bd
    const [propiedad, setPropiedad] = useState([])
    //const [botones, setBotones] = useState(false)
    const necesitaBoton = ['venta', 'alquiler', 'pausada']
    useEffect(() => {
        const listado = { valor: 'US$360.000', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'venta' }
        setPropiedad(listado);

    }, [setPropiedad])

    let botones = new Boolean(false)
    if (necesitaBoton.includes(propiedad.tipo)) {
        botones = true
    }
    return (
        <DetallePropiedadRSUI mostrarBotones={true} />
    )
}
