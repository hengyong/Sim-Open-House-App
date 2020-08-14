import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Hyperlink from 'react-native-hyperlink';

class Instagram extends Component {
  constructor(props){
    super(props);
  }

  render() {	
	return (
   

<View style={styles.background}>
    <View style={styles.tempNav}>
    <Hyperlink
    linkDefault
    linkStyle={ { color: '#2980b9', fontSize: 20 } }
    linkText={ url => url === 'https://instagram.com/sim_social' ? 'instagram' : url }
     >
     <Text style= {styles.text}>
     Visit our https://instagram.com/sim_social page now!
     </Text>
     </Hyperlink>
      </View>
      </View>);
}
}

const styles = StyleSheet.create({
  tempNav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    fontSize: 18
  },
  border: {
    backgroundColor: '#CFF4E0',
    borderWidth: 10,
    borderColor: '#add8e6',
    borderRadius: 10,
  },

  borderText: { 
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPic: {
    height:40,
    width: 40,
    borderRadius:20
},
background: {
  backgroundColor: '#CFF4E0',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}
});

export default Instagram;