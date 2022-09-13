import React from 'react';
import {View,TextInput, TouchableOpacity, StyleSheet, Text,Image, KeyboardAvoidingView,ScrollView} from 'react-native';
import {useState} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from '@react-navigation/native';



/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function signUpPage(props) {

  const [email, setSignupEmail] = useState("");
  const [password, setPassword] = useState("");
  const [premierPassword, setPremierPassword] = useState("");




    return (
        <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : "height"} style={styles.keyboardAvoidingView} >
        <View style={styles.containerImage}>
            <Image
        style={styles.image}
        source={require('../images/signUp.jpg')} />
        </View>

        <Text style={styles.titre}>Se connecter</Text>

        <View style={styles.containerForm}>
            
            <TextInput
                style={styles.input}
                onChangeText={(value) => setSignupEmail(value)}
                value={email}
                placeholder="Entrez votre adress email "
                placeholderTextColor="#828282"
            />

            <TextInput
                style={styles.input}
                placeholderTextColor="#828282"
                onChangeText={(value) => setPremierPassword(value)}
                value={premierPassword}
                placeholder="Entrez votre mot de passe  "
                secureTextEntry={true}

            />
             <TextInput
                style={styles.input}
                onChangeText={(value) => setPassword(value)}
                value={password}
                placeholder="Entrez votre mot de passe "
                placeholderTextColor="#828282"
                secureTextEntry={true}
            />
  
             <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Créer un compte</Text>
            </TouchableOpacity>

      
            <Text>Vous avez déjà un compte ? <Text onPress={()=> {props.navigation.navigate("SignIn")}} style={styles.textLink}>Se connecter </Text></Text>

        </View>
  
        </KeyboardAvoidingView>
      </ScrollView>

    )
}
    const styles = StyleSheet.create({

        container: {
            flex:1,
            backgroundColor: '#F5F5F5'
        },
        image:{
            width:'97%',
            height:'100%',
            borderRadius:40
        },
        containerImage:{
            height: '38%',
            width:'100%', 
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginTop:35
        },
        containerForm:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        },
        titre:{
            fontSize: 35,
            fontWeight:'bold',
            margin:20,
        },
        input:{
            width:'85%',
            backgroundColor:'white',
            paddingLeft:10,
            height:'13%',
            marginBottom:10,
            borderRadius:5,
            color:'#828282'

        },
        button:{
            backgroundColor: '#4F8590',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginTop:10,
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
            fontWeight:'600'
        }
    })