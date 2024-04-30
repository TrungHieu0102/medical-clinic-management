import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import AppointmentDoctorInfo from "../../components/BookAppointment/AppointmentDoctorInfo";
import Colors from "../../assets/color/Colors";
import HorizontalLine from "../../components/Shared/HorizontalLine";
import ActionButton from "../../components/DoctorDetail/ActionButton";
import BookingSection from "../../components/BookAppointment/BookingSection";

const BookAppointment = () => {
  const param = useRoute().params;
  return (
    <ScrollView style={{padding:20,backgroundColor:Colors.white}}>
      <AppointmentDoctorInfo doctor={param.doctor} />
      <ActionButton/>
      <HorizontalLine/>
     <BookingSection doctor={param.doctor} /> 
    </ScrollView>
  );
};

export default BookAppointment;
