import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView,StyleSheet } from 'react-native';
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class ContactUs extends React.Component {

    constructor(){
        super()
        this.state={
            Course1:'',
            Course2:''
        }
    }
    
    componentDidMount(){
        console.log('DETAIL')
        var read = this.props.route.params
        console.log('COURSE 1 params : ', read.Course1)
        console.log('COURSE 2 params : ', read.Course2)
        this.setState({
            Course1:read.Course1,
            Course2:read.Course2
        })
    }

  render() {	
	return (
    <View style={styles.container}>
    
    <Text style={{textAlign:'center', fontWeight:'bold',fontSize:20, marginVertical:10}}> Compare detail</Text>
    {this.state.Course1 == '' ?
    null
    :
    <View style={{flex:1,margin:20}}>
        <ScrollView>

        <Text style={{color:'black',fontWeight:'bold',textAlign:'center',margin:20,fontSize:20}}>Course 1 </Text>
     <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}> Course : <Text style={styles.text2}> {Object.values(this.state.Course1[0].CourseName)} </Text></Text>
     <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}> School : <Text style={styles.text2}> {Object.values(this.state.Course1[0].SchoolName)} </Text></Text>
     <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}> Fees : <Text style={styles.text2}> {Object.values(this.state.Course1[0].Fees)}</Text></Text>
     <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}> YearsOfStudy : <Text style={styles.text2}> {Object.values(this.state.Course1[0].YearsOfStudy)}</Text></Text>
     <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}> Exemptions : <Text style={styles.text2}> {Object.values(this.state.Course1[0].Exemptions)}</Text></Text>

     <Text style={{color:'black',fontWeight:'bold',textAlign:'center',margin:20,fontSize:20}}>Course 2 </Text>
     <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>  Course :  <Text style={styles.text2}> {Object.values(this.state.Course2[0].CourseName)}</Text></Text>
     <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>  School :  <Text style={styles.text2}> {Object.values(this.state.Course2[0].SchoolName)}</Text></Text>
     <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>  Fees : <Text style={styles.text2}> {Object.values(this.state.Course2[0].Fees)}</Text></Text>
     <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>  YearsOfStudy : <Text style={styles.text2}> {Object.values(this.state.Course2[0].YearsOfStudy)}</Text></Text>
     <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}> Exemptions : <Text style={styles.text2}> {Object.values(this.state.Course2[0].Exemptions)}</Text></Text>
    </ScrollView>
    </View>
    }
   

    </View>
    )}
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Main:{
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10
    },
    text:{
        fontWeight:'bold'
    },
    text2:{
        fontWeight:"normal"
    }
})