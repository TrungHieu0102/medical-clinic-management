import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MedicineListScreen from "../../screens/Medicine/MedicineListScreen";
const DoctorNavigator = () => {
  const DoctorStack = createNativeStackNavigator();
  return (
    <DoctorStack.Navigator screenOptions={{ headerShown: false }}>
      <DoctorStack.Screen
        name="MedicineListScreen"
        component={MedicineListScreen}
      />
    </DoctorStack.Navigator>
  );
};

export default DoctorNavigator;
