import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  TextInput,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { imagesDataURL } from "../../assets/constants/data";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import MyContext from "../../services/MyContext";

const EditUser = () => {
  const navigation = useNavigation();
  const [state, dispatch] = useContext(MyContext);

  // Initialize state with default values
  const [selectedImage, setSelectedImage] = useState(state.data.avatar);
  const [firstName, setFirstName] = useState(state.data.first_name );
  const [lastName, setLastName] = useState(state.data.last_name );
  const [email, setEmail] = useState(state.data.email );
  const [password, setPassword] = useState(state.data.password );
  const [country, setCountry] = useState(state.data.patient.address);
  const [openStartDatePicker, setOpenStartDatePicker] = useState(state.data.patient.date_of_birth);
  const [selectedStartDate, setSelectedStartDate] = useState(
    state.birthdate || "01/01/1990"
  );
  const [startedDate, setStartedDate] = useState(
    getFormatedDate(new Date(), "DD/MM/YYYY")
  );

  const handleChangeStartDate = (propDate) => {
    setStartedDate(propDate);
    setSelectedStartDate(propDate);
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
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    const updatedUser = {
      firstName,
      lastName,
      email,
      password,
      country,
      birthdate: selectedStartDate,
      avatar: selectedImage,
    };

    try {
      // Assume updateUser is a function that sends the updated user data to the server
      await updateUser(updatedUser);
      // Update the context or navigate away if needed
      dispatch({ type: "UPDATE_USER", payload: updatedUser });
      navigation.goBack();
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const renderDatePicker = () => (
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <View style={{ alignItems: "center", marginVertical: 22 }}>
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

        <View style={{ marginVertical: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>First Name</Text>
            <View style={styles.inputContainer}>
              <Icon name="account-outline" style={styles.icon} />
              <TextInput
                style={styles.textInput}
                value={firstName}
                onChangeText={(value) => setFirstName(value)}
                editable={true}
              />
            </View>
          </View>


          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Last Name</Text>
            <View style={styles.inputContainer}>
              <Icon name="account-outline" style={styles.icon} />
              <TextInput
                style={styles.textInput}
                value={lastName}
                onChangeText={(value) => setLastName(value)}
                editable={true}
              />
            </View>
          </View>
          

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <Icon name="email-outline" style={styles.icon} />
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
              <Icon name="lock-outline" style={styles.icon} />
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
              <Icon name="calendar" style={styles.icon} />
              <TouchableOpacity onPress={handleOnPressStartDate}>
                <Text style={styles.dateTextInput}>{selectedStartDate}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Địa chỉ</Text>
            <View style={styles.inputContainer}>
              <Icon name="folder-home" style={styles.icon} />
              <TextInput
                style={styles.textInput}
                value={country}
                onChangeText={(value) => setCountry(value)}
                editable={true}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
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
