import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Dashboard from '../../components/Dashboard/Dashboard'
import { Avatar, Button, Card, Text } from 'react-native-paper';
const DashboardNavigator = () => {
    const DashboardStack = createNativeStackNavigator()
   
  return (
   <DashboardStack.Navigator>
    <DashboardStack.Screen name = "Trang chủ" component={Dashboard}/>
   </DashboardStack.Navigator>
  )
}
export default DashboardNavigator