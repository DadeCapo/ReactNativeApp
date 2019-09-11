import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  let name = 'Simon'
  const greeting = <Text>My name is {name}</Text>

  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native!</Text>
      <Text style={styles.subHeaderText}>{greeting}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderText: {
    fontSize: 20
  }
})

export default ComponentsScreen
