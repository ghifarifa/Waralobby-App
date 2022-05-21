import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
const ProfilePicture = () => {
  return (
    <View>
      <Image source={require('../assets/john.png')} style={styles.imageFrame} />
    </View>
  )
}
const styles = StyleSheet.create({
  imageFrame: {
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: 'black',
    width: 120,
    height: 120
  }
})
export default ProfilePicture
