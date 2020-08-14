import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TextInput, ListView, TouchableHighlight} from 'react-native';
import { ListItem, List } from 'react-native-elements'
import firebase from '../database/firebaseDb';

//search function for the search data did not fetch back data

class Events extends Component {

  constructor(props) {
    super(props);
    this.firestoreRef = firebase.firestore().collection('Events');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }
 
  filterSearch(text){
    const newData = this.state.userArr.filter((item)=>{
      const itemData = item.name.first.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData)>-1
    });
    this.setState({
      text:text,
      Events: newData
    });
  }


  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const eventArr = [];
    querySnapshot.forEach((res) => {
      const { EventDate, EventName, EventTime, EventVenue } = res.data();
      eventArr.push({
        key: res.id,
        res,
        EventDate,
        EventName,
        EventTime, 
        EventVenue,
      });
    });
    this.setState({
      eventArr,
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
        <TextInput style={{color:'blue' , fontWeight: 'bold' }}
            placeholder='Search for event name here'
            onChangeText={(text) => this.filterSearch(text)}
            value={this.state.text}
            
          />
          {
            this.state.eventArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.EventName}
                  subtitle={item.EventVenue}
                  rightTitle={item.EventDate}
                  rightSubtitle={item.EventTime}
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

export default Events;