import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GlobalAPI, { endpoints } from "../../services/GlobalAPI";
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
      const resp = await GlobalAPI.get(endpoints['getAllMedicine']);
      if (resp && resp.data) {
        setMedicines(resp.data.results);
      } else {
        console.error("Response data is undefined");
      }
    } catch (error) {
      console.error("Error fetching medicine:", error);
    }
  };

  useEffect(() => {
    fetchAllMedicines();
  }, []);

  const searchMedicines = () => {
    try {
      const filteredMedicines = medicines.filter(medicine =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMedicines(filteredMedicines);
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
      toggleModal();
    } else {
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
        toggleModal={toggleModal}
      />
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
    backgroundColor: "white"
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
