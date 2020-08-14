import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Image, Linking} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';
//import { Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';
//import styles from '../styles.js'


class Scholarship extends Component {   //

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Scholarship');  //retrieve from database
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection)
    console.log("Scholarship Screen")   //

  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const sArr = [];                                     //
    querySnapshot.forEach((res) => {
      const { Content, Header, S2 } = res.data();                    //fieldname
      sArr.push({                                       //
        key: res.id,
        res,
        Content,
        Header,     
        S2                                    //fieldname
      });
    });
    this.setState({
      sArr,                                             //
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
Scholarships at SIM Global Education 
    </Text>


    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.simge.edu.sg/student-life/scholarships/')}>
    Click here for more information or to apply
    </Text>

    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.google.com/')}>
    Click here to browse on google
    </Text>

    <Image 
        style={styles.tinylogo}
        source = {require('../assets/Scholarship.png')}
        resizeMode="contain"
        />

        
          {
            this.state.sArr.map((item, i) => {                    //
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.Content} 
                  subtitle={item.Header} 
                  rightTitle={item.S2}                               // display field
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

export default Scholarship;    //
