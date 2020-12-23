import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native';
import { Button, Item, Input, Label } from 'native-base';
import * as firebase from'firebase';
import LoginScreen from './Login';


export default class SignupScreen extends React.Component {

    state={
        email:"",
        password:""
    }
    userSignup(email, password){
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(()=>{
        this.props.navigation.replace("Home")
      })
      .catch(error=>{
        Alert.alert(error.message)
      })
    }
    render(){
        return (
            <KeyboardAvoidingView 
            behavior="position"
            style={styles.container}>
                <View style={{alignItems:"center"}}>
                    <Image source={require("../assets/ninza.jpg")}
                    style={{width:280, height:200, borderRadius:100}}
                    />
                </View>
              <Item floatingLabel style={{borderBottomColor:"black"}}>
                <Label>Email</Label>
              <Input 
              value={this.state.email}
              onChangeText={(text)=>this.setState({email:text})}
              />
            </Item>
            <Item floatingLabel style={{borderBottomColor:"black"}}>
              <Label>Password</Label>
              <Input
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(text)=>this.setState({password:text})}
              />
            </Item>
            <Button full rounded danger
            style={{margin:10, justifyContent:"center"}}
            onPress={()=>this.userSignup(this.state.email, this.state.password)}
            >
                <Text style={{fontSize:22}}>Sign Up</Text>
            </Button>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate("Login")}
            >
                <Text style={{textAlign:"center", padding:20}}>Already have an account?</Text>
            </TouchableOpacity>
              <StatusBar style="auto" />
            </KeyboardAvoidingView>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding:10
  },
});
