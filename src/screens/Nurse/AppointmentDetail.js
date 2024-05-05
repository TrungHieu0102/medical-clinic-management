import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import GlobalAPI from "../../services/GlobalAPI";

const AppointmentDetail = () => {
  const [appointment, setAppointment] = useState();
  const param = useRoute().params;
  const navigation = useNavigation();
  useEffect(() => {
    setAppointment(param.appointment);
  }, []);


  const handleConfirm = () => {
    // Xử lý xác nhận cuộc hẹn (ví dụ: gửi y tá đến API để xác nhận)
    console.log("Confirmed appointment:");
  };
const deleteAppointment = (id) => {
    GlobalAPI.deleteAppointments(id);
    // Toast.show("Hủy lịch khám thành công !", Toast.LONG);
    navigation.goBack();
  };
  return (
    appointment && (
      <View>
        <Text>User: {appointment.attributes.Username}</Text>
        <Text>Email: {appointment.attributes.Email}</Text>
        <Text>Date: {appointment.attributes.Date}</Text>
        <Text>Time: {appointment.attributes.Time}</Text>
        <Button title="Xác nhận" onPress={handleConfirm} />
        <Button title="Từ chối" onPress={() => deleteAppointment(appointment.id)} />
      </View>
    )
  );
};

export default AppointmentDetail;
