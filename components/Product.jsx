import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
const Product = ({name,price}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Name : {name}</Text>
        <Text style={styles.text}>Price : {price}</Text>
      </View>
      <TouchableOpacity style={styles.btn}><Text style={styles.textBtn}>Add to cart</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    marginVertical:10,
    backgroundColor:'#318CE7',
    padding:10,
    borderRadius:10
  },
  text:{
    color:'white',
    fontSize:12,
    fontWeight:700
  },
  btn:{
    backgroundColor:'#66FF00',
    justifyContent:'center',
    padding:5,
    borderRadius:10
  },
  textBtn:{
    color:'blue'
  }
})
export default Product