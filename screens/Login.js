import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity, Text, } from 'react-native';
import firebase from '../database/firebaseDb';

export default class Login extends Component {
 
  state = { email: "tan_hengy@hotmail.com", password: "password", errorMessage: null };

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        
        this.props.navigation.navigate("Home");
      })
      .catch(error => this.setState({ errorMessage: error.message }));

  };

  render() {

    return (

      
      <View style={styles.loginContainer}>

      <Text style={
        {fontSize: 40,
        fontWeight: 'bold'
        }
    }>Sim Open House</Text>



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


