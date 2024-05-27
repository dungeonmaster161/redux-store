import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { products } from '../utils/data'
import Product from '../components/Product'

const Products = () => {
  return (
      <ScrollView>
      {
        products.map((data,index)=><Product price={data.price} name={data.name} />)
      }
      </ScrollView>
  )
}

export default Products