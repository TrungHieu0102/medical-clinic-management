import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "./SubHeading";
import GlobalAPI from "../../services/GlobalAPI";
import DoctorItem from "./DoctorItem";
import { useNavigation } from "@react-navigation/native";

const SpecialDoctor = () => {
  const navigation = useNavigation();
  const [doctorList, setDoctorList] = useState([]);
  const getSpecialDoctors = () => {
    GlobalAPI.getSpecialDoctors().then((resp) => {
      setDoctorList(resp.data.data);
    });
  };
  useEffect(() => {
    getSpecialDoctors();
  }, []);
  return (
    doctorList && (
      <View style={{ marginTop: 10 }}>
        <SubHeading subHeadingTitle={"Các Bác sĩ hàng đầu"} />
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
