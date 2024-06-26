import { View, Text, Image } from "react-native";
import React from "react";
import PageHeader from "../Shared/PageHeader";
import Colors from "../../assets/color/Colors";
import { Fontisto } from "@expo/vector-icons";
import HorizontalLine from "../Shared/HorizontalLine";
const AppointmentDoctorInfo = ({ doctor }) => {
  return (
    <View>
      <PageHeader title={"Đăng ký lịch khám"} />
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
        }}
      >
        <Image
          source={{ uri: doctor.user.avatar }}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "medium",
              marginBottom: 8,
            }}
          >
            {doctor.user.last_name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Fontisto name="email" size={22} color={Colors.primary} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "regular",
                color: Colors.GRAY,
                width: "70%",
              }}
            >
              {doctor.user.email}
            </Text>
          </View>
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
};

export default AppointmentDoctorInfo;
