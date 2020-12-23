import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';


export default class LoadingScreen extends React.Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.navigation.navigate("Home")
      }else{
        this.props.navigation.navigate("Login")
      }

    })
  }

  render(){
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="black"/>
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
