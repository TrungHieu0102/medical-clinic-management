import { View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "./SubHeading";
import GlobalAPI, { endpoints } from "../../services/GlobalAPI";
import DoctorItem from "./DoctorItem";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const SpecialDoctor = () => {
  const navigation = useNavigation();
  const [doctorList, setDoctorList] = useState([]);

  const getSpecialDoctors = async () => {
    try {
      const resp = await GlobalAPI.get(endpoints['doctors']);
      if (resp && resp.data) {
        const filteredDoctors = resp.data.results.filter(
          (doctor) => doctor.price > 100
        );
        setDoctorList(filteredDoctors);
      } else {
        console.error("Response data is undefined");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    getSpecialDoctors();
  }, []);

  return (
    doctorList && (
      <View style={{ marginTop: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SubHeading subHeadingTitle={"Các Bác sĩ hàng đầu"} />

          <TouchableOpacity
            onPress={() => navigation.navigate("ListAllDoctor")}
            style={{
              marginBottom: 15,
            }}
          >
            <MaterialIcons name="navigate-next" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={doctorList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DoctorDetail", {
                  doctor: item,
                })
              }
            >
              <DoctorItem doctor={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  );
};

export default SpecialDoctor;
