import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const HistoryCard = () => {
  return (
    <View style={styles.flexbox}>
      <View style={styles.flex1}>
        <View style={styles.container}>
          <View style={styles.img}></View>
          <View>
            <Text style={styles.txt}>Sabana Fried Chicken</Text>
            <View style={styles.location}>
              <Ionicons name="location-outline" size={20} color="black" />
              <Text>Jakarta</Text>
            </View>
            <Text style={styles.status}>Offer Sent</Text>
          </View>
          <View style={styles.catCon}>
            <Text style={styles.cat}>Fast Food</Text>
          </View>
        </View>
      </View>
      <View style={styles.flex2}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#D4EAFF' : '#fff' },
            styles.button
          ]}
        >
          <Text style={styles.buttonTxt}>FOLLOW UP</Text>
        </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  flexbox: {
    borderWidth: 0.1,
    borderRadius: 3,
    maxWidth: 340,
    minWidth: 340,
    backgroundColor: '#f5f5fa'
  },
  flex1: {
    padding: 10
  },
  flex2: {
    padding: 12
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 14,
    marginStart: 0
  },
  img: {
    width: 50,
    height: 50,
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 13
  },
  txt: {
    fontWeight: 'bold',
    marginTop: 10
  },
  catCon: {
    width: 106
  },
  cat: {
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 9,
    borderRadius: 100,
    alignSelf: 'flex-end',
    backgroundColor: '#5CA5FC',
    color: '#fff',
    paddingHorizontal: 8,
    marginEnd: 10
  },
  status: {
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    borderRadius: 100,
    alignSelf: 'flex-start',
    backgroundColor: '#C4C4C4',
    color: '#000',
    paddingHorizontal: 8,
    marginTop: 10
  },
  button: {
    borderWidth: 1,
    alignItems: 'center',
    padding: 8,
    borderColor: '#5CA5FC'
  },
  buttonTxt: {
    color: '#5CA5FC',
    fontWeight: 'bold'
  },
  location: {
    flexDirection: 'row'
  }
})

export default HistoryCard
