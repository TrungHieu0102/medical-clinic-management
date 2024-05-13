import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../../assets/color/Colors";

const SelectedMedicinesList = ({
  selectedMedicines,
  onRemoveMedicine,
  toggleModal,
}) => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedMedicines}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.medicineItem}>
            <TouchableOpacity style={styles.medicineContent}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/dlgnuolsl/image/upload/v1714734420/thuoc1_df093a101e.jpg",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.medicineName}>{item.name}</Text>
                <View style={styles.detailContainer}>
                  <Ionicons
                    name="pricetag-outline"
                    size={16}
                    color={Colors.primary}
                  />
                  <View style={styles.detailTextContainer}>
                    <Text style={styles.detailText}>{item.price}</Text>
                  </View>
                </View>
                <View style={styles.quantityContainer}>
                  <View style={styles.quantityButtons}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={decreaseQuantity}
                    >
                      <AntDesign
                        name="minuscircleo"
                        style={styles.quantityIcon}
                      />
                    </TouchableOpacity>
                    <TextInput
                      keyboardType="numeric"
                      style={styles.quantityInput}
                      value={quantity.toString()}
                      onChangeText={(value) => setQuantity(parseInt(value))}
                    />
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={increaseQuantity}
                    >
                      <AntDesign
                        name="pluscircleo"
                        style={styles.quantityIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => onRemoveMedicine(index)}
                  >
                    <Feather name="delete" style={styles.deleteIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
        <AntDesign name="pluscircleo" size={24} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  medicineItem: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  medicineContent: {
    width: "100%",
    height: 100,
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: "30%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "space-around",
  },
  medicineName: {
    fontSize: 16,
    maxWidth: "100%",
    color: "black",
    fontWeight: "600",
  },
  detailContainer: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  detailTextContainer: {
    maxHeight: 50,
    overflowY: "scroll",
    flexShrink: 1,
  },
  detailText: {
    fontSize: 14,
    fontWeight: "400",
    maxWidth: 150,
    marginHorizontal: 5,
    fontFamily: "italic",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    borderRadius: 100,
    marginRight: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: "#B9B9B9",
    opacity: 0.5,
  },
  quantityIcon: {
    fontSize: 16,
    color: "#777777",
  },
  quantityInput: {
    marginHorizontal: 5,
  },
  deleteButton: {
    marginRight: 10,
    borderRadius: 100,
  },
  deleteIcon: {
    fontSize: 16,
    color: "#e73458",
    backgroundColor: "#fedbe5",
    padding: 8,
    borderRadius: 100,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 100,
    padding: 10,
  },
});

export default SelectedMedicinesList;
