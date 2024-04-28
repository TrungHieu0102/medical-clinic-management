import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../../components/Dashboard/Header';
import SearchBar from '../../components/Dashboard/SearchBar';
import Slider from '../../components/Dashboard/Slider';
import Categories from '../../components/Dashboard/Categories';
const Home = ({ navigation }) => {
    const { isLoaded,signOut } = useAuth();
  return (
    <View style={{padding:20,marginTop: 20}}> 
        <Header/>
        <SearchBar setSearchText={(value)=>console.log(value)} />
        <Slider/>
        <Categories/>

    </View>
  )
}

export default Home