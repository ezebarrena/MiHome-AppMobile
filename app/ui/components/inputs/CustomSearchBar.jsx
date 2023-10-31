import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import axios from 'axios';

const CustomSearchBar = ({ onAddressSelect }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = '5b3ce3597851110001cf6248a43d074c7b9c4b79bf1d0ce4c6de155a'; // Reemplaza con tu clave API de OpenRouteService
  const ENDPOINT = 'https://api.openrouteservice.org/geocode/search';

  const searchAddress = async () => {
    try {
      const response = await axios.get(ENDPOINT, {
        params: {
          text: searchText,
        },
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
        },
      });
      setSearchResults(response.data.features);
    } catch (error) {
      console.error('Error searching address:', error);
    }
  };

  const selectAddress = (item) => {
    // Extract the coordinates from the selected address
    const { coordinates } = item.geometry;

    // Call the callback function to expose the coordinates
    onAddressSelect(coordinates);
  };

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
        <TouchableOpacity style={styles.result} key={item.properties.id} onPress={() => selectAddress(item)}>
          <Text>{item.properties.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(250, 250, 250, 0.9)',
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
