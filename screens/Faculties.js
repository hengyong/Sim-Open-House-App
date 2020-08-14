import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';

class Faculties extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Faculties');
    this.state = {
      isLoading: true,
      userArr: [],
      Program:''
    };
  }

  componentDidMount() {
    // this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection)
    console.log("Faculty Screen")
    var read = this.props.route.params
    this.setState({
      Program:read.Program
    })
    console.log("Program::",read.Program)

     this.getFacultyList(read.Program)
  }

  getFacultyList = (Program) => {
    const facArr = [];
    const fed = this;
    console.log('Get Faculty')
    firebase
    .firestore()
    .collection('Faculties')
    .where('Programme' , '==' ,Program)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          const { FacultyName } = doc.data();
          facArr.push({
            key: doc.id,
            doc,
            FacultyName
          });
      })
      fed.setState({
        facArr,
        isLoading: false,
     })
  })
    .catch(err=>{
      console.log('error :',err)
    })

  }

  // componentWillUnmount(){
  //   this.unsubscribe();
  // }

  // getCollection = (querySnapshot) => {
  //   const facArr = [];
  //   querySnapshot.forEach((res) => {
  //     const { FacultyName } = res.data();
  //     facArr.push({
  //       key: res.id,
  //       res,
  //       FacultyName
  //     });
  //   });
  //   this.setState({
  //     facArr,
  //     isLoading: false,
  //  });
  // }
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
            this.state.facArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.FacultyName}
                  onPress={() => {
                    this.props.navigation.navigate('Courses', {
                      Faculty: item.FacultyName,
                      Program:this.state.Program
                   });
                  }}
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

export default Faculties;