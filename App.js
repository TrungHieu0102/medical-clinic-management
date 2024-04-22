import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigator from "./src/routers/TabNavigator";
import SplashScreenView from "./src/screens/SplashScreen/SplashScreenView";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  });
  return <>{isShowSplashScreen ? <SplashScreenView /> : <TabNavigator />
  
  
  }</>;
}

export default App;
