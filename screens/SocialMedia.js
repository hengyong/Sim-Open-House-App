import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import Insta from '../screens/Insta';

class SocialMedia extends Component {
  render(){
    return (
        <View style={styles.container}>
          <Insta />
        </View>

    )
}
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9E9E9E"
  }
})




export default SocialMedia; 

