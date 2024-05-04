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
  const [quantities, setQuantities] = useState({});

  const decreaseQuantity = (index) => {
    const updatedQuantities = { ...quantities };
    if (updatedQuantities[index] && updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };

  const increaseQuantity = (index) => {
    const updatedQuantities = { ...quantities };
    updatedQuantities[index] = (updatedQuantities[index] || 0) + 1;
    setQuantities(updatedQuantities);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={selectedMedicines}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginTop: 20,
              borderWidth: 1,
              borderColor: Colors.LIGHT_GRAY,
              borderRadius: 10,
              backgroundColor: Colors.white,
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                height: 100,
                marginVertical: 6,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.LIGHT_GRAY,
                  borderRadius: 10,
                  marginRight: 22,
                }}
              >
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/dlgnuolsl/image/upload/v1714734420/thuoc1_df093a101e.jpg",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  justifyContent: "space-around",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    maxWidth: "100%",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  {item.attributes.Name}
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="information-circle-sharp"
                    size={16}
                    color={Colors.primary}
                  />
                  <View
                    style={{
                      maxHeight: 50,
                      overflowY: "scroll",
                      flexShrink: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        maxWidth: 150,
                        marginHorizontal: 5,
                        fontFamily: "italic",
                      }}
                    >
                      {item.attributes.Detail}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        borderRadius: 100,
                        marginRight: 20,
                        padding: 4,
                        borderWidth: 1,
                        borderColor: "#B9B9B9",
                        opacity: 0.5,
                      }}
                    >
                      <TouchableOpacity onPress={() => decreaseQuantity(index)}>
                        <AntDesign
                          name="minuscircleo"
                          style={{
                            fontSize: 16,
                            color: "#777777",
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <TextInput
                      keyboardType="numeric"
                      style={{ marginHorizontal: 5 }}
                      value={
                        quantities[index] ? quantities[index].toString() : "1"
                      }
                      onChangeText={(value) =>
                        setQuantities({
                          ...quantities,
                          [index]: parseInt(value),
                        })
                      }
                    />
                    <View
                      style={{
                        borderRadius: 100,
                        marginLeft: 20,
                        padding: 4,
                        borderWidth: 1,
                        borderColor: "#B9B9B9",
                        opacity: 0.5,
                      }}
                    >
                      <TouchableOpacity onPress={() => increaseQuantity(index)}>
                        <AntDesign
                          name="pluscircleo"
                          style={{
                            fontSize: 16,
                            color: "#777777",
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => onRemoveMedicine(index)}
                    style={{
                      marginRight: 10,
                    }}
                  >
                    <Feather
                      name="delete"
                      style={{
                        fontSize: 16,
                        color: "#e73458",
                        backgroundColor: "#fedbe5",
                        padding: 8,
                        borderRadius: 100,
                      }}
                    />
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

// Trong ví dụ trên, mỗi lần bạn thay đổi quantity của một item, chỉ item đó sẽ được cập nhật trong đối tượng quantities. Điều này sẽ giữ cho các items khác không bị ảnh hưởng bởi các thay đổi này.
