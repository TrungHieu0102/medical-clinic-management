import {
  View,
  Text,
  FlatList,
  RefreshControl,
 
} from "react-native";
import React, { useEffect, useState } from "react";
// import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalAPI, { authApi, endpoints } from "../../services/GlobalAPI";
import PageHeader from "../../components/Shared/PageHeader";
import AppointmentCardItem from "../../components/Appointment/AppointmentCardItem";

export default function Appointment() {
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
    <View style={{ padding: 20 }}>
      <PageHeader title={"Lịch khám"} backButton={false} />
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
