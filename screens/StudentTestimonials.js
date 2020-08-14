import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';

class StudentTestimonials extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('StudentProfiles');
    this.state = {
      isLoading: true,
      userArr: [] ,
      StudentName:''
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
      const { StudentName, SchoolName, CourseName, Description, Question1,Question2, Answer1, Answer2 } = res.data();
      schArr.push({
        key: res.id,
        res,
        StudentName, 
        SchoolName, 
        CourseName, 
        Description,
        Question1,
        Question2,
        Answer1,
        Answer2,
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
            this.state.schArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.StudentName}
                  subtitle={item.Description}
                  rightTitle={item.SchoolName}
                  rightSubtitle={item.CourseName}
                  onPress={() => { // Alert.alert(StudentName,userkey)
                    this.props.navigation.navigate('StudentTestimonialDetails', {
                      userkey: item.key,
                      StudentName: item.StudentName
                    });
                  }}/>
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

export default StudentTestimonials;