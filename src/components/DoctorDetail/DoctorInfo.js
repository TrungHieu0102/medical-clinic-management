import { View, Text } from "react-native";
import React from "react";
import Colors from "../../assets/color/Colors";
import SubHeading from "../Dashboard/SubHeading";

const DoctorInfo = ({ doctor }) => {
  return (
    doctor && (
      <View>
        <Text
          style={{
            fontSize: 23,
            fontFamily: "bold",
          }}
        >
          {doctor.user.first_name} {doctor.user.last_name}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "regular" }}>Chuyên khoa: {doctor.category}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "regular" }}>Địa chỉ: {doctor.user.location}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <Text style={{ fontFamily: "regular" }}>Giờ làm việc: Thứ 2 - Thứ 7 | 8 AM - 5 PM</Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            marginTop: 15,
            borderColor: Colors.LIGHT_GRAY,
            margin: 5,
            marginBottom: 15,
          }}
        ></View>

        <SubHeading subHeadingTitle={"Giới thiệu"} />
        <Text>{doctor.description}</Text>
      </View>
    )
  );
};

export default DoctorInfo;
