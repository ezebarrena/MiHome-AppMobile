import { MultipleSelectList } from 'react-native-dropdown-select-list'
import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

const ChoiceMultipleInput = ({data, value, onValueSelect}) => {

  const [selected, setSelected] = React.useState([]);

  const handleValueSelect = (val) => {
    setSelected(val);
    onValueSelect(val); // Llama a la función proporcionada por el componente padre
  };
  return(
    <MultipleSelectList 
        //setSelected={(val) => setSelected(val)} 
        setSelected={handleValueSelect} 
        boxStyles={styles.input}
        data={data} 
        save="value"
        onSelect={() => alert(selected)} 
    />
  )

};

const styles = StyleSheet.create({
    input: {
      backgroundColor: "rgba(250, 250, 250, 0.9)", // RGBA con 90% de transparencia
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "black",
      margin: 14,
      overflow: "hidden",
      marginVertical: 10,
      textAlign: "center", // Centra el texto del placeholder
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
  

export default ChoiceMultipleInput;