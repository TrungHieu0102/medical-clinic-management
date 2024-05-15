import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../assets/color/Colors';
export default function ActionButton() {

    const actionButtonList=[
        {
            id:1,
            name:'Website',
            icon:'earth'
        },
        {
            id:2,
            name:'Email',
            icon:'chatbubble-ellipses'
        },
        {
            id:3,
            name:'Phone',
            icon:'call-outline'
        },
        {
            id:4,
            name:'Direction',
            icon:'map'
        },
        {
            id:5,
            name:'Share',
            icon:'share'
        },

    ]

  return (
    <View style={{marginTop:15}}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
  {actionButtonList.map((item, index) => (
    <TouchableOpacity key={index} style={{ alignItems: 'center', marginBottom: 15, width: '20%' }}>
      <View style={{
        backgroundColor: Colors.SECONDARY,
        padding: 13,
        borderRadius: 99,
        alignItems: 'center',
        width: 55
      }}>
        <Ionicons name={item.icon} size={25} color={Colors.primary} />
      </View>
      <Text style={{
        fontFamily: 'medium',
        marginTop: 5,
        textAlign: 'center'
      }}>{item.name}</Text>
    </TouchableOpacity>
  ))}
</View>

    </View>
  )
}