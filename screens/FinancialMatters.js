import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome5, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';


export default class FinancialMatters extends React.Component {

  render() {	
	return (
  
        
    <View style={styles.background}>

    <View style={styles.buttonLayout}>
    <View style={styles.border}>
    <TouchableOpacity> 
    <MaterialIcons 
    name='payment' 
    size={105} color='black'
    onPress={() => this.props.navigation.navigate('HowToPay')}
    />
    <Text style={styles.borderText}>How To 
          Pay </Text>
    </TouchableOpacity>
    </View> 

    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>


  <View style={styles.border}>
    <TouchableOpacity> 
    <FontAwesome5 
    name='hands-helping' 
    size={90} color='black'
    onPress={() => this.props.navigation.navigate('FinancialAssistance')}
    />
    <Text style={styles.borderText}>Financial
          {'\n'}
          Assistance </Text>
    </TouchableOpacity>
  </View> 

  </View>  
    
    
  </View>
  );
}
}
