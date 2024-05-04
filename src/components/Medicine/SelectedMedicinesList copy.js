import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../assets/color/Colors";
import { Feather } from "@expo/vector-icons";

const SelectedMedicinesList = ({ selectedMedicines, onRemoveMedicine }) => {
  return (
    <FlatList
      data={selectedMedicines}
      renderItem={({ item, index }) => (

        ///
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {item.attributes.Name}
            </Text>
            <Text style={styles.detailText}>
              {item.attributes.Detail}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => onRemoveMedicine(index)}
          >
            <Feather name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>


///
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "bold",
    fontSize: 16,
  },
  detailText: {
    fontFamily: "italic",
    fontSize: 14,
    marginLeft: 10, // Đảm bảo văn bản "Chi tiết" nằm bên phải của mỗi mục
  },
  iconContainer: {
    marginLeft: 10,
  },
});

export default SelectedMedicinesList;
