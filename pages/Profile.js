import * as React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
const Profile = () => {
  return (
    <ScrollView>
      <Text style={styles.h1}>Profile</Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 70,
    marginBottom: 10
  },
  container: {
    alignItems: 'center'
  },
  asd: {
    margin: 120,
    backgroundColor: '#000'
  }
})

export default Profile
