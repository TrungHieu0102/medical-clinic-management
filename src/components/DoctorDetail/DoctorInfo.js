import { View, Text, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
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

        <FlatList
          data={doctor.attributes.categories.data}
          horizontal={true}
          renderItem={({ item }) => (
            <Text
              style={{
                marginRight: 10,  
                color: Colors.GRAY,
              }}
            >
              {item.attributes.Name},
            </Text>
          )}
        />

        <HorizontalLine />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={22} color={Colors.PRIMARY} />
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
          <Ionicons name="time" size={22} color={Colors.PRIMARY} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "regular",
              color: Colors.GRAY,
            }}
          >
            Mon Sun | 11AM - 8 PM
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

        <SubHeading subHeadingTitle={"About"} />
        <Text>{doctor.attributes.Description}</Text>
      </View>
    )
  );
};

export default DoctorInfo;
