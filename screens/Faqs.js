import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';

class Faqs extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('FAQs');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  
  componentDidMount(){
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection) 
  }

  componentWillUnmount(){
    this.unsubscribe();
  }


  getCollection = (querySnapshot) => {
    const FAQArr = [];
    querySnapshot.forEach((res) => {
      const { Question,Answer} = res.data();
      FAQArr.push({
        key: res.id,
        res,
        Question,
        Answer
       
      });
    });
    this.setState({
      FAQArr,
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
            this.state.FAQArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  bottomDivider
                  title={item.Question}
                  subtitle={item.Answer}
                 
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


export default Faqs;