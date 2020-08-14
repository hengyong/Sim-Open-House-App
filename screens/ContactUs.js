import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';
import { DangerZone } from 'expo';

class ContactUs extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('ContactUs');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  
  componentDidMount(){
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    console.log("Contact Us Screen")    
  }

  componentWillUnmount(){
    this.unsubscribe();
  }


  getCollection = (querySnapshot) => {
    const contactArr = [];
    querySnapshot.forEach((res) => {
      const { Enquiries,Timings, Nummail} = res.data();
      contactArr.push({
        key: res.id,
        res,
        Enquiries,
        Timings,
        Nummail
      });
    });
    this.setState({
      contactArr,
      isLoading: false,
   });
  }
  
  
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <ScrollView style={styles.container}>
          {
            this.state.contactArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  bottomDivider
                  title={item.Enquiries}
                  subtitle={item.Nummail}
                  rightTitle={item.Timings}                 
                  />
                  
              );
            })
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default ContactUs;