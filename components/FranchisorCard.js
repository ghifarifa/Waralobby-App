import { StyleSheet, Text, View } from 'react-native'

const FrancisorCard = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.img}></View>
        <View>
          <Text style={styles.txt}>{props.name}</Text>
          <Text>{props.location}</Text>
        </View>
        <Text style={styles.cat}>{props.category}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    flexDirection: 'row',
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
    marginRight: 21,
    borderRadius: 13
  },
  txt: {
    fontWeight: 'bold',
    minWidth: 170
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
    marginLeft: 50,
    width: 70,
    minWidth: 70,
    maxWidth: 70
  }
})

export default FrancisorCard
