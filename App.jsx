import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { mystore } from './redux/store/store'
import Home from './screens/Home'

const App = () => {
  return (
      // <Provider store={mystore}>
        <Home />
      // </Provider>
    )
}

export default App