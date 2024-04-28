import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../services/GlobalAPI";
import Colors from "../../assets/color/Colors";

const Categories = () => {
  const [categoryList, setCategoryList] = useState();
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = () => {
    GlobalAPI.getCategories().then((resp) => {
      if (resp && resp.data) {
        setCategoryList(resp.data.data);
      } else {
        // Handle the case when resp or resp.data is undefined
        console.error("Response data is undefined");
      }
    }).catch((error) => {
      // Handle any errors that occur during the API call
      console.error("Error fetching categories:", error);
    });
  };
 
  if (!categoryList) {
    return null;
  }
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "bold",
            fontWeight: 400,
          }}
        >
          Danh sách bác sĩ hàng đầu
        </Text>
        <Text
          style={{
            fontFamily: "italic",
            color: Colors.primary,
          }}
        >
          Xem thêm
        </Text>
      </View>
      <FlatList
        data={categoryList}
        numColumns={4}
        style={{
            marginTop:5,

        }}
        columnWrapperStyle={
            {
                flex:1,
                justifyContent: "space-between"
            }
        }
        renderItem={({item, index}) =>index<4&& (
          <View style={{alignItems:"center"}}>
            <View style={{
                backgroundColor:Colors.SECONDARY,
                padding:15,
                borderRadius:100
            }}>
            <Image source={{ uri: item.attributes.Icon.data[0].attributes.url }} 
                style={{height:30, width:30}}
            />

            </View>
            <Text>{item.attributes.Name}</Text>
          </View>
        
        )}
      />
    </View>
  );
};

export default Categories;
