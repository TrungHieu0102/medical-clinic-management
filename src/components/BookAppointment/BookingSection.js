import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid  } from "react-native";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Colors from "../../assets/color/Colors";
import SubHeading from "../Dashboard/SubHeading";
import GlobalAPI, { authApi, endpoints } from "../../services/GlobalAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookingSection = ({doctor}) => {
  const [next7Days, setNext7Days] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [loader, setLoader] = useState(false);
  const [notes, setNotes] = useState();
  useEffect(() => {
    getDays();
    getTime();
  }, []);
  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    //lịch khám chỉ bắt đầu vào ngày hôm sau
    //chỉnh moment về tiếng việt để đồng nhất
    for (let i = 0; i < 8; i++) {
      const date = moment().add(i, "days");
      nextSevenDays.push({
        date: date,
        day: date.format("ddd"),
        formmatedDate: date.format("DD/MM"),
      });
    }
    setNext7Days(nextSevenDays);
  };
  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 5; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeList(timeList);
  };
  const bookAppointment = async () => {
    setLoader(true);
    const data = {
      date: moment(selectedDate).format("YYYY-MM-DD"),
      time: moment(selectedTime, "hh:mm A").format("HH:mm:ss"),
    };
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const resp = await authApi(access_token).post(endpoints.bookAppointment(doctor.id), data);
      ToastAndroid.show('Đăng ký lịch khám thành công !', ToastAndroid.LONG);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  
  
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "bold",
          marginBottom: 10,
          color: Colors.primary,
        }}
      >
        Đăng ký thông tin khám bệnh
      </Text>
      <SubHeading subHeadingTitle={"Ngày"} />
      <FlatList
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              selectedDate == item.date
                ? { backgroundColor: Colors.primary }
                : null,
            ]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text
              style={[
                {
                  fontFamily: "regular",
                },
                selectedDate == item.date ? { color: Colors.white } : null,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                {
                  fontFamily: "medium",
                  fontSize: 16,
                },
                selectedDate == item.date ? { color: Colors.white } : null,
              ]}
            >
              {item.formmatedDate}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={"Thời gian"} />
      <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              {
                paddingVertical: 16,
              },
              selectedTime == item.time
                ? { backgroundColor: Colors.primary }
                : null,
            ]}
            onPress={() => setSelectedTime(item.time)}
          >
            <Text
              style={[
                {
                  fontFamily: "medium",
                  fontSize: 16,
                },
                selectedTime == item.time ? { color: Colors.white } : null,
              ]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={"Các triệu chứng "} />

      <TextInput
        numberOfLines={5}
        onChangeText={(value) => setNotes(value)}
        style={{
          backgroundColor: Colors.LIGHT_GRAY,
          padding: 10,
          borderRadius: 10,
          borderColor: Colors.SECONDARY,
          borderWidth: 1,
          textAlignVertical: "top",
        }}
        placeholder="Mô tả các triệu chứng bệnh"
      />
      <TouchableOpacity
        onPress={() => bookAppointment()}
         disabled={loader}
         style={{
          padding: 13,
          backgroundColor: Colors.primary,
          marginVertical: 20,
          borderRadius: 10,
          left: 0,
          right: 0,
          marginBottom: 10,
          zIndex: 20,
        }}
      >
        {!loader ? (
          <Text
            style={{
              color: Colors.white,
              textAlign: "center",
              fontFamily: "medium",
              fontSize: 17,
            }}
          >
            Xác nhận đăng ký
          </Text>
        ) : (
          <ActivityIndicator />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BookingSection;

const styles = StyleSheet.create({
  dayButton: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    marginBottom: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
    borderColor: Colors.GRAY,
  },
});
