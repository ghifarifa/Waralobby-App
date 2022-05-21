import * as React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ProfileHeader from '../components/ProfileHeader'
import ProfilePicture from '../components/ProfilePicture'
import ProfileBody from '../components/ProfileBody'
const Profile = () => {
  return (
    <ScrollView>
      <Text style={styles.h1}>Profile</Text>
      <View style={styles.header}>
        <ProfileHeader />
        <ProfileBody />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 70,
    marginBottom: 10,
    marginStart: 20
  },
  header: {
    alignSelf: 'center'
  }
})

export default Profile
