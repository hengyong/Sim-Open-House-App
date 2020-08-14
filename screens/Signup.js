import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import firebase from '../database/firebaseDb';

export default class Signup extends Component {
  
  state = { email: "", password: "", errorMessage: null };
  
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Login"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };


  render() {

    return (

      
      <View style={styles.loginContainer}>

        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}

        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder={'Email'}
          style={styles.inputText}
        />

        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.inputText}
        />



      <TouchableOpacity style={styles.loginBtn} onPress={this.handleSignUp}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupBtn} onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.loginText}>Cancel</Text>
      </TouchableOpacity>

    </View>

    
  );
}
}   
