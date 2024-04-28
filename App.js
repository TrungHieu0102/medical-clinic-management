import * as React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import TabNavigator from "./src/routers/TabNavigator";
import { useFonts } from "expo-font";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/clerk-expo/dist";
import Login from "./src/screens/Abouts/Login";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    medium: require("../medical-clinic-management/src/assets/fonts/Roboto-Medium.ttf"),
    regular: require("../medical-clinic-management/src/assets/fonts/Roboto-Regular.ttf"),
    bold: require("../medical-clinic-management/src/assets/fonts/Roboto-Bold.ttf"),
    italic: require("../medical-clinic-management/src/assets/fonts/Roboto-Italic.ttf"),
  });
  return (
    <ClerkProvider publishableKey="pk_test_ZmxleGlibGUtam9leS02OS5jbGVyay5hY2NvdW50cy5kZXYk">
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  
  },
});
