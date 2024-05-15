import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
export default function Header() {
  return (
    <View style={{display:'flex',flexDirection:'row',
    alignItems:'center',justifyContent:'space-between'}}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:7,
            alignItems:'center'
            }}>
            <Image source={{uri:"https://res.cloudinary.com/dpxa1i7nw/image/upload/v1/media/categories/2024/05/09/physiotherapy_10570311_aqamqb"}}
            style={{width:45,height:45,borderRadius:99}}
            />
            <View>
                <Text style={{fontFamily:'regular'}}>Xin chào,👋 </Text>
                <Text style={{
                    fontSize:18,
                    fontFamily:'bold',
                    }}>
               Tên</Text>

            </View>
        </View>
        <Ionicons name="notifications-outline" 
        size={28} 
        color="black" />
    </View>
  )
}