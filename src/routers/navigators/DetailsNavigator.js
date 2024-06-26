import { View, Text ,Button} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../../screens/Details/Details";
import { useTheme, Avatar } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EditUser from "../../screens/Abouts/EditUser";
import MedicineListScreen from "../../screens/Medicine/MedicineListScreen";
import ConfirmAppointmentScreen from "../../screens/Nurse/ConfirmAppointmentScreen";
const DetailsNavigator = ({ navigation }) => {
  const { colors } = useTheme();
  const DetailStack = createNativeStackNavigator();
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}
    >
      <DetailStack.Screen
        name="Details"
        component={Details}
        options={{
          title: '',     
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color="black"
                onPress={() => navigation.navigate('EditUser')}
              />
            </View>
          ),
        }}
      />
      <DetailStack.Screen
        name="EditUser"
        options={{
          title: 'Thay đổi thông tin cá nhân',
        }}
        component={EditUser}
      />
      <DetailStack.Screen
        name="MedicineListScreen"
        options={{
          title: 'Kê đơn thuốc',
        }}
        component={MedicineListScreen}
      />
       <DetailStack.Screen
        name="ConfirmAppointmentScreen"
        options={{
          title:'Danh sách cuộc hẹn cần xác nhận',
        }}
        component={ConfirmAppointmentScreen}
      />
    </DetailStack.Navigator>
  );
};

export default DetailsNavigator;
