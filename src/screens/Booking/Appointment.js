import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo';
import AppointmentCardItem from '../../components/Appointment/AppointmentCardItem';
import PageHeader from '../../components/Shared/PageHeader';
import GlobalAPI from '../../services/GlobalAPI';

export default function Appointment() {

  const {isLoaded,isSignedIn,user}=useUser();
  const [appointmentList,setAppointmentList]=useState([]);
  const getUserAppointments=()=>{
    GlobalAPI.getUserAppointments(user.primaryEmailAddress.emailAddress)
    .then(resp=>{
      console.log("data")
      setAppointmentList(resp.data.data)
    })
  }
  useEffect(()=>{
    if(user.firstName)
    {
      getUserAppointments();
    }
  },[user])
  return (
    <View style={{padding:20}}>
      <PageHeader title={'Lịch khám'} backButton={false} />
    
      <FlatList
        data={appointmentList}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
          <AppointmentCardItem appointment={item} />
        )}
      />
    </View>
  )
}