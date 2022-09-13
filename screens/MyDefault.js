import React from 'react';
import {View, StyleSheet,ImageBackground,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Card, Button, Text } from 'react-native-elements'
import styles from '../style/styleDefault.js'




export default function MyDefault(props) {


  const defaut = [
    {
    title:'Le Stance',
    img:require('../images/stance.png'),
    commentaire:'Pieds trop serrés.'
  },

  {
    title:'L’équilibre',
    img:require('../images/epaule.png'),
    commentaire:'Poids trop en arrière.'
  },

  {
    title:'La tête ',
    img:require('../images/tete.png'),
    commentaire:'Tête trop à l’arrière.'
  },
]

    return (

          <View style={styles.container}>
            <ImageBackground source={require('../images/BackGroundGreen.jpeg')} resizeMode="cover" style={styles.container}>
            <Card containerStyle={styles.card1} >
              <Card.Title>{defaut[0].title}</Card.Title>

              <View style={styles.viewContain}>
                  <Card.Image  style={{width:150}} source={defaut[0].img} />
              <View style={styles.viewSecond}>
                  <Text style={{marginBottom:30}}>
                      {defaut[0].commentaire}
                  </Text>
                  <Button
                    buttonStyle={styles.button}
                    title='Voir plus'
                    icon={<Entypo name="arrow-with-circle-right" size={20} color="white" style={{marginLeft:10}} /> } 
                    iconRight={true}
                    
                    />
              </View>
              </View>
            </Card>

            <Card containerStyle={styles.card} >
              <Card.Title>{defaut[1].title}</Card.Title>
              <View style={styles.viewContain}>
              <View style={styles.viewSecond}>
                  <Text style={{marginBottom:30}}>
                      {defaut[1].commentaire}
                  </Text>
                  <Button
                    buttonStyle={styles.button}
                    title='Voir plus'
                    icon={<Entypo name="arrow-with-circle-right" size={20} color="white" style={{marginLeft:10}} /> } 
                    iconRight={true}
                    
                    />
              </View>
              <Card.Image  style={{width:150}} source={defaut[1].img} />
              </View>
            </Card>

            <Card containerStyle={styles.card} >
              <Card.Title>{defaut[2].title}</Card.Title>

              <View style={styles.viewContain}>
                  <Card.Image  style={{width:150}} source={defaut[2].img} />
              <View style={styles.viewSecond}>
                  <Text style={{marginBottom:30}}>
                      {defaut[2].commentaire}
                  </Text>
                  <Button
                    buttonStyle={styles.button}
                    title='Voir plus'
                    icon={<Entypo name="arrow-with-circle-right" size={20} color="white" style={{marginLeft:10}} /> } 
                    iconRight={true}
                    />
              </View>
              </View>
            </Card>
            </ImageBackground>
        </View>
 
)



    
}
