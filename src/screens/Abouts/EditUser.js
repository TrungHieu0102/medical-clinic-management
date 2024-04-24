import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  TextInput,
  Modal,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { imagesDataURL } from "../../assets/constants/data";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import styles from "./styles";
const EditUser = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
  const [name, setName] = useState("Trung Hieu");
  const [email, setEmail] = useState("trunghieu@gmail.com");
  const [password, setPassword] = useState("randompassword");
  const [country, setCountry] = useState("VietNam");
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  const handleChangeStartDate = (propDate) => {
    setStartedDate(propDate);
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  function renderDatePicker() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              selected={startedDate}
              onDateChanged={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
              options={{
                backgroundColor: "#3d85c6",
                textHeaderColor: "#FFFFFF",
                textDefaultColor: "#FFFFFF",
                selectedTextColor: "#3d85c6",
                mainColor: "#FFFFFF",
                textSecondaryColor: "#FFFFFF",
                borderColor: "rgba(122, 146, 165, 0.1)",
              }}
            />
            <TouchableOpacity onPress={handleOnPressStartDate}>
              <Text style={{ color: "white" }}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      ></View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <View
          style={{
            alignItems: "center",
            marginVertical: 22,
          }}
        >
          {/* avatar */}

          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{ uri: selectedImage }}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: "#3d85c6",
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}
            >
              <MaterialIcons name="photo-camera" size={32} />
            </View>
          </TouchableOpacity>
        </View>

        {/* user infor */}

        <View style={{ marginVertical: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Họ và tên</Text>
            <View style={styles.inputContainer}>
            <Icon
                name="account-outline"
                style={styles.icon}
              />
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={(value) => setName(value)}
                editable={true}
              />
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
            <Icon
                name="email-outline"
                style={styles.icon}
              />
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={(value) => setEmail(value)}
                editable={true}
              />
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Mật khẩu</Text>
            
            <View style={styles.inputContainer}>
            <Icon
                name="lock-outline"
                style={styles.icon}
              />
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={(value) => setPassword(value)}
                editable={true}
                secureTextEntry
              />
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Ngày sinh</Text>
            
            <View style={styles.inputContainer}>
            <Icon
                name="calendar"
                style={styles.icon}
              />
              <TouchableOpacity onPress={handleOnPressStartDate}>
                <Text style={styles.dateTextInput}>{startedDate}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Địa chỉ</Text>
            <View style={styles.inputContainer}>
              <Icon
                name="folder-home"
                style={styles.icon}
              />
              <TextInput
                style={styles.textInput}
                value={country}
                onChangeText={(value) => setCountry(value)}
                editable={true}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Lưu
          </Text>
        </TouchableOpacity>

        {renderDatePicker()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditUser;
