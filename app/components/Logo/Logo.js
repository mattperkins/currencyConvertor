import React from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'
import styles from './styles'

const Logo = () => (
 <View style={styles.container}>
  <ImageBackground
   resizeMode="contain"
   style={styles.containerImage} 
   source={require('./images/background.png')} 
  >
   <Image
    resizeMode="contain"
    style={styles.logo} 
    source={require('./images/logo.png')} 
   />
  </ImageBackground>  
  <Text style={styles.title}>Currency Convertor</Text>
 </View>
)

export default Logo
