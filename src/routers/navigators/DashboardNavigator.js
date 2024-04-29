import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Dashboard/Home";
import DoctorCategoryList from "../../screens/Dashboard/DoctorCategoryList";
import DoctorDetail from "../../screens/Dashboard/DoctorDetail";
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
    </DashboardStack.Navigator>
  );
};
export default DashboardNavigator;
