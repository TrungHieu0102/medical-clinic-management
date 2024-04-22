import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home,More,User } from "iconsax-react-native";
import DashboardNavigator from "./navigators/DashboardNavigator";
import DetailsNavigator from "./navigators/DetailsNavigator";
import AboutNavigator from "./navigators/AboutNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const TabNavigator = () => {
  const Tabs = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "DashboardStack") {
              return <Home size={size} color={focused ? "#3d85c6" : "#676767"} />;
            }
            else if (route.name === "DetailsStack") {
              return <More size={size} color={focused ? "#3d85c6" : "#676767"} />;
            }
            else if(route.name=="AboutStack"){
              return <User size={size} color={focused ? "#3d85c6" : "#676767"}/>
            }
          },
        })}
      >
        <Tabs.Screen name="DashboardStack" component={DashboardNavigator} options={{headerTitle: "Dashboard"}}/>
        <Tabs.Screen name="DetailsStack" component={DetailsNavigator} options={{headerTitle:"Detail"}} />
        <Tabs.Screen name="AboutStack" component={AboutNavigator} options={{headerTitle:"About"}} />
      </Tabs.Navigator>
   
     
      
  
    </NavigationContainer>
  );
};
export default TabNavigator;
