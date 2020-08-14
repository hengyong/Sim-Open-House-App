import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import Insta2 from '../screens/Insta2';

class SocialMedia2 extends Component {
  render(){
    return (
        <View style={styles.container}>
          <Insta2 />
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




export default SocialMedia2; 

