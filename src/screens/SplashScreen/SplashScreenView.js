import { View, Image, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import icon from "../../assets/ic_app.png";
import style from "./style";
import background from "../../assets/splashScreen.png";

export default function SplashScreenView() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);
  return (
    <View style={style.container}>
      <Animated.View style={[style.imageContainer, { opacity: fadeAnimation }]}>
        <Image style={style.image} source={icon} />
      </Animated.View>
    </View>
  );
}
