import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../screens/Abouts/Login';
import Signup from '../../screens/Abouts/Signup';
import UserInfo from '../../screens/Abouts/UserInfo';

const AboutNavigator = () => {
    const AboutStack = createNativeStackNavigator();
  return (
   <AboutStack.Navigator screenOptions={{headerShown: false}}>
     <AboutStack.Screen name="Login" component={Login} />
      <AboutStack.Screen name="Signup" component={Signup} />
      <AboutStack.Screen name="UserInfo" component={UserInfo} />
   </AboutStack.Navigator>
  )
}
export default AboutNavigator