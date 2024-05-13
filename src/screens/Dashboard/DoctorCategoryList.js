import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../../components/Shared/PageHeader";
import DoctorTab from "../../components/DoctorCategoryList/DoctorTab";
import GlobalAPI from "../../services/GlobalAPI";
import Colors from "../../assets/color/Colors";
import DoctorList from "../../components/DoctorCategoryList/DoctorList";

const DoctorCategoryList = () => {
  const param = useRoute().params;
  const [doctorList, setDoctorList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoctorsByCategory();
  }, []);

  const getDoctorsByCategory = async () => {
    try {
      const resp = await GlobalAPI.getDoctors();
      const filteredDoctors = resp.data.results.filter(
        (doctor) => doctor.category === param?.categoryName
      );
      setDoctorList(filteredDoctors);
      setLoading(false);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách bác sĩ theo danh mục:", error);
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={param?.categoryName} />
      <DoctorTab />
      {loading ? (
        <ActivityIndicator size={"large"} color={Colors.primary} />
      ) : (
        <DoctorList doctorList={doctorList} />
      )}
    </View>
  );
};

export default DoctorCategoryList;
