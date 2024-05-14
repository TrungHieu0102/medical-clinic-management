import { SafeAreaView, StyleSheet } from "react-native";
import TabNavigator from "./src/routers/TabNavigator";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MyUserReducer from "./src/services/MyUserReducer";
import MyContext from "./src/services/MyContext";
import React, { useReducer } from "react";
import Login from "./src/screens/Abouts/Login";
import AboutNavigator from "./src/routers/navigators/AboutNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    medium: require("../medical-clinic-management/src/assets/fonts/Roboto-Medium.ttf"),
    regular: require("../medical-clinic-management/src/assets/fonts/Roboto-Regular.ttf"),
    bold: require("../medical-clinic-management/src/assets/fonts/Roboto-Bold.ttf"),
    italic: require("../medical-clinic-management/src/assets/fonts/Roboto-Italic.ttf"),
  });
  const [user, dispatch] = useReducer(MyUserReducer, null);
  return (
    <MyContext.Provider value={[user, dispatch]}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
        {user===null?<>
          <AboutNavigator/>
      </>:<>
       <TabNavigator/>
      </>}
        </NavigationContainer>
      </SafeAreaView>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
