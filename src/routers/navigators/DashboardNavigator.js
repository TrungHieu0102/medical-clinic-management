import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Dashboard from '../../components/Dashboard/Dashboard'

const DashboardNavigator = () => {
    const DashboardStack = createNativeStackNavigator()
   
  return (
   <DashboardStack.Navigator>
    <DashboardStack.Screen name = "Dashboard" component={Dashboard}/>
   </DashboardStack.Navigator>
  )
}
export default DashboardNavigator