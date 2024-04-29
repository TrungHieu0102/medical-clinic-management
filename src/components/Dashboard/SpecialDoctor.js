import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "./SubHeading";
import GlobalAPI from "../../services/GlobalAPI";
import DoctorItem from "./DoctorItem";

const SpecialDoctor = () => {
  const [doctorList, setDoctorList] = useState([]);
  const getSpecialDoctors = () => {
    GlobalAPI.getSpecialDoctors().then((resp) => {
     setDoctorList(resp.data.data)
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
          renderItem={({ item, index }) => <DoctorItem doctor={item} />}
        />
      </View>
    )
  );
};

export default SpecialDoctor;
