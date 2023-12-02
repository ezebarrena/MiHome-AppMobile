import { SelectList } from 'react-native-dropdown-select-list'
import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

const ChoiceInput = ({ data, value, onValueSelect, defaultOption }) => {

  const [selected, setSelected] = React.useState("");

  const handleValueSelect = (val) => {
    console.log(val);
    setSelected(val);
    onValueSelect(val); // Llama a la función proporcionada por el componente padre
  };
  return (
    <SelectList 
      boxStyles={styles.input}
      setSelected={handleValueSelect} 
      data={data} 
      value={value}
      save="value"
      defaultOption={defaultOption}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 14,
    overflow: "hidden",
    marginVertical: 10,
    textAlign: "left",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowColor: "black",
      },
      android: {
        elevation: 2,
      },
    }),
  },
});

export default ChoiceInput;
