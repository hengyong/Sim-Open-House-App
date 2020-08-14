import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem1, ListItem2, ListItem} from 'react-native-elements'
import firebase from '../database/firebaseDb';

class StudentDevelopment extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('StudentDevelopment');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const schArr = [];
    querySnapshot.forEach((res) => {
      const { Title, Content } = res.data();
      schArr.push({
        key: res.id,
        res,
        Title,
        Content,
      });
    });
    this.setState({
      schArr,
      isLoading: false,
   });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
            <ActivityIndicator size="large" color="##9E9E9E" />
        </View>
      )
    }    
   
    return (
      <ScrollView style={styles.container}>
          {
            this.state.schArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  
                  title= {item.Title}
                  subtitle={item.Content}
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

export default StudentDevelopment;