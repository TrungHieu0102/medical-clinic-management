import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Dashboard/Home";
import DoctorCategoryList from "../../screens/Dashboard/DoctorCategoryList";
import DoctorDetail from "../../screens/Dashboard/DoctorDetail";
import BookAppointment from "../../screens/Booking/BookAppointment";
import ListAllDoctor from "../../screens/Dashboard/AllDoctor";
import SearchDoctor from "../../screens/Dashboard/SearchDoctor";
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
      <DashboardStack.Screen
        name="SearchDoctor"
        component={SearchDoctor}
        options={{ headerShown: false }}
      />
    </DashboardStack.Navigator>
  );
};
export default DashboardNavigator;
