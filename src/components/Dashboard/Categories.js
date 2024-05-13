import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../services/GlobalAPI";
import Colors from "../../assets/color/Colors";
import SubHeading from "./SubHeading";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  const [categoryList, setCategoryList] = useState();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const resp = await GlobalAPI.getCategories();
      if (resp && resp.data) {
        setCategoryList(resp.data.results);
      } else {
        console.error("Response data is undefined");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  if (!categoryList) {
    return null;
  }

  return (
    <View style={{ marginTop: 10 }}>
      <SubHeading subHeadingTitle={"Danh mục khám bệnh"} />
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DoctorCategoryList", {
                categoryName: item.name,
              })
            }
            style={{ alignItems: "center", marginRight: 15 }}
          >
            <View
              style={{
                backgroundColor: Colors.SECONDARY,
                padding: 15,
                borderRadius: 100,
              }}
            >
              <Image
                source={{ uri: item.images }}
                style={{ height: 30, width: 30 }}
              />
            </View>
            <Text style={{ marginBottom: 5 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;
