import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class Gallery extends React.Component {

  render() {	
	return (
    <View style={styles.background}>

    <View style={styles.buttonLayout}>
    <View style={styles.border}>
      <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='desktop-classic' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('GalleryM')}
      />
      <Text style={styles.borderText}>Gallery </Text>
      </TouchableOpacity>
    </View> 
    
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>

    <View style={styles.border}>
    <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='google-lens' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('Instagram')}
      />
      <Text style={styles.borderText}>Instagram </Text>
      </TouchableOpacity>  
    </View>
  </View>


  </View>

  );
}
}
