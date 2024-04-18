import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import About from '../../components/Abouts/About';

const AboutNavigator = () => {
    const AboutStack = createNativeStackNavigator();
  return (
   <AboutStack.Navigator>
    <AboutStack.Screen name ="About" component={About}/>
   </AboutStack.Navigator>
  )
}
export default AboutNavigator