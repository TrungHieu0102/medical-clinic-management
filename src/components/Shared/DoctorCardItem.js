import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../../assets/color/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const DoctorCardItem = ({ doctor }) => {
  const navigation = useNavigation();

  return (
      <View
        style={{
          backgroundColor: Colors.white,
          padding: 10,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <Image
            source={{ uri: doctor.user.avatar }}
            style={{ width: 110, height: 120, borderRadius: 10 }}
          />
          <View style={{ marginTop: 10 }}>
            {doctor.price > 100 ? (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: Colors.SECONDARY,
                  padding: 5,
                  borderRadius: 99,
                  paddingHorizontal: 10,
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="shield-checkmark-sharp"
                  size={18}
                  color={Colors.primary}
                />
                <Text style={{ fontFamily: "regular", color: Colors.primary }}>
                  Bác sĩ hàng đầu
                </Text>
              </View>
            ) : null}
            <Text style={{ fontSize: 17, fontFamily: "bold", marginTop: 5 }}>
              {doctor.user.first_name} {doctor.user.last_name}
            </Text>

            <Text
              style={{
                color: Colors.GRAY,
                fontFamily: "regular",
                marginTop: 1,
              }}
            >
              {doctor.category}
            </Text>

            <Text
              style={{
                fontFamily: "regular",
                color: Colors.primary,
                marginTop: 3,
              }}
            >
              Giá: {doctor.price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BookAppointment", {
              doctor: doctor,
            })
          }
          style={{
            marginTop: 10,
            padding: 10,
            backgroundColor: Colors.SECONDARY,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              textAlign: "center",
              fontFamily: "bold",
            }}
          >
            Đặt lịch ngay
          </Text>
        </TouchableOpacity>
      </View>
  );
};

export default DoctorCardItem;
