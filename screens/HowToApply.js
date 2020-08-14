import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Image} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';
//import { Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';
//import styles from '../styles.js'


class HowToApply extends Component {   //

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('HowToApply');  //retrieve from database
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection)
    console.log("HowToApply Screen")   //

  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const htaArr = [];                                     //
    querySnapshot.forEach((res) => {
      const { Content} = res.data();                    //fieldname
      htaArr.push({                                       //
        key: res.id,
        res,
        Content                                         //fieldname
      });
    });
    this.setState({
      htaArr,                                             //
      isLoading: false,
   });
  }

OnPress= (key) => {
   console.log(key)  
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

      <Text style={styles.text1}>
        {'\n'}{'\n'} How to Apply for Full-Time or Part-Time courses?
        </Text>

        <Image 
        style={styles.tinylogo}
        source = {require('../assets/HowToApply.png')}
        resizeMode="contain"
        />

          {
            this.state.htaArr.map((item, i) => {                    //
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.Content}                                    // display field
                  



                  //onPress={() => {
                    //this.props.navigation.navigate('Courses', {
                      //userkey: "Testing data"
                   // });
                  //}}
                  onPress ={()=> this.OnPress(item.key)}

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
   paddingBottom: 22,
   backgroundColor: "lightblue"
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
  }
})

export default HowToApply;    //