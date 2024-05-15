import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormData from 'form-data'; // Import FormData

import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import MyContext from "../../services/MyContext";
import GlobalAPI, { authApi, endpoints } from "../../services/GlobalAPI";

export default function Login({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, dispatch] = useContext(MyContext);
  const [loading, setLoading] = useState();
  const login = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      data.append('client_id', '3H0hKI5zlzPzdOkcZLregQMGIaR3iuGjzZEFmvjY');
      data.append('client_secret', 'Nw5fUj7fXSNp2Oq9r5Bwsgy4HPF5ix6bqpzytOn6jmskQRXnqYpwSdmsyuEinPq6sTmtZzinWKDEjr0bfELasv1e1vMXEt2q9QnxsfMMXpj8wIi6so4Lh9poJixkUNqo');
      data.append('username', username);
      data.append('password', password);
      data.append('grant_type', "password");

      let res = await GlobalAPI.post(endpoints['login'], data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      console.info(res.data);

      await AsyncStorage.setItem("access_token", res.data.access_token);
      let user = await authApi(res.data.access_token).get(
        endpoints["current_user"]
      );
      console.info(user.data);
      
      dispatch({
        type: "login",
        payload: {
          username: "ssssd23fsess@gmail.com",
        },
      });
      navigation.navigate("TrangChu");
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

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
            <TextInput
              value={username}
              onChangeText={(t) => setUsername(t)}
              placeholder="Tên đăng nhập"
              placeholderTextColor={"gray"}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput
              value={password}
              onChangeText={(t) => setPassword(t)}
              placeholder="Mật khẩu"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            className="w-full"
          >
            {loading === true ? (
              <ActivityIndicator />
            ) : (
              <>
                <Button onPress={login} title="Đăng nhập"></Button>
              </>
            )}
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="flex-row justify-center"
          >
            <Text>Bạn chưa có tài khoản ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="text-sky-600">Đăng ký</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
