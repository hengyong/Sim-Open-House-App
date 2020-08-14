import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';

class Courses extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Courses');
    this.state = {
      isLoading: true,
      Program:'',
      Faculty:''
    };
  }

  componentDidMount() {
    // this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
   
    console.log("Courses Screen")
    
    var read = this.props.route.params

    console.log("Faculty",read.Faculty)
    console.log('Program',read.Program)
    this.setState({
      Faculty:read.Faculty,
      Program:read.Program
    })
     this.getCourses(read.Program,read.Faculty)
  }

  // componentWillUnmount(){
  //   this.unsubscribe();
  // }

  getCourses = (Program,Faculty) =>{
    console.log('getcourses')
    const fed = this;
    const courseArr = [];
   firebase
   .firestore()
   .collection('Courses')
   .where('Programme' , '==' ,Program)
   .where('Faculty' , '==',Faculty)
   .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(res) {
          // doc.data() is never undefined for query doc snapshots
          console.log(res.id, " => ", res.data());
          const { 
            CourseName, Faculty, Programme, SchoolName, ProgrammeOverview, ProgrammeStructure, EntryQualification, 
            Type, Intakes, YearsOfStudy, Exemptions, Fees, AssessmentsAndExams 
          } = res.data();
          courseArr.push({
            key: res.id,
            res,
            CourseName,
            Faculty,
            Programme,
            SchoolName,
            ProgrammeOverview,
            ProgrammeStructure,
            EntryQualification,
            Type,
            Intakes,
            YearsOfStudy,
            Exemptions,
            Fees,
            AssessmentsAndExams
          });
      });

      fed.setState({
        courseArr,
        isLoading: false,
     });

  })
    .catch(err=>{
      console.log('error :',err)
    })
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
            this.state.courseArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.CourseName}
                  onPress={() => {
                    this.props.navigation.navigate('CourseDetail', {
                      itemDetail: item
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

export default Courses;