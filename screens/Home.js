import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles.js'
import { MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Home extends Component {


  render() {	
	return (
      <View style={styles.background}>
        
        <Image 
        style={styles.Logo}
        source = {require('../assets/SimLogo2.png')}
        resizeMode="contain"
        />
        <Image 
        style={styles.FrontPic}
        source = {require('../assets/Sim.png')}
        resizeMode="contain"
        />


        <View style={styles.buttonLayout}>  
        <View style={styles.border}>
          <TouchableOpacity> 
          <MaterialCommunityIcons 
          name='information-outline' 
          size={90} color='black'
          onPress={() => this.props.navigation.navigate('SchoolInformation')}
          />
          <Text style={styles.borderText}>School 
          {'\n'}
          Infomation</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.padding}/>
          <View style={styles.padding}/>
          <View style={styles.padding}/>
          <View style={styles.padding}/>

          <View style={styles.border}>
          <TouchableOpacity> 
          <MaterialIcons 
          name='school' 
          size={90} color='black'
          onPress={() => this.props.navigation.navigate('Admissions')}
          />
          <Text style={styles.borderText}>Admissions</Text>
          </TouchableOpacity>  
          </View>
        </View>

        <View style={styles.padding}/>


        <View style={styles.buttonLayout}> 
          <View style={styles.border}>
          <TouchableOpacity> 
          <MaterialIcons
          name='person-outline' 
          size={90} color='black'
          onPress={() => this.props.navigation.navigate('StudentExperience')}
          />
          <Text style={styles.borderText}>Student
          {'\n'}
          Experience </Text>
          </TouchableOpacity> 
          </View>

          <View style={styles.padding}/>
          <View style={styles.padding}/>
          <View style={styles.padding}/>
          <View style={styles.padding}/>

          <View style={styles.border}>
          <TouchableOpacity> 
          <MaterialCommunityIcons 
          name='information-variant' 
          size={90} color='black'
          onPress={() => this.props.navigation.navigate('GeneralInformation')}
          />
          <Text style={styles.borderText}>General
          {'\n'}
          Information </Text>
          </TouchableOpacity>
          </View>  
        </View>


      </View>


  );
}
}
