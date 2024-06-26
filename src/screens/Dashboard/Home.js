import { View, Text, Button } from 'react-native'
import React from 'react'
import Header from '../../components/Dashboard/Header';
import SearchBar from '../../components/Dashboard/SearchBar';
import Slider from '../../components/Dashboard/Slider';
import Categories from '../../components/Dashboard/Categories';
import SpecialDoctor from '../../components/Dashboard/SpecialDoctor';
const Home = ({ navigation }) => {
  return (
    <View style={{padding:20,marginTop: 20}}> 
        <Header/>
        <SearchBar/>
        <Slider/>     
        <Categories/>
        <SpecialDoctor/>
        <Slider/>
    </View>
  )
}

export default Home