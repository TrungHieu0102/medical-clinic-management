import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../screens/Abouts/Profile';
import Login from '../../screens/Abouts/Login';
import Signup from '../../screens/Abouts/Signup';
import SignUpScreen from '../../screens/Abouts/SignUpScreen';


const AboutNavigator = () => {
    const AboutStack = createNativeStackNavigator();
  return (
   <AboutStack.Navigator screenOptions={{headerShown: false}}>
     <AboutStack.Screen name="Login" component={Login} />
     <AboutStack.Screen  name="SignUpScreen" component={SignUpScreen} />
      <AboutStack.Screen name="Profile" component={Profile} /> 

   </AboutStack.Navigator>
  )
}
export default AboutNavigator