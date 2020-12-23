import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { Button, Item, Input, Label } from 'native-base';
import * as firebase from'firebase';


export default class HomeScreen extends React.Component {
    state ={
        email:""
    }
    componentDidMount(){
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.setState({
            email:user.email
          })
        }else{
          this.props.navigation.replace("Login")
        }
      })
    }

    render(){
        return (
            <View style={styles.container}>
               <Text style={{textAlign:"center"}}>You Are Logged In As {this.state.email}</Text>
               <Button full rounded danger
            style={{margin:10, justifyContent:"center"}}
            >
                <Text style={{fontSize:22}}>Sign Out</Text>
            </Button>
            </View>
          );
    } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
