import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../assets/color/Colors'

const HorizontalLine = () => {
    return (
        <View style={{
            borderBottomWidth: 1,
            borderColor: Colors.LIGHT_GRAY, margin: 5, 
            marginBottom: 15,
            marginTop:15
        }}></View>
      )
}

export default HorizontalLine