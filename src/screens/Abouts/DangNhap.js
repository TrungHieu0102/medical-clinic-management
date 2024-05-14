import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { AsyncStorage } from "react-native";

const DangNhap = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <View>
      <Text>DangNhap</Text>
    </View>
  );
};

export default DangNhap;
