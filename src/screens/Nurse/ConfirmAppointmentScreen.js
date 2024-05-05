import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import GlobalAPI from "../../services/GlobalAPI";
import { useNavigation } from "@react-navigation/native";
import AppointmentList from "../../components/Nurse/AppointmentList";
import SearchAppointmentList from "../../components/Nurse/SearchAppointmentList";
import Colors from "../../assets/color/Colors";
import PageHeader from "../../components/Shared/PageHeader";
import { useFocusEffect } from '@react-navigation/native';

const ConfirmAppointmentScreen = ({ route }) => {
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const navigation = useNavigation();
  const [searchAppointment, setSearchAppointments] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const getPendingAppointments = () => {
    GlobalAPI.getAppointmentsPending().then((resp) => {
      setPendingAppointments(resp.data.data);
      console.log("get pending appoinment")
    });
  };
  useEffect(() => {
    getPendingAppointments();
  }, []);

  const handlePressItem = (item) => {
    navigation.navigate("AppointmentDetail", { appointment: item });
  };

  const searchAppointments = async () => {
    try {
      const response = await GlobalAPI.getAppointmentsPendingByParam(
        searchTerm
      );
      setSearchAppointments(response.data.data);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm ", error);
    }
  };
  const handleRefresh = () => {
    setRefreshing(true);
    getPendingAppointments();
    setRefreshing(false);
    // Toast.show("Làm mới thành công !", Toast.LONG);
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        searchAppointments();
      } else {
        getPendingAppointments();
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  useFocusEffect(
    React.useCallback(() => {
      getPendingAppointments();
    }, [])
  );

  return (
    pendingAppointments && (
      <View style={styles.container}
      >
        <PageHeader title={"Lịch khám"} backButton={false} />
        <AppointmentList
          appointments={pendingAppointments}
          onPressItem={handlePressItem}
          toggleModal={toggleModal}
          handleRefresh={handleRefresh}
          refreshing={refreshing}
        />
        <SearchAppointmentList
          visible={isModalVisible}
          onClose={toggleModal}
          searchAppointment={pendingAppointments}
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onPressItem={handlePressItem}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: "relative",
    backgroundColor: "white",
  },
  addButtonContainer: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  addButton: {
    padding: 10,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 100,
    marginRight: 4,
  },
  payButton: {
    padding: 10,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 10,
  },
  payButtonText: {
    color: Colors.primary,
    textAlign: "center",
    fontFamily: "medium",
    fontSize: 17,
  },
});

export default ConfirmAppointmentScreen;
