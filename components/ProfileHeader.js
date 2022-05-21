import { StyleSheet, Text, View } from 'react-native'
import ProfilePicture from './ProfilePicture'

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pic}>
        <ProfilePicture />
      </View>
      <View style={styles.prof}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>John</Text>
        <Text>john123@gmail.com</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderWidth: 1,
    height: 130,
    width: 350
  },
  pic: {
    justifyContent: 'center'
  },
  prof: {
    justifyContent: 'center',
    marginStart: 20
  }
})

export default ProfileHeader
