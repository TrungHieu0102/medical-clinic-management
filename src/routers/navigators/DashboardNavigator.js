import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Dashboard/Home";
const DashboardNavigator = () => {
  const DashboardStack = createNativeStackNavigator();

  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Trang chủ" component={Home}  options={{headerShown: false}} />
    </DashboardStack.Navigator>
  );
};
export default DashboardNavigator;
