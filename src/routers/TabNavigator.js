import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, User,Calendar,AddSquare } from "iconsax-react-native";
import DashboardNavigator from "./navigators/DashboardNavigator";
import AboutNavigator from "./navigators/AboutNavigator";
import Appointment from "../screens/Booking/Appointment";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Abouts/Login";
import Signup from "../screens/Abouts/Signup";
import DetailsNavigator from "./navigators/DetailsNavigator";
import DoctorNavigator from "./navigators/DoctorNavigator";


const Tabs = createBottomTabNavigator();
const TabNavigator = () => {
  return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "DashboardStack") {
              return (
                <Home size={size} color={focused ? "#3d85c6" : "#676767"} />
              );
            } else if (route.name == "DetailsNavigator") {
              return (
                <User size={size} color={focused ? "#3d85c6" : "#676767"} />
              );
            }
              else if (route.name == "Appointment") {
                return (
                  <Calendar size={size} color={focused ? "#3d85c6" : "#676767"} />
                );
            }
            else if (route.name == "DoctorNavigator") {
              return (
                <AddSquare size={size} color={focused ? "#3d85c6" : "#676767"} />
              );
          }
            
          },
        })}
      >
        <Tabs.Screen name="DashboardStack" component={DashboardNavigator} />
        <Tabs.Screen name="Appointment" component={Appointment} />
        <Tabs.Screen name="DetailsNavigator" component={DetailsNavigator} />       
        <Tabs.Screen name="DoctorNavigator" component={DoctorNavigator} />   
      </Tabs.Navigator>
   
  );
};
export default TabNavigator;
