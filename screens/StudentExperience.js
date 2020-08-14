import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class StudentExperience extends React.Component {

  render() {	
	return (
  

    <View style={styles.background}>

    <View style={styles.buttonLayout}>
    <View style={styles.border}>
      <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='information-outline' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('StudentLife')}
      />
      <Text style={styles.borderText}>Student
          {'\n'}
          Life </Text>
      </TouchableOpacity>
    </View> 

    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>

    <View style={styles.border}>
    <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='swim' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('Events')}
      />
      <Text style={styles.borderText}>Events</Text>
      </TouchableOpacity>  
    </View>
  </View>

  <View style={styles.padding}/>
  
  <View style={styles.buttonLayout}>
  <View style={styles.border}>
  <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='google-lens' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('Gallery')}
      />
      <Text style={styles.borderText}> Media  </Text>
  </TouchableOpacity>  
  </View>

  <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>

  <View style={styles.border}>
  <TouchableOpacity> 
      <Entypo 
      name='open-book' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('StudentTestimonials')}
      />
      <Text style={styles.borderText}>Student
          {'\n'}
          Testimonials </Text>
  </TouchableOpacity>  
  </View>
  </View>

<TouchableOpacity style={styles.signupBtn} onPress={() => this.props.navigation.goBack()}>
    <Text style={styles.loginText}>Back To Homepage</Text>
  </TouchableOpacity>

  </View>

  );
}
}