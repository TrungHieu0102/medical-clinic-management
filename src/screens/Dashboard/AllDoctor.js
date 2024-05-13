import { View, Text,ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../services/GlobalAPI";
import PageHeader from "../../components/Shared/PageHeader";
import DoctorList from "../../components/DoctorCategoryList/DoctorList";
import DoctorTab from "../../components/DoctorCategoryList/DoctorTab";
import Colors from "../../assets/color/Colors";


const AllDoctor = () => {
  const [listAllDoctor, setListDoctor] = useState([]);
  const getListDoctor = async () => {
    try {
      const response = await GlobalAPI.getDoctors();
      setListDoctor(response.data.results);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách bác sĩ:", error);
    }
  };
  useEffect(() => {
    getListDoctor();
  }, []);
  return (
    <View style={{padding:20}}>
     <PageHeader title={"Danh sách tất cả bác sĩ"}/>
     <DoctorTab />
      {!listAllDoctor?.length ? (
        <ActivityIndicator size={"large"} color={Colors.primary} />
      ) : (
      <DoctorList doctorList={listAllDoctor}/>
      )}
    </View>
  );
};

export default AllDoctor;
