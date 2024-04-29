import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../services/GlobalAPI";
import Colors from "../../assets/color/Colors";
import SubHeading from "./SubHeading";

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
        console.error("Response data is undefined");
      }
    }).catch((error) => {
      console.error("Error fetching categories:", error);
    });
  };
 
  if (!categoryList) {
    return null;
  }
  return (
    <View style={{ marginTop: 10 }}>
     <SubHeading subHeadingTitle={"Các danh mục khám bệnh"}/>
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
            <Text style={{marginBottom: 5}}>{item.attributes.Name}</Text>
          </View>
        
        )}
      />
    </View>
  );
};

export default Categories;
