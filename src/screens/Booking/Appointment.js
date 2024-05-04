import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import AppointmentCardItem from "../../components/Appointment/AppointmentCardItem";
import PageHeader from "../../components/Shared/PageHeader";
import GlobalAPI from "../../services/GlobalAPI";

export default function Appointment() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [appointmentList, setAppointmentList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getUserAppointments = () => {
    GlobalAPI.getUserAppointments(user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        console.log("Get Appointments");
        setAppointmentList(resp.data.data);
      }
    );
  };
  const handleRefresh = () => {
    setRefreshing(true);
    getUserAppointments();
    setRefreshing(false);
    // Toast.show("Làm mới thành công !", Toast.LONG);
  };
  useEffect(() => {
    if (user.firstName) {
      getUserAppointments();
    }
  }, [user]);
  const deleteAppointment = (id) => {
    GlobalAPI.deleteAppointments(id);
    // Toast.show("Hủy lịch khám thành công !", Toast.LONG);
  };
  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={"Lịch khám"} backButton={false} />

      <FlatList
        data={appointmentList}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        renderItem={({ item }) => (
          <AppointmentCardItem
            appointment={item}
            deleteAppointment={deleteAppointment}
          />
        )}
      />
    </View>
  );
}
