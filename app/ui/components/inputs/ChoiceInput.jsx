import { SelectList } from 'react-native-dropdown-select-list'
import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

const ChoiceInput = ({ data, value, onValueSelect }) => {

  const [selected, setSelected] = React.useState("");

  const handleValueSelect = (val) => {
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
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(250, 250, 250, 0.9)",
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
