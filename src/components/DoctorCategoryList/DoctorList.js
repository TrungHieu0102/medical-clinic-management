import { View, Text, FlatList,  TouchableOpacity } from 'react-native'
import React from 'react'
import DoctorCardItem from '../Shared/DoctorCardItem'
import { useNavigation } from '@react-navigation/native'

const DoctorList = ({doctorList}) => {
    const navigation = useNavigation();
  return (
    <View style={{marginTop:15}}>
    <FlatList data={doctorList}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate("DoctorDetail",{
            doctor:item
        })} >
            <DoctorCardItem doctor={item}/>
        </TouchableOpacity>
    )}/>
    </View>
  )
}

export default DoctorList