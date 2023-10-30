import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';

const RealEstateAgendaUI = () => {
  // Estado para almacenar los datos de visitas
  const [items, setItems] = useState({});

  // Función para generar el objeto con todos los días del mes
  const generateAllDays = (year, month) => {
    const totalDays = new Date(year, month, 0).getDate();
    const allDays = {};
    for (let day = 1; day <= totalDays; day++) {
      const formattedDay = day < 10 ? `0${day}` : day.toString();
      const date = `${year}-${month < 10 ? `0${month}` : month}-${formattedDay}`;
      allDays[date] = [];
    }
    return allDays;
  };

  // Función para generar visitas ficticias
  const generateVisits = () => {
    const visitData = [
      {
        date: '2023-10-24',
        name: 'Juan Pérez',
        propertyType: 'Casa',
        address: '123 Calle Principal',
        timeSlot: 'Mañana',
      },
      {
        date: '2023-10-24',
        name: 'María Gómez',
        propertyType: 'Apartamento',
        address: '456 Avenida Secundaria',
        timeSlot: 'Tarde',
      },
      {
        date: '2023-10-25',
        name: 'Carlos Sánchez',
        propertyType: 'Apartamento',
        address: '654 Avenida Principal',
        timeSlot: 'Noche',
      },
    ];

    const visits = {};
    visitData.forEach((visit, index) => {
      const date = visit.date;
      if (!visits[date]) {
        visits[date] = [];
      }
      visits[date].push({
        name: visit.name,
        propertyType: visit.propertyType,
        address: visit.address,
        timeSlot: visit.timeSlot,
        key: String(index),
      });
    });
    return visits;
  };

  LocaleConfig.locales['es'] = {
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Setiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    today: 'Hoy',
  };
  LocaleConfig.defaultLocale = 'es';

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        // Establecer una fecha inicial predeterminada
        selected={'2023-10-24'}
        // Vista de día inicial
        firstDay={1}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.propertyType}</Text>
            <Text>{item.address}</Text>
            <Text>{item.timeSlot}</Text>
          </View>
        )}
        renderEmptyDate={() => (
          <View style={styles.emptyItem}>
            <Text>No hay visitas programadas para este día</Text>
          </View>
        )}
        loadItemsForMonth={(month) => {
          // Lógica para cargar elementos para el mes actual
          const year = month.year;
          const currentMonth = month.month;
          const newAllDays = generateAllDays(year, currentMonth);

          // Lógica para cargar visitas ficticias
          const visits = generateVisits();
          
          // Fusionar el nuevo objeto con el estado actual de items
          const updatedItems = { ...items, ...newAllDays, ...visits };
          
          // Actualizar el estado de items con el nuevo objeto fusionado
          setItems(updatedItems);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyItem: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});

export default RealEstateAgendaUI;
