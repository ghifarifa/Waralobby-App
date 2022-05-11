import { StyleSheet, Text, View, Pressable } from 'react-native'

const HistoryCard = () => {
  return (
    <View style={styles.flexbox}>
      <View style={styles.flex1}>
        <View style={styles.container}>
          <View style={styles.img}></View>
          <View>
            <Text style={styles.txt}>Sabana Fried Chicken</Text>
            <Text>Jakarta</Text>
            <Text style={styles.status}>Offer Sent</Text>
          </View>
          <Text style={styles.cat}>Fast Food</Text>
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
    borderWidth: 1,
    borderRadius: 14
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
    justifyContent: 'center',
    borderRadius: 14
  },
  img: {
    width: 50,
    height: 50,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 13
  },
  txt: {
    fontWeight: 'bold'
  },
  cat: {
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 9,
    borderRadius: 100,
    alignSelf: 'flex-start',
    backgroundColor: '#5CA5FC',
    color: '#fff',
    padding: 3,
    marginTop: 20,
    marginLeft: 20
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
  }
})

export default HistoryCard
