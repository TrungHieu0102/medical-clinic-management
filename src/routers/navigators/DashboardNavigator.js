import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Dashboard/Home";
import DoctorCategoryList from "../../screens/Dashboard/DoctorCategoryList";
import DoctorDetail from "../../screens/Dashboard/DoctorDetail";
import BookAppointment from "../../screens/Booking/BookAppointment";
import ListAllDoctor from "../../screens/Dashboard/AllDoctor";
const DashboardNavigator = () => {
  const DashboardStack = createNativeStackNavigator();

  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Trang chủ"
        component={Home}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name="DoctorCategoryList"
        component={DoctorCategoryList}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name="DoctorDetail"
        component={DoctorDetail}
        options={{ headerShown: false }}
      />
       <DashboardStack.Screen
        name="BookAppointment"
        component={BookAppointment}
        options={{ headerShown: false }}
      />
       <DashboardStack.Screen
        name="ListAllDoctor"
        component={ListAllDoctor}
        options={{ headerShown: false }}
      />
    </DashboardStack.Navigator>
  );
};
export default DashboardNavigator;
