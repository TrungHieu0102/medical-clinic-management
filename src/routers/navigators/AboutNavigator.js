import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../screens/Abouts/Profile';
// import Signup from '../../screens/Abouts/Signup';
// import UserInfo from '../../screens/Abouts/UserInfo';

const AboutNavigator = () => {
    const AboutStack = createNativeStackNavigator();
  return (
   <AboutStack.Navigator screenOptions={{headerShown: false}}>
     <AboutStack.Screen name="Profile" component={Profile} />
   </AboutStack.Navigator>
  )
}
export default AboutNavigator