import { SelectList } from 'react-native-dropdown-select-list'
import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

const ChoiceInput = ({data,value}) => {

  const [selected, setSelected] = React.useState("");
  
  return(
    <SelectList 
        boxStyles={styles.input}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        value={value}
        save="value"
    />
  )

};

const styles = StyleSheet.create({
    input: {
      backgroundColor: "rgba(250, 250, 250, 0.9)", // RGBA con 90% de transparencia
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "black",
      marginHorizontal: 14,
      overflow: "hidden",
      marginVertical: 10,
      textAlign: "left", // Centra el texto del placeholder
      ...Platform.select({
        ios: {
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowColor: "black",
        },
        android: {
          elevation: 2, // Esta propiedad agrega sombra en Android
        },
      }),
    },
  });
  

export default ChoiceInput;
