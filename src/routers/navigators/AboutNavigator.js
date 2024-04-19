import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../components/Abouts/Login';

const AboutNavigator = () => {
    const AboutStack = createNativeStackNavigator();
  return (
   <AboutStack.Navigator>
    <AboutStack.Screen name ="About" component={Login}/>
   </AboutStack.Navigator>
  )
}
export default AboutNavigator