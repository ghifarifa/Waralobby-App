import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'

const Navbar = () => {
  return (
    <View style={styles.container}>
      {/* Home */}
      <Pressable style={styles.home}>
        <Ionicons name="md-home-outline" size={30} color="black" />
        <Text>Home</Text>
      </Pressable>
      {/* History */}
      <Pressable style={styles.history}>
        <Feather name="book-open" size={30} color="black" />
        <Text>History</Text>
      </Pressable>
      {/* Profile */}
      <Pressable style={styles.profile}>
        <Ionicons name="ios-person-outline" size={30} color="black" />
        <Text>Profile</Text>
      </Pressable>
    </View>
  )
}
const alignment = {
  padding: 5,
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center'
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 340,
    minWidth: 340,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#A0CAFC',
    marginBottom: 10
  },
  home: {
    ...alignment
  },
  history: {
    ...alignment
  },
  profile: {
    ...alignment
  }
})

export default Navbar
