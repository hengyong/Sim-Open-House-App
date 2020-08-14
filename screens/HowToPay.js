import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Image, Linking} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';
//import { Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';
//import styles from '../styles.js'


class HowToPay extends Component {   //

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('ModesOfPayment');  //retrieve from database
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection)
    console.log("ModesOfPayment Screen")   //

  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const mopArr = [];                                     //
    querySnapshot.forEach((res) => {
      const { Content,Header } = res.data();                    //fieldname
      mopArr.push({                                       //
        key: res.id,
        res,
        Content,                                          //fieldname
        Header,
      });
    });
    this.setState({
      mopArr,                                             //
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
        {'\n'}{'\n'} How to make payment?
        </Text>

        <Image 
        style={styles.tinylogo}
        source = {require('../assets/calculator.png')}
        resizeMode="contain"
        />

<Text style={{color: 'darkgreen'}}>
     Financial Calculator
    </Text>


    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://fx-rate.net/calculator/')}>
    Click here to access Currency Converter Calculator
    </Text>


          {
            this.state.mopArr.map((item, i) => {                    //
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.Content}                                    // display field
                  subtitle={item.Header}



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
    width: 10,
    height: 10,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
  }
})

export default HowToPay;    //
