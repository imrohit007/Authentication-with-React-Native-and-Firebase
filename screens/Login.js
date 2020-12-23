import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Button, Item, Input, Label } from 'native-base';
import * as firebase from'firebase';



export default class LoginScreen extends React.Component {

    state={
        email:"",
        password:""
    }
    userSignin(email, password){
      firebase.auth().signInWithEmailAndPassword(email, password)
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
            onPress={()=>this.userSignin(this.state.email, this.state.password)}
            >
                <Text style={{fontSize:22}}>Sign In</Text>
            </Button>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate("SignUp")}
            >
                <Text style={{textAlign:"center", padding:20}}>New Member</Text>
            </TouchableOpacity >
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
