import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import GlobalAPI, { endpoints } from "../../services/GlobalAPI";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";

const { width } = Dimensions.get("window");

//TRƯỚC KHI THÊM AVATAR -- ĐOẠN CODE CHẠY BÌNH TH

const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "zzzeze3s",
    email: "ssssd23fsess@gmail.com",
    password: "113579hieM@",
    date_of_birth: "2002-01-02",
    location: "",
    phone: "",
    gender: 1,
    role: 0,
    first_name: "",
    last_name: "",
    avatar: "",
  });
  const [loading, setLoading] = useState(false);

  const register = async () => {
    setLoading(true);
    try {
      let form = new FormData();
      for (const key in user) {
        form.append(key, user[key]);
      }
      Object.keys(user).forEach((key) => {
        console.log(key + ": " + user[key]);
      });

      const res = await GlobalAPI.post(endpoints["register"], form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.info(res.data);
      navigation.navigate("Login");
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Error response data:", error.response.data);
      } else {
        console.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const change = (field, value) => {
    setUser((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={user.username}
        onChangeText={(t) => change("username", t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(t) => change("email", t)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={user.password}
        onChangeText={(t) => change("password", t)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={user.first_name}
        onChangeText={(t) => change("first_name", t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={user.last_name}
        onChangeText={(t) => change("last_name", t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={user.date_of_birth}
        onChangeText={(t) => change("date_of_birth", t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={user.location}
        onChangeText={(t) => change("location", t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={user.phone}
        onChangeText={(t) => change("phone", t)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Avatar"
        value={user.avatar}
        onChangeText={(t) => change("avatar", t)}
      />
      <Picker
        selectedValue={user.gender}
        onValueChange={(t) => change("gender", t)}
        style={styles.picker}
      >
        <Picker.Item label="Select Gender" value={null} />
        <Picker.Item label="Male" value={0} />
        <Picker.Item label="Female" value={1} />
      </Picker>

      <Button title="Register" onPress={register} disabled={loading} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: width - 40,
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: width - 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Register;
