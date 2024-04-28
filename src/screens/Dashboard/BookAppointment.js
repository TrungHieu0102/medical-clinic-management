import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import CommonBtn from "../../components/Dashboard/CommonBtn";

const BookAppointment = ({ navigation }) => {
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [days, setDays] = useState([]);
  const slots = [
    { slot: "10:00-12:00PM", selected: false },
    { slot: "12:00-02:00PM", selected: false },
    { slot: "02:00-04:00PM", selected: false },
    { slot: "04:00-06:00PM", selected: false },
    { slot: "06:00-08:00PM", selected: false },
    { slot: "08:00-11:00PM", selected: false },
  ];

  useEffect(() => {
    const DaysList = [];
    const currentMonthDays = getDays(new Date().getMonth() + 1);
    for (let i = 1; i <= currentMonthDays; i++) {
      DaysList.push({ day: i, selected: false });
    }
    setDays(DaysList);
  }, []);

  const getDays = (month) => {
    if (month === 2) return 28;
    return (month % 2 === 0 && month < 8) || (month % 2 !== 0 && month > 7)
      ? 30
      : 31;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/doctor.png")}
          style={styles.docImg}
        />
        <Text style={styles.name}>Tên bác sĩ</Text>
        <Text style={styles.spcl}>Chuyên môn</Text>
        <Text style={styles.heading}>Chọn ngày</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={days}
            keyExtractor={(item, index) => item.day.toString()} // Sử dụng giá trị của item.day làm key
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  key={item.day} // Thêm key vào TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: selectedDay == index ? "blue" : "#d7dde0",
                    marginLeft: 10,
                  }}
                  onPress={() => {
                    if (item.day < new Date().getDate()) {
                    } else {
                      setSelectedDay(index);
                    }
                  }}
                >
                  <Text
                    style={{ color: selectedDay == index ? "#fff" : "black" }}
                  >
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text style={styles.heading}>Khung thời gian trông</Text>
        <View>
          {slots.map(
            (item, index) =>
              index % 2 === 0 &&
              index + 1 < slots.length && (
                <View key={index} style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={[
                      styles.timeSlot,
                      {
                        borderColor: index === selectedSlot ? "blue" : "black",
                        backgroundColor:
                        index   === selectedSlot ? "#d7ddfa":"#fff"
                      },
                    ]}
                    onPress={() => setSelectedSlot(index)}
                  >
                    <Text
                      style={{
                        color: index === selectedSlot ? "blue" : "black",
                      }}
                    >
                      {item.slot}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.timeSlot,
                      {
                        borderColor:
                          index + 1 === selectedSlot ? "blue" : "black",
                        backgroundColor:
                        index + 1 === selectedSlot ? "#d7ddfa":"#fff"
                      },
                    ]}
                    onPress={() => setSelectedSlot(index + 1)}
                  >
                    <Text
                      style={{
                        color: index + 1 === selectedSlot ? "blue" : "black",
                      }}
                    >
                      {slots[index + 1].slot}
                    </Text>
                  </TouchableOpacity>
                </View>
              )
          )}
        </View>

        <Text style={styles.heading}>Tên bệnh nhân</Text>
        <TextInput style={styles.nameInput} placeholder={"Nhập tên"} />

        <Text style={styles.heading}>Chọn giới tính</Text>
        <View style={styles.genderView}>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender === 0 ? "blue" : "black",
              },
            ]}
            onPress={() => setSelectedGender(0)}
          >
            <Image
              source={require("../../assets/images/male.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender === 1 ? "blue" : "black",
              
              },
            ]}
            onPress={() => setSelectedGender(1)}
          >
            <Image
              source={require("../../assets/images/female.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.btnView}>
          <CommonBtn
            w={300}
            h={45}
            txt={"Đặt lịch"}
            status={true}
            onClick={() => navigation.navigate("Success")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  docImg: { width: 100, height: 100, marginTop: 50, alignSelf: "center" },
  name: { fontSize: 20, fontWeight: "700", alignSelf: "center", marginTop: 10 },
  spcl: {
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#f2f2f2",
    color: "green",
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginLeft: 15,
  },
  timeSlot: {
    width: "45%",
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: "94%",
    height: 45,
    borderWidth: 0.5,
    alignSelf: "center",
    paddingLeft: 20,
  },
  genderView: {
    marginTop: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  gender: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  timeSlotContainer: {},
  btnView: { marginTop: 20, marginBottom: 20 },
});
