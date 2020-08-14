import React, { Component } from 'react';
import { Alert, Button, TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import * as firebase from "firebase";

export default class Signout extends Component {
  
  state = { email: "", password: "", errorMessage: null };
  
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // AsyncStorage.setItem("key", "I like to save it.");
        this.props.navigation.navigate("Home");
      })
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
          placeholderTextColor="black"
          style={styles.inputText}
        />

        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={'Password'}
          placeholderTextColor="black"
          secureTextEntry={true}
          style={styles.inputText}
        />


      <TouchableOpacity 
      style={styles.loginBtn} 
      onPress={this.handleLogin}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupBtn} onPress={() => this.props.navigation.navigate("Signup")}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

    </View>

    
  );
}
}   
