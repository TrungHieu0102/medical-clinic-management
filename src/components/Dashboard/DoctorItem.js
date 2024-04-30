import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../assets/color/Colors";

const DoctorItem = ({ doctor }) => {
  return (
    <View
      style={{
        width: 200,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 10,
        marginRight: 15,
      }}
    >
      <Image
        source={{ uri: doctor.attributes.image.data[0].attributes.url }}
        style={{
          width: "100%",
          height: 110,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View>
        <Text style={{ fontFamily: "bold", fontSize: 16, fontWeight: 400 }}>
          {doctor.attributes.Name}
        </Text>
        <Text
          style={{
            fontFamily: "italic",
            fontSize: 14,
            fontWeight: 200,
            color: Colors.GRAY,
          }}
        >
          {doctor.attributes.Address}
        </Text>
      </View>
    </View>
  );
};

export default DoctorItem;
