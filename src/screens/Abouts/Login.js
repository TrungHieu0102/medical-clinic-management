import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import SignInWithOAuth from "../../components/SignInWithOAuth";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute "
        source={require("../../assets/backgroundLogin.png")}
      />

      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/*title*/}
        <View className="flex items-center mb-60">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-4xl"
          >
            Đăng nhập
          </Animated.Text>
        </View>
        {/*form*/}
        <View className="flex items-center mb-20 mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>


          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            className="w-full"
          >
             <SignInWithOAuth/>
          </Animated.View>

          
          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="flex-row justify-center"
          >
            <Text>Bạn chưa có tài khoản ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
              <Text className="text-sky-600">Đăng ký</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
