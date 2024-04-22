import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import Apis, { authApi, endpoints } from "../../Apis";
import { append } from "domutils";

const {width} = Dimensions.get('window');

const [user, setUser] = useState({
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  avatar: "",
});
const [loading, setLoading] = useState();
const register = async () => {
  setLoading(true);
  try {
    let form = new FormData();
    for (key in user) {
      if (key === "avatar") {
        form.append(key, {
          uri: user[key].uri,
          name: user[key].fileName,
          type: user[key].type,
        });
      } else form.append(key, user[key]);
    }
    const res = await Apis.post(endpoints["register"], form, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    });

    console.info(res.data);

    navigation.navigate("Login");
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const change = (field, value) => {
  setUser((current) => {
    return { ...current, [field]: value };
  });
};
export default function Signup({navigation}) {
  

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute "
        source={require("../../assets/backgroundLogin.png")}
      />
      {/*light*/}
      {/* <View className="flex-row justify-around w-full absolute">
                <Image
                  className="h-[125] w-[50]"
                  source={require("../../assets/ic_app.png")}
                />
                <Image
                  className="h-[160] w-[65]"
                  source={require("../../assets/ic_app.png")}
                />
              </View> */}

      {/*title and form*/}

      <View className="h-full w-full flex justify-around pt-48">
        {/*title*/}
        <View className="flex items-center mb-60">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-4xl"
          >
            Đăng ký
          </Animated.Text>
        </View>
        {/*form*/}
        <View className="flex items-center mb-20 mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput value={user.username} onChangeText={t=>change('username',t)}  placeholder="Username" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput value={user.password} onChangeText={t=>change('password',t)} 
              placeholder="Mật khẩu"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>
          
          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="w-full"
          >
             
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">
                {" "}
                Đăng ký
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(800).springify()}
            className="flex-row justify-center"
          >
            <Text>Bạn đã có tài khoản ? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
              <Text className="text-sky-600">Đăng nhập</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
