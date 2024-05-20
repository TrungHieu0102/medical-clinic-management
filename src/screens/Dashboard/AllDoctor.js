import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import GlobalAPI, { endpoints } from "../../services/GlobalAPI";
import PageHeader from "../../components/Shared/PageHeader";
import DoctorList from "../../components/DoctorCategoryList/DoctorList";
import Colors from "../../assets/color/Colors";

const AllDoctor = () => {
  const [listAllDoctor, setListDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [searchDoctor, setSearchDoctor] = useState("");
  const [originalDoctorList, setOriginalDoctorList] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(""); // Tiêu chí sắp xếp
  const [sortDirection, setSortDirection] = useState("desc"); // Hướng sắp xếp: desc (giảm dần) hoặc asc (tăng dần)
  const [showModal, setShowModal] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const getListDoctor = async (min, max) => {
    try {
      setLoading(true);
      const resp = await GlobalAPI.get(endpoints["doctors"], {
        params: {
          ordering: sortCriteria
            ? `${sortDirection === "desc" ? "-" : ""}${sortCriteria}`
            : "", // Sử dụng tiêu chí sắp xếp và hướng sắp xếp khi gửi yêu cầu API
          min_price: min,
          max_price: max,
        },
      });
      if (resp && resp.data) {
        setListDoctor(resp.data.results);
        setOriginalDoctorList(resp.data.results); // Lưu danh sách ban đầu
        setLoading(false);
      } else {
        console.error("Response data is undefined");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    getListDoctor();
  }, [sortCriteria, sortDirection]); // Gọi getListDoctor khi sortCriteria hoặc sortDirection thay đổi

  const searchDoctors = (searchTerm) => {
    try {
      let filteredDoctors;
      if (searchTerm.trim() === "") {
        filteredDoctors = originalDoctorList; // Sử dụng danh sách ban đầu nếu không có từ khóa tìm kiếm
      } else {
        filteredDoctors = originalDoctorList.filter((doctor) =>
          (
            doctor.user.first_name.toLowerCase() +
            " " +
            doctor.user.last_name.toLowerCase()
          ).includes(searchTerm.toLowerCase())
        );
      }
      setListDoctor(filteredDoctors);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm Bác sĩ:", error);
    }
  };

  const handleSearch = (text) => {
    setSearchDoctor(text);
    searchDoctors(text);
  };

  const handleSortCriteria = (criteria) => {
    if (sortCriteria === criteria) {
      setSortDirection(sortDirection === "desc" ? "asc" : "desc");
    } else {
      setSortCriteria(criteria);
      setSortDirection("desc");
    }
  };

  const handleSaveFilter = () => {
    setShowModal(false);
    getListDoctor(minPrice, maxPrice);
  };

  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={"Danh sách tất cả bác sĩ"} />
      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            borderWidth: 0.7,
            borderColor: Colors.GRAY,
            padding: 8,
            borderRadius: 10,
            margin: 5,
          }}
        >
          <Ionicons name="search-outline" size={24} color={Colors.primary} />
          <TextInput
            placeholder="Tìm bác sĩ"
            value={searchDoctor}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => handleSortCriteria("price")}
        >
          <FontAwesome name="unsorted" size={18} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => setShowModal(true)}
        >
          <FontAwesome name="filter" size={18} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size={"large"} color={Colors.primary} />
      ) : (
        <View style={{ marginTop: 10 }}>
          <DoctorList doctorList={listAllDoctor} />
        </View>
      )}

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: "80%",
              elevation: 5,
            }}
          >
            <Text style={{ marginBottom: 10 }}>Nhập khoảng giá:</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: Colors.GRAY,
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
              }}
              placeholder="Giá nhỏ nhất"
              keyboardType="numeric"
              value={minPrice}
              onChangeText={(text) => setMinPrice(text)}
            />
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: Colors.GRAY,
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
              }}
              placeholder="Giá lớn nhất"
              keyboardType="numeric"
              value={maxPrice}
              onChangeText={(text) => setMaxPrice(text)}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.primary,
                  padding: 10,
                  borderRadius: 5,
                  width: "45%",
                  alignItems: "center",
                }}
                onPress={() => setShowModal(false)}
              >
                <Text style={{ color: "white" }}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.primary,
                  padding: 10,
                  borderRadius: 5,
                  width: "45%",
                  alignItems: "center",
                }}
                onPress={handleSaveFilter}
              >
                <Text style={{ color: "white" }}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AllDoctor;
