import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles.js'
import {  AntDesign, Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class GeneralInformation extends React.Component {

  render() {	
	return (
  

<View style={styles.background}>

<View style={styles.buttonLayout}>
<View style={styles.border}>
  <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='comment-question' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('Faqs')}
      />
      <Text style={styles.borderText}>FAQs</Text>
      </TouchableOpacity>  
</View> 

<View style={styles.padding} />
<View style={styles.padding} />
<View style={styles.padding} />

<View style={styles.border}>
<TouchableOpacity> 
      <Feather 
      name='map-pin' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('GettingHere')}
      />
      <Text style={styles.borderText}>Getting Here</Text>
  </TouchableOpacity>   
</View>
</View>

<View style={styles.padding}/>

<View style={styles.buttonLayout}>
<View style={styles.border}>
<TouchableOpacity> 
      <AntDesign 
      name='contacts' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('ContactUs')}
      />
      <Text style={styles.borderText}>Contact Us</Text>
  </TouchableOpacity>  
</View>

<View style={styles.padding} />
<View style={styles.padding} />
<View style={styles.padding} />
<View style={styles.padding} />
<View style={styles.padding} />
<View style={styles.padding} />
<View style={styles.padding} />
<View style={styles.padding} />
<View style={styles.padding} />



</View>


</View>

     
  );
}
}
