import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '../../components/Details/Details'

const DetailsNavigator = ({navigation}) => {
const DetailStack = createNativeStackNavigator()
  return (
   <DetailStack.Navigator  screenOptions={{headerShown: true}}>
    <DetailStack.Screen name="Details" component = { Details} />
   </DetailStack.Navigator>
  )
}

export default DetailsNavigator