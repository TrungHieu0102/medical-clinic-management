import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import PageHeader from "../../components/Shared/PageHeader";
import DoctorInfo from "../../components/DoctorDetail/DoctorInfo";
import Colors from "../../assets/color/Colors";

const DoctorDetail = () => {
  const [doctor, setDoctor] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params ) {
      setDoctor(route.params.doctor);
      
    }
  }, [route.params]);

  return (
    doctor && (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <ScrollView>
          <View style={{ position: "absolute", zIndex: 10, margin: 15 }}>
            <PageHeader title={""} />
          </View>
          <View>
            <Image
              source={{ uri: doctor.user.avatar }}
              style={{
                width: "100%",
                height: 260,
              }}
            />

            <View
              style={{
                marginTop: -20,
                backgroundColor: Colors.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
              }}
            >
              <DoctorInfo doctor={doctor} />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BookAppointment", {
              doctor: doctor,
            })
          }
          style={{
            padding: 13,
            backgroundColor: Colors.primary,
            margin: 10,
            borderRadius: 10,
            left: 0,
            right: 0,
            marginBottom: 10,
            zIndex: 20,
          }}
        >
          <Text
            style={{
              color: Colors.white,
              textAlign: "center",
              fontFamily: "medium",
              fontSize: 17,
            }}
          >
            Đăng ký lịch khám
          </Text>
        </TouchableOpacity>
      </View>
    )
    
  );
};

export default DoctorDetail;
