import React from 'react'
import { View, StyleSheet} from 'react-native'
import Calendar from 'react-native-calendars/src/calendar';

export default function RealEstateAgendaUI () {
  return (
    <View >
      <View>
        <Calendar style={styles.calendario} onDayPress={day => {console.log('selected day', day);}} markedDates={{
        '2023-10-01': {selected: true, marked: true, selectedColor: 'blue'},
        '2023-10-02': {selected: true, marked: true},
        '2023-10-03': {selected: true, marked: true, selectedColor: 'blue'}
        }}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  
})