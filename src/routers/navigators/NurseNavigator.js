import { View, Text } from 'react-native'
import React from 'react'
import ConfirmAppointmentScreen from '../../screens/Nurse/ConfirmAppointmentScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentDetail from '../../screens/Nurse/AppointmentDetail';

const NurseNavigator = () => {
    const NurseStack = createNativeStackNavigator();
    return (
      <NurseStack.Navigator screenOptions={{ headerShown: false }}>
        <NurseStack.Screen
          name="ConfirmAppointmentScreen"
          component={ConfirmAppointmentScreen}
        />
         <NurseStack.Screen
          name="AppointmentDetail"
          component={AppointmentDetail}
        />
      </NurseStack.Navigator>
    );
}

export default NurseNavigator