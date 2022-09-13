import React from 'react';
import {View, StyleSheet, Text,ImageBackground} from 'react-native';


/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function MyVideos(props) {

    return (

      <ImageBackground source={require('../images/BackGroundGreen.jpeg')} resizeMode="cover" style={styles.container}>

            <Text style={styles.titre}>
                MyVideos
            </Text>
     
      </ImageBackground>
 
)



    
}
    const styles = StyleSheet.create({

      container:{
        flex:1,
        backgroundColor: '#F5F5F5'
      },
      titre:{
        fontSize: 35,
        fontWeight:'bold',
        margin:20,
    }
    })