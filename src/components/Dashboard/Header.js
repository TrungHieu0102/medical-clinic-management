import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import MyContext from "../../services/MyContext";
export default function Header() {
  const [state] = useContext(MyContext);
// console.log(state.data.groups[0].name)
// console.log(state.data.patient.blood_group)
// console.log(state.data.patient.phone_number)
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 7,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: state.data.avatar || "https://via.placeholder.com/45" }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text style={{ fontFamily: "regular" }}>Xin chào,👋 </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "bold",
            }}
          >
            {state.data.first_name}  {state.data.last_name} 
          </Text>
        </View>
      </View>
      <Ionicons name="notifications-outline" size={28} color="black" />
    </View>
  );
}
