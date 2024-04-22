import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../components/Abouts/Login';
import Signup from '../../components/Abouts/Signup';

const AboutNavigator = () => {
    const AboutStack = createNativeStackNavigator();
  return (
   <AboutStack.Navigator screenOptions={{headerShown: false}}>
     <AboutStack.Screen name="Login" component={Login} />
      <AboutStack.Screen name="Signup" component={Signup} />
   </AboutStack.Navigator>
  )
}
export default AboutNavigator