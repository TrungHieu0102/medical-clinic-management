import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useAuth } from "@clerk/clerk-expo";

const Profile = () => {
  const {isLoaded,signOut} = useAuth()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://images2.thanhnien.vn/528068263637045248/2023/6/18/6-16870495312901061133770.jpg",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              Trung Hiếu
            </Title>
            <Caption style={styles.caption}>@trunghieu</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#3467E7" size={20} />
          <Text style={styles.userContact}>Hồ Chí Minh, Việt Nam</Text>
        </View>

        <View style={styles.row}>
          <Icon name="phone" color="#3467E7" size={20} />
          <Text style={styles.userContact}>0349977194</Text>
        </View>

        <View style={styles.row}>
          <Icon name="email" color="#3467E7" size={20} />
          <Text style={styles.userContact}>trunghieu@email.com</Text>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#3467E7" size={25} />
            <Text style={styles.menuItemText}>Bác sĩ yêu thích</Text>
          </View>
        </TouchableRipple>
        <View style={styles.spContainer}>
          <View style={styles.sp}></View>
        </View>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#3467E7" size={25} />
            <Text style={styles.menuItemText}>Thanh Toán</Text>
          </View>
        </TouchableRipple>
        <View style={styles.spContainer}>
          <View style={styles.sp}></View>
        </View>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#3467E7" size={25} />
            <Text style={styles.menuItemText}>Chia sẻ ứng dụng</Text>
          </View>
        </TouchableRipple>
        <View style={styles.spContainer}>
          <View style={styles.sp}></View>
        </View>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#3467E7" size={25} />
            <Text style={styles.menuItemText}>Hỗ trợ</Text>
          </View>
        </TouchableRipple>
        <View style={styles.spContainer}>
          <View style={styles.sp}></View>
        </View>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-settings-outline" color="#3467E7" size={25} />
            <Text style={styles.menuItemText}>Cài đặt</Text>
          </View>
        </TouchableRipple>
        <View style={styles.spContainer}>
          <View style={styles.sp}></View>
        </View>

        <TouchableRipple onPress={()=>signOut()}>
          <View style={styles.menuItem}>
            <Icon name="logout-variant" color="#3467E7" size={25} />
            <Text style={styles.menuItemText}>Đăng xuất</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginBottom: 25,
    marginVertical: 10,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
  },
  userContact: {
    color: "#777777",
    marginLeft: 20,
    fontStyle: "italic",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
    fontStyle: "italic",
  },
  row: {
    flexDirection: "row",
    margin: 5,
  },
  menuWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 25,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "black",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  spContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  
  sp: {
    width: "85%",
    height: 1,
    backgroundColor: "#d9d9d9",
   
  },
})

