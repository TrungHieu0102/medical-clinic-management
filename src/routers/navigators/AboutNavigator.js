import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../screens/Abouts/Profile';
import Login from '../../screens/Abouts/Login';
import SignUpScreen from '../../screens/Abouts/SignUpScreen';
import DangNhap from '../../screens/Abouts/DangNhap';
import Register from '../../screens/Abouts/Register';
import TrangChu from '../../screens/Abouts/TrangChu';



const AboutNavigator = () => {
    const AboutStack = createNativeStackNavigator();
  return (
   <AboutStack.Navigator screenOptions={{headerShown: false}}>
     <AboutStack.Screen name="Login" component={Login} />
     <AboutStack.Screen  name="SignUpScreen" component={SignUpScreen} />
      <AboutStack.Screen name="Profile" component={Profile} /> 
      <AboutStack.Screen name="Register" component={Register} /> 
      <AboutStack.Screen name="DangNhap" component={DangNhap} /> 
      <AboutStack.Screen name="TrangChu" component={TrangChu} /> 

   </AboutStack.Navigator>
  )
}
export default AboutNavigator