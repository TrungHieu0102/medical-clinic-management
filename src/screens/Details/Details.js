import React, { useContext } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import MyContext from "../../services/MyContext";
import { useNavigation } from "@react-navigation/native";
const Details = () => {
  const navigation = useNavigation();

  const [state,dispatch] = useContext(MyContext);
  const logout = () => {
    dispatch({ type: 'logout' });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: state.data.avatar || "https://via.placeholder.com/45",
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
             {state.data.first_name}  {state.data.last_name} 
            </Title>
            <Caption style={styles.caption}>@{state.data.username} </Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#3467E7" size={20} />
          <Text style={styles.userContact}>{state.data.location} </Text>
        </View>

        <View style={styles.row}>
          <Icon name="phone" color="#3467E7" size={20} />
          <Text style={styles.userContact}>{state.data.phone}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#3467E7" size={20} />
          <Text style={styles.userContact}>{state.data.email}</Text>
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
        <TouchableRipple  onPress={() => navigation.navigate("MedicineListScreen")}  >
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#3467E7" size={25} />
            <Text style={styles.menuItemText}>Kê đơn thuốc</Text>
          </View>
        </TouchableRipple>
        <View style={styles.spContainer}>
          <View style={styles.sp}></View>
        </View>
        <TouchableRipple onPress={() => navigation.navigate("ConfirmAppointmentScreen")}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#3467E7" size={25} />
            <Text style={styles.menuItemText}>Danh sách cuộc hẹn cần xác nhận</Text>
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
        <TouchableRipple  onPress={logout}>
          <View style={styles.menuItem}>
            <Icon name="logout-variant" color="#3467E7" size={25} />
            <Text style={styles.menuItemText}>Đăng xuất</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};
export default Details;
