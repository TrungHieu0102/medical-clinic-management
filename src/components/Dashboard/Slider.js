import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../services/GlobalAPI";

const Slider = () => {
  const [sliderList, setSliderList] = useState();

  useEffect(() => {
    getSlider();
  }, []);
  const getSlider = () => {
    GlobalAPI.getSlider().then((resp) => {
      setSliderList(resp.data.data);
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.attributes.Image.data.attributes.url }}
            style={{
              width: Dimensions.get("screen").width * 0.9,
              height: 170,
              borderRadius: 10,
              margin: 2,
            }}
          />
        )}
      />
    </View>
  );
};

export default Slider;
