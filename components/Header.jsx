import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Redux Store</Text>
      <Text style={styles.text}>Bag : 0</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20
    },
    text:{
        fontWeight:'bold',
        fontSize:20
    }
})

export default HeaderHome