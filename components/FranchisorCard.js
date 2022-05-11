import { StyleSheet, Text, View } from 'react-native'

const FrancisorCard = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.img}></View>
        <View>
          <Text style={styles.txt}>Sabana Fried Chicken</Text>
          <Text>Jakarta</Text>
        </View>
        <Text style={styles.cat}>Fast Food</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    flexDirection: 'row',
    maxWidth: 300,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    padding: 10
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
  }
})

export default FrancisorCard
