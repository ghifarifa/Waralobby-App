import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const FrancisorCard = ({ navigation, ...props }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailFranchise', { ...props })}
    >
      <View style={styles.container}>
        <View style={styles.img}>
          <Image
            style={styles.img2}
            source={{
              uri: props.uri
            }}
          ></Image>
        </View>
        <View>
          <Text style={styles.txt}>{props.name}</Text>
          <Text>{props.location}</Text>
        </View>
        <Text style={styles.cat}>{props.category}</Text>
      </View>
    </TouchableOpacity>
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
    width: 51,
    height: 51,
    borderWidth: 0.5,
    marginRight: 21,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  img2: {
    width: 50,
    height: 50,
    borderRadius: 14
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
