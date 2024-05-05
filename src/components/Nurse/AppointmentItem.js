import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import moment from "moment";
import HorizontalLine from "../Shared/HorizontalLine";
import Colors from "../../assets/color/Colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const AppointmentItem = ({ appointment }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>
        {moment(appointment.attributes.Date).format("DD/MM/YYYY")} -{" "}
        {appointment.attributes.Time}
      </Text>
      <HorizontalLine />
      <View style={styles.userInfoContainer}>
        <Image source={{ uri: user.imageUrl }} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{appointment.attributes.Username}</Text>
          <View style={styles.infoText}>
            <Ionicons name="location" size={20} color={Colors.primary} />
            <Text>{appointment.attributes.Doctor.data.attributes.Address}</Text>
          </View>
          <View style={styles.infoText}>
            <Ionicons name="document-text" size={20} color={Colors.primary} />
            <Text>Mã đơn : {appointment.id}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
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
  userInfoContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  userImage: {
    height: 100,
    borderRadius: 10,
    width: 90,
   
  },
  userName: {
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
export default AppointmentItem;
