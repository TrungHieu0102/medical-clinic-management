import { View, Text, ActivityIndicator,FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../../components/Shared/PageHeader";
import DoctorTab from "../../components/DoctorCategoryList/DoctorTab";
import { Global } from "iconsax-react-native";
import GlobalAPI from "../../services/GlobalAPI";
import Colors from "../../assets/color/Colors";
import DoctorList from "../../components/DoctorCategoryList/DoctorList";

const DoctorCategoryList = () => {
  const param = useRoute().params;
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctorsByCategory();
  }, []);
  const getDoctorsByCategory = () => {
    GlobalAPI.getDoctorsByCategory(param?.categoryName).then((resp) => {
     
      setDoctorList(resp.data.data);
    });
  };
  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={param?.categoryName} />
      <DoctorTab />
      {!doctorList?.length ? (
        <ActivityIndicator size={"large"} color={Colors.primary} />
      ) : (
      <DoctorList doctorList={doctorList}/>
      )}
    </View>
  );
};

export default DoctorCategoryList;
