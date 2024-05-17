import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import HorizontalLine from "../Shared/HorizontalLine";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import moment from "moment";
import Colors from "../../assets/color/Colors";
import GlobalAPI, { endpoints } from "../../services/GlobalAPI";

export default function AppointmentCardItem({ appointment, doctorID }) {
  const [doctor, setDoctor] = useState(null);

  const getDoctor = async () => {
    try {
      const response = await GlobalAPI.get(endpoints.doctorDetail(doctorID));
      if (response.data) {
        // console.log(response.data);
        setDoctor(response.data);
      } else {
        console.error("Response data is undefined");
      }
    } catch (error) {
      console.error("Error fetching doctor:", error);
    }
  };
  
  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>
        {moment(appointment.date).format("DD/MM/YYYY")} - {" "}
        {appointment.time}
      </Text>
      <HorizontalLine />
      <View style={styles.doctorInfoContainer}>
        <Image
          source={{
            uri: doctor ? doctor.user.avatar : " ",
          }}
          style={styles.doctorImage}
        />
        <View>
          <Text style={styles.doctorName}>
            {doctor ? `${doctor.user.first_name} ${doctor.user.last_name}` : ""}
          </Text>

          <View style={styles.infoText}>
            <Ionicons name="location" size={20} color={Colors.primary} />
            <Text>{doctor ? doctor.location : ""}</Text>
          </View>
          <View style={styles.infoText}>
            <Ionicons name="document-text" size={20} color={Colors.primary} />
            <Text>Mã đơn : {appointment.id}</Text>
          </View>
          <View style={styles.infoText}>
            <AntDesign name="Safety" size={20} color={Colors.primary} />
            <Text>
              Trạng thái:{" "}
              <Text
                style={{
                  color:
                    appointment.confirmed === "confirmed"
                      ? Colors.primary
                      : "#e73458",
                }}
              >
                {appointment.confirmed === "confirmed"
                  ? "Đã xác nhận"
                  : "Chưa xác nhận"}
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            /* onPress={() => deleteAppointment(appointment.id)} */ style={
              styles.actionButton
            }
          >
            <Text style={styles.actionButtonText}>Hủy lịch khám</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginTop: 15,
  },
  dateText: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "medium",
  },
  doctorInfoContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  doctorImage: {
    height: 100,
    borderRadius: 10,
    width: 90,
    marginTop: -55,
  },
  doctorName: {
    fontSize: 16,
    fontFamily: "medium",
  },
  infoText: {
    fontFamily: "regular",
    color: Colors.GRAY,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginTop: 5,
  },
  actionButton: {
    padding: 8,
    backgroundColor: "#fedbe5",
    marginVertical: 10,
    borderRadius: 10,
    width: 150,
  },
  actionButtonText: {
    color: "#e73458",
    textAlign: "center",
    fontFamily: "medium",
    fontSize: 16,
  },
});
