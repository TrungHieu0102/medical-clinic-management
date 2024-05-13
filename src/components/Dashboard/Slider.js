import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const image1 = require("../../assets/images/slider/slider1.jpg");
  const image2 = require("../../assets/images/slider/slider2.jpg");
  const data = [
    { id: "1", image: image1 },
    { id: "2", image: image2 },
  ];
  const renderItem = ({ item }) => (
    <Image
      source={item.image}
      style={{
        width: Dimensions.get("screen").width * 0.9,
        height: 170,
        borderRadius: 10,
        margin: 2,
      }}
    />
  );
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Slider;
