import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import Colors from "../../assets/color/Colors";
import { Ionicons } from "@expo/vector-icons";

const AddMedicineModal = ({
  visible,
  onClose,
  onMedicineSelect,
  medicines,
  searchTerm,
  onSearchTermChange,
}) => {
  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().indexOf(
        searchTerm.toLowerCase()
      ) !== -1
  );
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={{ marginTop: 15 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              borderWidth: 0.7,
              borderColor: Colors.GRAY,
              padding: 8,
              borderRadius: 100,
              margin: 10,
              marginVertical: 30,
            }}
          >
            <Ionicons name="search-outline" size={24} color={Colors.primary} />
            <TextInput
              placeholder="Tìm kiếm thuốc"
              value={searchTerm}
              onChangeText={onSearchTermChange}
            />
          </View>
        </View>
        <FlatList
          data={filteredMedicines}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onMedicineSelect(item)}>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.quantityText}>
                  Giá: {item.price}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close-circle-sharp" size={28} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    marginTop: 25
  },
  itemContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "bold",
    fontSize: 14,
  },
  quantityText: {
    fontFamily: "italic",
    fontSize: 14,
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 13,
    marginVertical: 0,
  }
});

export default AddMedicineModal;
