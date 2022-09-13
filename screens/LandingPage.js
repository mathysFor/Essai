import React from 'react';
import {View,TextInput, TouchableOpacity, StyleSheet, Text,Image, KeyboardAvoidingView,ScrollView, ImageBackground} from 'react-native';
import {useState} from "react";
import {Input, Button} from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 


import { Link } from '@react-navigation/native';



/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function SignIn(props) {

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

                        
        <View style={styles.containerImage} >
            <ImageBackground
                        style={styles.ImageBackground}
                        resizeMode="cover"
                        imageStyle={styles.image}
                        source={require('../images/Acceuil.jpeg')} > 
                        <Text style={styles.titre1}>Perfectionnez Votre Swing N’importe Ou</Text>
            </ImageBackground>
        </View>
           

        <Text style={styles.titre}>Analyse & Corrige</Text>
        <Text style={styles.phrase}>Analysez, corrigez, et regularisez votre swing </Text>


        <View style={styles.containerForm}>
        

            <TouchableOpacity onPress={()=> {props.navigation.navigate("SignIn")}}  style={styles.button1}>
                <Text style={styles.textButton1}>Se connecter</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> {props.navigation.navigate("SignUp")}}  style={styles.button2}>
                <Text style={styles.textButton}>Créer un compte</Text>
            </TouchableOpacity>


        </View> 

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
      ImageBackground:{
        height:'100%',
        width:'97%',
        justifyContent:'center',
        alignItems:'center'
      }, 
      containerImage:{
        height:'45%', 
        alignItems:'flex-end',
        marginTop:40
      },
      image:{
        borderRadius:40,
      },
      titre:{
        fontSize: 24,
        fontWeight:'bold',
        margin:20,
        alignSelf:'center'
    },
    phrase:{
        fontSize: 16,
        fontWeight:'bold',
        margin:20,
        color:'#4F4F4F',
        alignSelf:'center',
        textAlign:'center'

    },
    containerForm:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      position:'absolute',
      bottom:20,
      left:'7%'
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
    button1:{
        backgroundColor: 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:65,
        marginBottom:10,
        borderRadius:8,
        height:60,
        width:'45%',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        },
    button2:{
      backgroundColor: '#4F8590',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:65,
      marginBottom:10,
      borderRadius:8,
      height:60,
      width:'45%',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.25,
      },
      textButton:{
        color:'white',
        fontWeight:'700'
      },
      textButton1:{
        color:'black',
        fontWeight:'700'
      },
      textLink:{
        color:'#4F8590',
        fontWeight:'600',
        marginLeft:'45%'
    },
    titre1: {
      fontStyle: 'normal',
      fontSize: '22px',
      fontWeight:'700',
      lineHeight: '33px',
      textAlign: 'center',
      letterSpacing: '0.04em',
      color:'#C6D4D3'
    }

    })