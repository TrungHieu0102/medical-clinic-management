import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../assets/color/Colors'

const SubHeading = ({subHeadingTitle}) => {
  return (
    <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "bold",
            fontWeight: 400,
           
          }}
        >
          {subHeadingTitle}
        </Text>
        <Text
          style={{
            fontFamily: "italic",
            color: Colors.primary,
          }}
        >
          Xem thêm
        </Text>
      </View>
  )
}

export default SubHeading