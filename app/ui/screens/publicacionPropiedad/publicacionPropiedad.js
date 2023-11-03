import i18n from '../../../assets/strings/I18n';
import React, { useState, useEffect } from "react";

import PublicacionPropiedadUI from './publicacionPropiedadUI';

export default function PublicacionPropiedad({route}) { //tendria que recibir id para hacer una busqueda en bd
    const [propiedad, setPropiedad] = useState([])
    const { propiedadId} = route.params;
    //const necesitaBoton = ['venta', 'alquiler', 'pausada', 'alquilada']
    useEffect(() => {
        const listados = [
            {
                id: 1,
                precio: 'US$150,000',
                calle: 'Avenida Libertador',
                numero:123,
                piso:5,
                ambientes: 3,
                m2cubiertos: 200,
                m2descubiertos:150,
                margen: 5,
                tipo: 'venta',
                tieneExpensas: 'no',
                barrio:'Olivos',
                localidad:'Vicente Lopez',
                provincia:'Buenos Aires',
                geolocalizacion:'geolocalizacion x',
                tipoPropiedad:'Departamento',
                cantCuartos:2,
                nBaths:1,
                terraza:true,
                balcon:true,
                cochera:1,
                baulera:2,
                amenities:['SUM', "Pileta", "Parrilla", "Parque"],
                descripcion:"Hermoso departamento siutuado a metros del rio con increible vista.",
                inmobiliaria:'LLA Propiedades',
                expensas: '$15,000',
            },
            {
                id: 2,
                valor: '$100,000',
                ubicacion: 'Calle Rivadavia 456',
                ambientes: 2,
                metros: 150,
                margen: 2,
                tipo: 'alquiler',
                tieneExpensas: 'si',
                expensas: '$15,000'
            },
            {
                id: 3,
                valor: 'US$250,000',
                ubicacion: 'Calle San Martin 789',
                ambientes: 4,
                metros: 300,
                margen: 10,
                tipo: 'vendida',
                tieneExpensas: 'si',
                expensas: '$30,000',
                fechaVenta: '15/05/2023'
            },
            {
                id: 4,
                valor: '$180,000',
                ubicacion: 'Avenida Belgrano 987',
                ambientes: 2,
                metros: 180,
                margen: 3,
                tipo: 'alquiler',
                tieneExpensas: 'no'
            },
            {
                id: 5,
                valor: 'US$280,000',
                ubicacion: 'Calle Sarmiento 234',
                ambientes: 5,
                metros: 400,
                margen: 15,
                tipo: 'venta',
                tieneExpensas: 'no'
            },
            {
                id: 6,
                valor: '$220,000',
                ubicacion: 'Avenida 9 de Julio 567',
                ambientes: 3,
                metros: 220,
                margen: 6,
                tipo: 'alquiler',
                tieneExpensas: 'si',
                expensas: '$25,000'
            },
            {
                id: 7,
                valor: 'US$320,000',
                ubicacion: 'Calle Buenos Aires 345',
                ambientes: 4,
                metros: 350,
                margen: 12,
                tipo: 'venta',
                tieneExpensas: 'si',
                expensas: '$40,000'
            },
            {
                id: 8,
                valor: '$140,000',
                ubicacion: 'Calle Defensa 678',
                ambientes: 2,
                metros: 160,
                margen: 1,
                tipo: 'alquiler',
                tieneExpensas: 'si',
                expensas: '$10,000'
            },
            {
                id: 9,
                valor: 'US$210,000',
                ubicacion: 'Avenida Corrientes 456',
                ambientes: 3,
                metros: 250,
                margen: 8,
                tipo: 'vendida',
                tieneExpensas: 'no'
            },
            {
                id: 10,
                valor: '$160,000',
                ubicacion: 'Calle Alvear 789',
                ambientes: 2,
                metros: 170,
                margen: 4,
                tipo: 'alquiler',
                tieneExpensas: 'no'
            },
            {
                id: 11,
                valor: '$260,000',
                ubicacion: 'Calle Urquiza 123',
                ambientes: 3,
                metros: 180,
                margen: 6,
                tipo: 'alquilada',
                tieneExpensas: 'si',
                expensas: '$20,000',
                usuario: 'Luis Rodriguez',
                fechaDesde: '10/08/2023',
                fechaHasta: '10/08/2026'
            },
            {
                id: 12,
                valor: 'US$280,000',
                ubicacion: 'Calle Belgrano 567',
                ambientes: 4,
                metros: 250,
                margen: 8,
                tipo: 'vendida',
                tieneExpensas: 'si',
                expensas: '$45,000',
                fechaVenta: '28/06/2023'
            },
            {
                id: 13,
                valor: '$180,000',
                ubicacion: 'Calle San Martin 789',
                ambientes: 2,
                metros: 150,
                margen: 4,
                tipo: 'alquilada',
                tieneExpensas: 'si',
                expensas: '$15,000',
                usuario: 'Laura Pérez',
                fechaDesde: '12/11/2023',
                fechaHasta: '12/11/2025'
            }


        ]
        const propiedadEncontrada = listados.find(propiedad => propiedad.id === 1);
        console.log(JSON.stringify(propiedadId));
        const listado = propiedadEncontrada
        setPropiedad(listado);

    }, [setPropiedad])

/*     let botones = false
    if (necesitaBoton.includes(propiedad.tipo)) {
        botones = true
    } */

    return (
        <PublicacionPropiedadUI propiedad={propiedad}/>
    )
}