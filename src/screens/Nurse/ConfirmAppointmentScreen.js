import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GlobalAPI, { authApi, endpoints } from "../../services/GlobalAPI";
import { useNavigation } from "@react-navigation/native";
import AppointmentList from "../../components/Nurse/AppointmentList";
import SearchAppointmentList from "../../components/Nurse/SearchAppointmentList";
import Colors from "../../assets/color/Colors";
import PageHeader from "../../components/Shared/PageHeader";
import { useFocusEffect } from '@react-navigation/native';
import AppointmentCardItem from "../../components/Appointment/AppointmentCardItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConfirmAppointmentScreen = ({ route }) => {
  const [appointments, setAppointments] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const appointmentList = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('access_token');
        if (!accessToken) {
          console.error('Access token not found in AsyncStorage');
          return;
        } 
        
        const response = await authApi(accessToken).get(endpoints.appointments);
        // console.log('Appointments data:', response.data.results);
        setAppointments(response.data.results);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    
    appointmentList();
  }, []);
  
  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const accessToken = await AsyncStorage.getItem('access_token');
      if (!accessToken) {
        console.error('Access token not found in AsyncStorage');
        return;
      }    
      const response = await authApi(accessToken).get(endpoints.appointments);
      console.log('Appointments data:', response.data.results);
      setAppointments(response.data.results);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={appointments}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        renderItem={({ item }) => (
          <AppointmentCardItem
            appointment={item}
            doctorID={item.doctor.id}
          />
        )}
      />
    </View>
  );
}
export default ConfirmAppointmentScreen;
