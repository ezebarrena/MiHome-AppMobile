import { MultipleSelectList } from 'react-native-dropdown-select-list'
import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

const ChoiceMultipleInput = ({ data, value, onValueSelect, defaultOption }) => {

  const [selected, setSelected] = React.useState([]);

  const handleValueSelect = (val) => {
    console.log(val, 'vla');
    setSelected(val);
    onValueSelect(val); // Llama a la función proporcionada por el componente padre
  };

  return (
    <MultipleSelectList
      defaultOption={defaultOption}
      setSelected={(val) => setSelected(val)}
      onSelect={() => handleValueSelect(selected)}
      boxStyles={styles.input}
      data={data}
      value={value}
      save="key"
    //onSelect={() => alert(selected)} 
    />
  )

};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white", // RGBA con 90% de transparencia
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 10,
    paddingLeft:20,
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


export default ChoiceMultipleInput;