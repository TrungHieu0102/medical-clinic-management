import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../assets/color/Colors";
import AppointmentItem from "./AppointmentItem";

const AppointmentList = ({
  appointments,
  onPressItem,
  toggleModal,
  handleRefresh,
  refreshing,
}) => (
  <View>
    <FlatList
      data={appointments}
      onRefresh={handleRefresh}
      refreshing={refreshing}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPressItem(item)}>
          <AppointmentItem appointment={item} />
        </TouchableOpacity>
      )}
    />
    <TouchableOpacity onPress={toggleModal} style={styles.searchButton}>
      <FontAwesome name="search" size={24} color={Colors.primary} />
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  searchButton: {
    position: "absolute",
    right: 15,
    top: -40,
    padding: 10,
  },
});

export default AppointmentList;
