import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const RecomendedCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.logo}></View>
        <Text style={styles.head}>Kopi Kenangan</Text>
        <View style={styles.loc}>
          <Ionicons name="location-outline" size={20} color="black" />
          <Text style={styles.txt}>Bandung</Text>
        </View>
        <Text style={styles.txt}>Rp 20.000.000</Text>
      </View>
      <View style={styles.atr}>
        <Text style={styles.cat}>Coffee</Text>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#4A94E8' : '#5CA5FC' },
            styles.button
          ]}
        >
          <Text style={styles.buttonTxt}>Offer Franchise</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    // height: 120,
    // width: 230,
    backgroundColor: '#A0CAFC',
    // alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#000',
    padding: 12,
    maxWidth: 230
  },
  container: {
    marginRight: 20
  },
  head: {
    fontWeight: 'bold',
    fontSize: 14
  },
  txt: {
    fontSize: 11
  },
  logo: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000'
  },
  atr: {
    flexDirection: 'column'
    // borderWidth: 1
  },
  cat: {
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 100,
    fontSize: 9,
    width: 50,
    alignSelf: 'flex-end',
    marginBottom: 58,
    backgroundColor: '#5CA5FC',
    color: '#fff'
  },
  button: {
    borderWidth: 1,
    borderRadius: 100
  },
  buttonTxt: {
    borderRadius: 100,
    textAlign: 'center',
    fontSize: 9,
    alignSelf: 'flex-end',
    color: '#fff',
    padding: 3
  },
  loc: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default RecomendedCard
