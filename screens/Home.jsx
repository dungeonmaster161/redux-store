import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Products from './Products'
import HeaderHome, { Header } from '../components/Header'

const Home = () => {
  return (
   <SafeAreaView>
    <HeaderHome />
    <Products />
    </SafeAreaView>
  )
}

export default Home