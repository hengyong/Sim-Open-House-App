import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Alert,Text} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';

// currently only can display the first data , can't seems to fetch the userkey from the studentprofiles to this screen

class StudentTestimonialDetails extends Component {

  constructor(props) {
    super(props);
    var studentName = props.route.params.StudentName;
    this.firestoreRef = firebase.firestore().collection('StudentProfiles').where('StudentName', '==' , studentName);
    this.state = {
      isLoading: true,
      userArr: [],
      StudentName: studentName
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

 getCollection = (querySnapshot) => {
    const schArr = [];
    querySnapshot.forEach((res) => {
      const { StudentName, Question1 , Question2 , Answer1, Answer2 } = res.data();
      schArr.push({
        res,
        StudentName, 
        Question1,
        Question2,
        Answer1,
        Answer2
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
          <ActivityIndicator size="large" color="#9E9E9E"/>
          
        </View>

      )
    }    
    return (
      <ScrollView style={styles.container}>
          {
              this.state.schArr.map((item, userkey) => {
                return (
                  <Text style={{ fontSize: 16, alignItems:"center"}}>{item.StudentName} {'\n'} {'\n'}Question {item.Question1} {'\n'}  {'\n'} 
                    Answer 1 )  {item.Answer1}   {'\n'} {'\n'}Question {item.Question2}  {'\n'}   {'\n'}Answer 2) {item.Answer2}
                  
                  
                  </Text>
              
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

export default StudentTestimonialDetails;