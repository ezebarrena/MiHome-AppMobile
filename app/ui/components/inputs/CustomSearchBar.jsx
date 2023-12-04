import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import axios from 'axios';
import { se } from 'make-plural';

const CustomSearchBar = ({ onAddressSelect, defaultValue }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = 'AvmPrvRS-voqmRn9ifwJ5pnVskBSZuc0zx4ztiQCxeHRCcr8zld_DxjJbW8U40tP'; // Reemplaza con tu clave API de Bing Maps
  const ENDPOINT = 'https://dev.virtualearth.net/REST/v1/Locations';

  const searchAddress = async () => {
    try {
      const response = await axios.get(ENDPOINT, {
        params: {
          query: searchText,
          key: API_KEY,
        },
      });
      setSearchResults(response.data.resourceSets[0].resources);
    } catch (error) {
      console.error('Error al buscar la dirección:', error);
    }
  };

  const selectAddress = (item) => {
    // Llama a la función de devolución de llamada para exponer las coordenadas
    onAddressSelect(item);
    setSearchText(item.address.formattedAddress);
    setSearchResults([]);
  };

  useEffect(()=>{
    if(defaultValue != undefined){
      setSearchText(defaultValue)
      searchAddress()
    }
    
  },[defaultValue])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar dirección..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onEndEditing={searchAddress}
      />
      {searchResults && searchResults.length > 0 && searchResults.map((item) => (
        <TouchableOpacity style={styles.result} key={item.name} onPress={() => selectAddress(item)}>
          <Text>{item.address.formattedAddress}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 14,
    marginVertical: 10,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowColor: 'black',
      },
      android: {
        elevation: 2,
      },
    }),
  },
  searchInput: {
    height: 48,
    paddingHorizontal: 10,
  },
  result: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});

export default CustomSearchBar;
