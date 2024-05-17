import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import MyContext from "../../services/MyContext";
import { Picker } from "@react-native-picker/picker";
import Colors from "../../assets/color/Colors";
import moment from "moment";
import GlobalAPI, { authApi, endpoints } from "../../services/GlobalAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditUser = () => {
  const navigation = useNavigation();
  const [state, dispatch] = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: state.data.email,
    first_name: state.data.first_name,
    role: "PATIENT",
    last_name: state.data.last_name,
    patient: {
      address: state.data.patient?.address,
      blood_group: state.data.patient?.blood_group,
      date_of_birth: state.data.patient?.date_of_birth,
      gender: state.data.patient?.gender,
      phone_number: state.data.patient?.phone_number,
    },
    username: state.data.username,
  });
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);

  const [startedDate, setStartedDate] = useState(
    getFormatedDate(new Date(), "DD/MM/YYYY")
  );
  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(true);
  };
  const handleChangeStartDate = (date) => {
    const formattedDate = moment(date, "YYYY/MM/DD").format("YYYY-MM-DD");
    change("patient.date_of_birth", formattedDate);
    setOpenStartDatePicker(false);
  };
  const logout = () => {
    dispatch({ type: "logout" });
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
            selected={user.patient.date_of_birth}
            onDateChange={handleChangeStartDate}
            options={{
              backgroundColor: Colors.primary,
              textHeaderColor: "#FFFFFF",
              textDefaultColor: "#FFFFFF",
              selectedTextColor: "#3d85c6",
              mainColor: "#FFFFFF",
              textSecondaryColor: "#FFFFFF",
              borderColor: Colors.primary,
            }}
          />
          <TouchableOpacity onPress={() => setOpenStartDatePicker(false)}>
            <Text style={{ color: "white" }}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
  const change = (field, value) => {
    if (field.startsWith("patient.")) {
      const patientField = field.split(".")[1];
      setUser((current) => ({
        ...current,
        patient: {
          ...current.patient,
          [patientField]: value,
        },
      }));
    } else {
      setUser((current) => ({ ...current, [field]: value }));
    }
  };
  
 const updateUserInformation = async () => {
  try {
    let form = new FormData();
    for (const key in user) {
      if (key === "patient") {
        for (const patientKey in user.patient) {
          form.append(`patient.${patientKey}`, user.patient[patientKey]);
        }
      } else {
        form.append(key, user[key]);
      }
    }

    const access_token = await AsyncStorage.getItem('access_token');
    const res = await authApi(access_token).patch(endpoints["updateInfor"], form, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    logout();
    console.info(res.data);
  } catch (error) {
    
    if (error.response) {
      
      console.error("Server responded with status code:", error.response.status);
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      
      console.error("No response received from server");
    } else {
     
      console.error("Error setting up the request:", error.message);
    }
    console.error("Error details:", error.config);
  } finally {
    setLoading(false);
  }
};
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <View style={{ alignItems: "center", marginVertical: 22 }}>
          <TouchableOpacity>
            <Image
              source={{ uri: user.avatar || "hieu.jpg" }}
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
                value={user.first_name}
                onChangeText={(value) => change("first_name", value)}
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
                value={user.last_name}
                onChangeText={(value) => change("last_name", value)}
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
                value={user.email}
                onChangeText={(value) => change("email", value)}
                editable={true}
              />
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Số điện thoại</Text>
            <View style={styles.inputContainer}>
              <Icon name="phone-outline" style={styles.icon} />
              <TextInput
                style={styles.textInput}
                value={user.patient.phone_number}
                onChangeText={(value) => change("patient.phone_number", value)}
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
                value={user.password}
                editable={false}
                secureTextEntry
              />
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Ngày sinh</Text>
            <View style={styles.inputContainer}>
              <Icon name="calendar" style={styles.icon} />
              <TouchableOpacity onPress={handleOnPressStartDate}>
                <Text style={styles.dateTextInput}>
                  {user.patient.date_of_birth}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Địa chỉ</Text>
            <View style={styles.inputContainer}>
              <Icon name="folder-home" style={styles.icon} />
              <TextInput
                style={styles.textInput}
                value={user.patient.address}
                onChangeText={(value) => change("patient.address", value)}
                editable={true}
              />
            </View>
          </View>
        </View>
        <Text style={styles.label}>Nhóm máu</Text>
        <Picker
          selectedValue={user.patient.blood_group}
          style={styles.picker}
          onValueChange={(itemValue) =>
            change("patient.blood_group", itemValue)
          }
        >
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B" value="B" />
          <Picker.Item label="AB" value="AB" />
          <Picker.Item label="O" value="O" />
        </Picker>
        <Text style={styles.label}>Giới tính</Text>

        <Picker
          selectedValue={user.patient.gender}
          style={styles.picker}
          onValueChange={(itemValue) => change("patient.gender", itemValue)}
        >
          <Picker.Item label="Nam" value="male" />
          <Picker.Item label="Nữ" value="female" />
        </Picker>

        <TouchableOpacity onPress={updateUserInformation}  style={styles.button}>
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
