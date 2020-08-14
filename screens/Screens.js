import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );

export const Splash = () => (
    <ScreenContainer>
        <Text>Loading...</Text>
    </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
    return (
        <ScreenContainer>
            <Text>Sign In Screen</Text>
            <Button title="Sign In" onPress={() => alert("todo!")}/>
            <Button title="Create Account" onPress={() => navigation.push("CreateAccount")}/>
        </ScreenContainer>
    )
}

export const CreateAccount = () => {
    return (
        <ScreenContainer>
            <Text>Create Account Screen</Text>
            <Button title="Sign Up" onPress={() => navigation.push("Sign Up")}/>
        </ScreenContainer>
    )
}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5
    }
  });