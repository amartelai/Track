import React, {useContext} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';
const Map = () => {
  // const {
  //   state: {currentLocation},
  // } = useContext(LocationContext);
  // if (!currentLocation) {
  //   return <ActivityIndicator size="large" style={{marginTop: 200}} />;
  // }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  );
};
const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
