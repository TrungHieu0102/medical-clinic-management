import { View, Text,ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../services/GlobalAPI";
import PageHeader from "../../components/Shared/PageHeader";
import DoctorList from "../../components/DoctorCategoryList/DoctorList";
import DoctorTab from "../../components/DoctorCategoryList/DoctorTab";
import Colors from "../../assets/color/Colors";


const AllDoctor = () => {
  const [listAllDoctor, setListDoctor] = useState([]);
  const getListDoctor = () => {
    GlobalAPI.getAllDoctors().then((resp) => {
      setListDoctor(resp.data.data);
    });
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
