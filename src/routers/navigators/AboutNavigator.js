import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Abouts/Login";
import Register from "../../screens/Abouts/Register";
import ResetPassword from "../../screens/Abouts/ResetPassword";

const AboutNavigator = () => {
  const AboutStack = createNativeStackNavigator();
  return (
    <AboutStack.Navigator screenOptions={{ headerShown: false }}>
      <AboutStack.Screen name="Login" component={Login} />
      <AboutStack.Screen name="Register" component={Register} />
      <AboutStack.Screen name="ResetPassword" component={ResetPassword} />
    </AboutStack.Navigator>
  );
};
export default AboutNavigator;
