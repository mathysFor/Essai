import React from 'react';
import {View,TextInput, TouchableOpacity, StyleSheet, Text,Image, KeyboardAvoidingView,ScrollView} from 'react-native';
import {useState} from "react";
import {Input, Button} from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function signUpPage(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  var handleSubmitSignUp = async (nom,prenom,mail,address,pwd) => {
    var res = await fetch("http://172.20.10.2:3000/sign-up", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({nom:nom,prenom:prenom,mail:mail,address:address,pwd:pwd}),
    });
    

    res = await res.json();
 
    if (!res.isLogin) {
      var user = {nom:nom,mail:mail}
      AsyncStorage.setItem("user", JSON.stringify(user))
      props.navigation.navigate("Home");
    } else {
      alert("un compte existe déjà avec cet Email "); 
    }
  };

    return (
       <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : "height"} style={styles.keyboardAvoidingView} >
          <View style={styles.containerImage}>
          <Image
        style={styles.image}
        source={require('../images/signUp.jpeg')} />
          </View>

        <Text style={styles.titre}>Se connecter</Text>

        <View style={styles.containerForm}>
           
        <TextInput
                style={styles.input}
                onChangeText={(value) => setEmail(value)}
                value={email}
                placeholder="Entrez votre adress email "
                placeholderTextColor="#828282"
            />

        <TextInput
                style={styles.input}
                onChangeText={(value) => setPassword(value)}
                value={password}
                placeholder="Entrez votre mot de passe "
                placeholderTextColor="#828282"
                secureTextEntry={true}
            />



            <TouchableOpacity onPress={()=> {props.navigation.navigate("App",{screen: 'MyDefault'})}}  style={styles.button}>
                <Text style={styles.textButton}>Se connecter</Text>
            </TouchableOpacity>
            <Text onPress={()=> {props.navigation.navigate("SignIn")}} style={styles.textLink}>Mot de passe oublié ? </Text>
            

        </View> 
        </KeyboardAvoidingView>
      </ScrollView>
)



    
}
    const styles = StyleSheet.create({

      container:{
        flex:1,
        backgroundColor: '#F5F5F5'
      },
      keyboardAvoidingView:{
        flex:1,
      },
      containerImage:{
        height: '45%',
        width:'100%', 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:35
      },
      image:{
        height:'100%',
        width:'97%',
        borderRadius:40


      },
      titre:{
        fontSize: 35,
        fontWeight:'bold',
        margin:20,
    },
    containerForm:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    },
    input:{
      width:'85%',
      backgroundColor:'white',
      paddingLeft:10,
      height:'13%',
      marginBottom:10,
      borderRadius:4,
      color:'#828282'

    },
    button:{
      backgroundColor: '#4F8590',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:65,
      marginBottom:10,
      borderRadius:8,
      height:60,
      width:'85%',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.25,
      },
      textButton:{
        color:'white',
        fontWeight:'700'
      },
      textLink:{
        color:'#4F8590',
        fontWeight:'600',
        marginLeft:'45%'
    }

    })