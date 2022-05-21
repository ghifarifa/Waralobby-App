import { StyleSheet, Text, View } from 'react-native'
import ProfilePicture from './ProfilePicture'

const ProfileBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bd}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
          Birthdate
        </Text>
        <Text
          style={{
            backgroundColor: '#A0CAFC',
            height: 30,
            borderRadius: 5,
            marginBottom: 5
          }}
        >
          June 8, 1991
        </Text>
      </View>
      <View style={styles.gender}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
          Gender
        </Text>
        <Text
          style={{
            backgroundColor: '#A0CAFC',
            height: 30,
            borderRadius: 5,
            marginBottom: 5
          }}
        >
          Male
        </Text>
      </View>
      <View style={styles.career}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
          Current Career
        </Text>
        <Text
          style={{
            backgroundColor: '#A0CAFC',
            height: 30,
            borderRadius: 5,
            marginBottom: 5
          }}
        >
          Unemployed
        </Text>
      </View>
      <View style={styles.industry}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
          Industry
        </Text>
        <Text
          style={{
            backgroundColor: '#A0CAFC',
            height: 30,
            borderRadius: 5,
            marginBottom: 5
          }}
        >
          food and Beverage
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    height: 550,
    width: 350
  },
  pic: {
    justifyContent: 'center'
  },
  prof: {
    justifyContent: 'center',
    marginStart: 20
  },
  bd: {
    marginTop: 30
  }
})

export default ProfileBody
