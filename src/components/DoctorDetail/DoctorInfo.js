import { View, Text, FlatList } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import HorizontalLine from "../Shared/HorizontalLine";
import ActionButton from "./ActionButton";
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
          {doctor.attributes.Name}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Text style={{fontFamily:"regular"}}>Chuyên khoa : </Text>
          <FlatList
            data={doctor.attributes.categories.data}
            horizontal={true}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: Colors.SECONDARY,
                  padding: 3,
                  borderRadius: 100,
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 5,
                    color: Colors.GRAY,
                  }}
                >
                  {item.attributes.Name}
                </Text>
              </View>
            )}
          />
        </View>

        <HorizontalLine />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={22} color={Colors.primary} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "regular",
              color: Colors.GRAY,
            }}
          >
            {doctor.attributes.Address}
          </Text>
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
          <Ionicons name="time" size={22} color={Colors.primary} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "regular",
              color: Colors.GRAY,
            }}
          >
            Thứ 2 - Thứ 7 | 8 AM - 5 PM
          </Text>
        </View>

        <ActionButton />

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
        <Text>{doctor.attributes.Description}</Text>
      </View>
    )
  );
};

export default DoctorInfo;
