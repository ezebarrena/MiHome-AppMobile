import React from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const CustomSearchBar = ({ searchText, setSearchText, searchAddress, searchResults, selectAddress }) => {
  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar dirección..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onEndEditing={searchAddress}
      />
      {searchResults && searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.properties.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectAddress(item)}>
              <Text>{item.properties.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: 'rgba(250, 250, 250, 0.9)',
    height: 48,
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
});

export default CustomSearchBar;
