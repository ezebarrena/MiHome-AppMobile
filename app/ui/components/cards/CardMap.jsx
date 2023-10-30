import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class MapScreen extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    selectedLocation: null,
  };

  onMapPress = (e) => {
    this.setState({
      selectedLocation: e.nativeEvent.coordinate,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          onPress={this.onMapPress}
        >
          {this.state.selectedLocation && (
            <Marker
              coordinate={this.state.selectedLocation}
              title="Ubicación seleccionada"
            />
          )}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:300,
    height:300,
    justifyContent: 'center',
    alignItems: 'center',
    //...StyleSheet.absoluteFillObject,
    //flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;