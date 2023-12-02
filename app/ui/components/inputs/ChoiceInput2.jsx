import { SelectList } from 'react-native-dropdown-select-list'
import React from "react";

import { TextInput, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { useState } from "react";

const ChoiceInput = ({ data, value, onValueSelect, defaultOption }) => {

  const [modalVisible, setModalVisible] = useState(false);

  const [selected, setSelected] = React.useState("");

  const handleValueSelect = (val) => {
    console.log(val);
    setSelected(val);
    setModalVisible(false); // Oculta el modal después de la selección
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
    backgroundColor: "rgba(250, 250, 250, 0.9)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 10,
    marginLeft:-20,
    width:'92.5%',
    textAlign: "left",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowColor: "black",
        
      },
      android: {
        elevation: 2,
      }
    }),
  },
  modal: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChoiceInput;
