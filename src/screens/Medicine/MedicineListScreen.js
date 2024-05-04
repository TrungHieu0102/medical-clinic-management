import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GlobalAPI from "../../services/GlobalAPI";
import SelectedMedicinesList from "../../components/Medicine/SelectedMedicinesList";
import AddMedicineModal from "../../components/Medicine/AddMedicineModal";
import PageHeader from "../../components/Shared/PageHeader";
import Colors from "../../assets/color/Colors";

const MedicineListScreen = () => {
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAllMedicines = async () => {
    try {
      const response = await GlobalAPI.getAllMedicine();
      setMedicines(response.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách thuốc:", error);
    }
  };

  useEffect(() => {
    fetchAllMedicines();
  }, []);

  const searchMedicines = async () => {
    try {
      const response = await GlobalAPI.getMedicineByName(searchTerm);
      setMedicines(response.data.data);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm thuốc:", error);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        searchMedicines();
      } else {
        fetchAllMedicines();
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible); 
  };

  const addMedicine = (medicine) => {
    const isExist = selectedMedicines.some((item) => item.id === medicine.id);
    if (!isExist) {
      setSelectedMedicines([...selectedMedicines, medicine]);
      // Toast.show("Thành công", Toast.SHORT);
      toggleModal();
    } else {
      // Toast.show("Thuốc đã được thêm trước đó", Toast.SHORT);
      toggleModal();
    }
  };

  const removeMedicine = (index) => {
    const updatedMedicines = [...selectedMedicines];
    updatedMedicines.splice(index, 1);
    setSelectedMedicines(updatedMedicines);
  };

  return (
    <View style={styles.container}>
      <PageHeader title={"Đơn thuốc"} backButton={false} />
      <SelectedMedicinesList
        selectedMedicines={selectedMedicines}
        onRemoveMedicine={removeMedicine}
        toggleModal ={toggleModal}
      />
      {/* <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
          <AntDesign name="pluscircleo" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Thanh toán</Text>
      </TouchableOpacity>
      <AddMedicineModal
        visible={isModalVisible}
        onClose={toggleModal}
        onMedicineSelect={addMedicine}
        medicines={medicines}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: "relative",
    backgroundColor:"white"
  },
  addButtonContainer: {
    alignSelf: "flex-end", // Đặt container ở phía dưới bên phải
    marginBottom: 10, // Khoảng cách giữa danh sách và nút thêm
  },
  addButton: {
    padding: 10,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 100,
    marginRight: 4,
  },
  payButton: {
    padding: 10,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 10,
  },
  payButtonText: {
    color: Colors.primary,
    textAlign: "center",
    fontFamily: "medium",
    fontSize: 17,
  },
});

export default MedicineListScreen;
