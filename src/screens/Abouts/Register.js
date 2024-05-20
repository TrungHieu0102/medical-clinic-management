import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  Modal,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import GlobalAPI, { endpoints } from "../../services/GlobalAPI";
import { Picker } from "@react-native-picker/picker";
import moment from "moment";
import Colors from "../../assets/color/Colors";
import FormItem from "../../components/About/FormItem";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
  const re = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  return re.test(phoneNumber);
};

const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    patient: {
      address: "",
      blood_group: "",
      date_of_birth: "",
      gender: "",
      phone_number: "",
    },
    username: "",
  });

  const [loading, setLoading] = useState(false);
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    phone_number: "",
    confirmPassword: "",
  });

  const change = (field, value) => {
    if (field === "confirmPassword") {
      setUser((current) => ({ ...current, confirmPassword: value }));
      validateField("confirmPassword", value);
    } else if (field.startsWith("patient.")) {
      const patientField = field.split(".")[1];
      setUser((current) => ({
        ...current,
        patient: {
          ...current.patient,
          [patientField]: value,
        },
      }));
      validateField(patientField, value);
    } else {
      setUser((current) => ({ ...current, [field]: value }));
      validateField(field, value);
    }
  };

  const validateField = (field, value) => {
    switch (field) {
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: validateEmail(value) ? "" : "Địa chỉ email không hợp lệ",
        }));
        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: value.length >= 8 ? "" : "Mật khẩu phải có ít nhất 8 ký tự",
        }));
        break;
      case "phone_number":
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone_number:
            validatePhoneNumber(value) || value === ""
              ? ""
              : "Số điện thoại không hợp lệ",
        }));
        break;
      case "confirmPassword":
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: value === user.password ? "" : "Mật khẩu không khớp",
        }));
        break;
      default:
        break;
    }
  };
  const validateConfirmPassword = (value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: value === user.password ? "" : "Mật khẩu không khớp",
    }));
  };
  const register = async () => {
    if (
      user.password.length < 8 ||
      !validateEmail(user.email) ||
      !validatePhoneNumber(user.patient.phone_number)
    ) {
      Alert.alert("Thông báo", "Vui lòng kiểm tra lại thông tin nhập vào!", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    setLoading(true);
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
      const res = await GlobalAPI.post(endpoints["register"], form, {
        headers: {
          "Content-Type": "multipart/form-data",
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

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(true);
  };

  const handleChangeStartDate = (date) => {
    const formattedDate = moment(date, "YYYY/MM/DD").format("YYYY-MM-DD");
    change("patient.date_of_birth", formattedDate);
    setOpenStartDatePicker(false);
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <View style={{ alignItems: "center", marginVertical: 80 }}>
          <Text style={{ fontSize: 30, fontFamily: "bold" }}>Đăng ký</Text>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 10,
              zIndex: 9999,
            }}
          ></View>
        </View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <FormItem
              label="Họ"
              value={user.first_name}
              onChangeText={(value) => change("first_name", value)}
              placeholder={user.first_name}
              iconName="account-outline"
            />
            <FormItem
              label="Tên"
              value={user.last_name}
              onChangeText={(value) => change("last_name", value)}
              placeholder={user.last_name}
              iconName="account-outline"
            />
               <FormItem
              label="Tên đăng nhập"
              value={user.username}
              onChangeText={(value) => change("username", value)}
              placeholder={user.username}
              iconName="account-outline"
            />
            <FormItem
              label="Mật khẩu"
              value={user.password}
              onChangeText={(value) => change("password", value)}
              placeholder={user.password}
              iconName="account-outline"
              secureTextEntry={true}
              error={errors.password}
            />
            <FormItem
              label="Nhập lại mật khẩu"
              value={user.confirmPassword}
              onChangeText={(value) => {
                change("confirmPassword", value);
                validateConfirmPassword(value); // Thực hiện validate khi thay đổi
              }}
              placeholder={user.confirmPassword}
              iconName="account-outline"
              secureTextEntry={true}
              error={errors.confirmPassword} // Truyền thông báo lỗi vào prop error
            />
         
            <FormItem
              label="Email"
              value={user.email}
              onChangeText={(value) => change("email", value)}
              placeholder={user.email}
              iconName="account-outline"
              error={errors.email}
            />
            <FormItem
              label="Địa chỉ"
              value={user.patient.address}
              onChangeText={(value) => change("patient.address", value)}
              placeholder={user.patient.address}
              iconName="account-outline"
            />
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.label}>Ngày sinh</Text>
              <View style={styles.inputContainer}>
                <Icon name="calendar" style={styles.icon} />
                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={styles.dateTextInput}>
                    {user.patient.date_of_birth || "Chọn ngày sinh"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <FormItem
              label="Số điện thoại"
              value={user.patient.phone_number}
              onChangeText={(value) => change("patient.phone_number", value)}
              placeholder={user.patient.phone_number}
              iconName="account-outline"
              error={errors.phone_number}
            />
            <Text style={styles.label}>Giới tính</Text>

            <Picker
              selectedValue={user.patient.gender}
              style={styles.picker}
              onValueChange={(itemValue) => change("patient.gender", itemValue)}
            >
              <Picker.Item label="Nam" value="male" />
              <Picker.Item label="Nữ" value="female" />
            </Picker>

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

            <TouchableOpacity onPress={register} style={styles.button}>
              <Text
                style={{ color: "white", fontFamily: "bold", fontSize: 20 }}
              >
                Đăng ký
              </Text>
            </TouchableOpacity>
            {renderDatePicker()}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    marginVertical: 5,
    fontSize: 15,
    color: "black",
    marginLeft: 10,
  },
  inputContainer: {
    height: 55,
    backgroundColor: "#F3F4FB",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.primary,
  },
  textInput: {
    color: Colors.primary,
    flex: 1,
  },
  dateTextInput: {
    color: Colors.primary,
    flex: 1,
    marginVertical: "25%",
  },
  button: {
    height: 55,
    width: "100%",
    backgroundColor: Colors.primary,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  icon: {
    color: Colors.primary,
    fontSize: 22,
    marginRight: 10,
    marginTop: "5%",
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#F3F4FB",
    borderWidth: 0.5,
    borderColor: Colors.primary,
  },
};

export default Register;
