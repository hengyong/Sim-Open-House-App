import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default class GettingHere extends React.Component {


  render() {
    return (
      <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 1.3291,
         longitude:  103.7765,
         latitudeDelta: 0.002,
         longitudeDelta: 0.002}}
      >
        
         <MapView.Marker
            coordinate={{
              latitude: 1.3291,
              longitude:  103.7765
            }}
            />
            </MapView>
            
          
    )}} 

