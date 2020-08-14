import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class GalleryM extends React.Component {

  render() {	
	return (
    <View style={styles.background}>

    <View style={styles.buttonLayout}>
    <View style={styles.border}>
      <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='desktop-classic' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('SocialMedia')}
      />
      <Text style={styles.borderText}>SIM Open House 
      {'\n'}
      2019 </Text>
      </TouchableOpacity>
    </View> 
    
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>

     <View style={styles.border}>
      <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='desktop-classic' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('SocialMedia2')}
      />
      <Text style={styles.borderText}>SIM Open House 
      {'\n'}
      2018 </Text>
      </TouchableOpacity>
    </View> 
  </View>


  </View>

  );
}
}
