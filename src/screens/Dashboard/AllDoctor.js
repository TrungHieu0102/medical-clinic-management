import { View, Text,ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI, { endpoints } from "../../services/GlobalAPI";
import PageHeader from "../../components/Shared/PageHeader";
import DoctorList from "../../components/DoctorCategoryList/DoctorList";
import DoctorTab from "../../components/DoctorCategoryList/DoctorTab";
import Colors from "../../assets/color/Colors";


const AllDoctor = () => {
  const [listAllDoctor, setListDoctor] = useState([]);
  const getListDoctor = async () => {
    try {
      const resp = await GlobalAPI.get(endpoints['doctors']);
      if (resp && resp.data) {
        setListDoctor(resp.data.results);
      } else {
        console.error("Response data is undefined");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
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
