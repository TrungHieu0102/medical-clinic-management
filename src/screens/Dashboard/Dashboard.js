import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import CommonBtn from "../../components/Dashboard/CommonBtn";
import styles from "./styles";
import Slider from "../../components/Dashboard/Slider";
import Header from "../../components/Dashboard/Header";
const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Header/>
          <Slider/>

          <Text style={styles.heading}>Chuyên khoa khám</Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={[1, 1, 1, 1, 1, 1, 1]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.catName}>
                      {"Category " + index + 1}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={styles.heading}>Các bác sĩ hàng đầu</Text>
          {/* // */}
          <View style={styles.container}>
            {Array.from({ length: 3 }, (_, i) => i * 2 + 1).map((index) => {
              return (
                <View key={index} style={{ flexDirection: "row" }}>
                  <View style={styles.docItem}>
                    <Image
                      source={require("../../assets/images/doctor.png")}
                      style={styles.docImg}
                    />
                    <Text style={styles.docName}>Tên Bác Sĩ {index}</Text>
                    <Text style={styles.docSpl}>Chuyên khoa A</Text>
                    <Text
                      style={[
                        styles.status,
                        {
                          color: index === 1 ? "#3467E7" : "red",
                          opacity: index === 1 ? 1 : 0.5,
                        },
                      ]}
                    >
                      {index === 1 ? "Lịch trống" : "Đầy lịch"}
                    </Text>
                    <CommonBtn
                      w={150}
                      h={40}
                      status={index === 1}
                      txt={"Đặt lịch ngay"}
                      onClick={() => {
                        if (index === 1) {
                          navigation.navigate("BookAppointment");
                        }
                      }}
                    />
                  </View>

                  {index + 1 <= 6 && (
                    <View style={styles.docItem}>
                      <Image
                        source={require("../../assets/images/doctor.png")}
                        style={styles.docImg}
                      />
                      <Text style={styles.docName}>Tên Bác Sĩ {index + 1}</Text>
                      <Text style={styles.docSpl}>Chuyên khoa B</Text>
                      <Text
                        style={[
                          styles.status,
                          {
                            color: index + 1 === 2 ? "#3467E7" : "red",
                            opacity: index + 1 === 2 ? 1 : 0.5,
                          },
                        ]}
                      >
                        {index + 1 === 2 ? "Lịch trống" : "Đầy lịch"}
                      </Text>
                      <CommonBtn
                        w={150}
                        h={40}
                        status={index + 1 === 2}
                        txt={"Đặt lịch ngay"}
                        onClick={() => {
                          if (index + 1 === 2) {
                            navigation.navigate("BookAppointment");
                          }
                        }}
                      />
                    </View>
                  )}
                </View>
              );
            })}
          </View>

          {/* // */}
        </ScrollView>
      </View>
    </View>
  );
};
export default Dashboard;
