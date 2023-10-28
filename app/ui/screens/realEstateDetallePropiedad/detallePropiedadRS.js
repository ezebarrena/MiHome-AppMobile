
import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";

import DetallePropiedadRSUI from './detallePropiedadRSUI';

export default function DetallePropiedadRS(propiedadeTest) { //tendria que recibir id para hacer una busqueda en bd
    const [propiedad, setPropiedad] = useState([])

    //const [botones, setBotones] = useState(false)
    const necesitaBoton = ['venta', 'alquiler', 'pausada', 'alquilada']
    useEffect(() => {
        const listado = { valor: 'US$175.500', ubicacion: 'calle mitre 123', ambientes: 2, metros: 168, margen: 0, tipo: 'alquilada', expensas: '$35.000', tieneExpensas: 'si', usuario: 'Alberto Massa', fechaVenta: '21/10/2023', fechaDesde: '22/09/2022', fechaHasta: '22/09/2025' }
        setPropiedad(listado);

    }, [setPropiedad])

    let botones = false
    if (necesitaBoton.includes(propiedad.tipo)) {
        botones = true
    }


    return (
        <DetallePropiedadRSUI mostrarBotones={botones} informacion={propiedad} />
    )
}
