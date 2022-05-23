import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import 'intl'

import 'intl/locale-data/jsonp/id'
const currencyFormater = (int) => {
  let formatter = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  })
  return formatter.format(int)
}
const RecomendedCard = ({ navigation, ...props }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetailFranchise', { ...props })}
    >
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.logo2}
            source={{
              uri: props.uri
            }}
          ></Image>
        </View>
        <Text style={styles.head}>{props.name}</Text>
        <View style={styles.loc}>
          <Ionicons name="location-outline" size={20} color="black" />
          <Text style={styles.txt}>{props.location}</Text>
        </View>
        <Text style={styles.txt}>{currencyFormater(props.price)}</Text>
      </View>
      <View style={styles.atr}>
        <Text style={styles.cat}>Coffee</Text>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#4A94E8' : '#5CA5FC' },
            styles.button
          ]}
          onPress={() => navigation.navigate('RequestForm')}
        >
          <Text style={styles.buttonTxt}>Offer Franchise</Text>
        </Pressable>
      </View>
    </TouchableOpacity>
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
    maxWidth: 250
  },
  container: {
    width: 160
  },
  head: {
    fontWeight: 'bold',
    fontSize: 14
  },
  txt: {
    fontSize: 11
  },
  logo: {
    width: 42,
    height: 42,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo2: {
    width: 40,
    height: 40,
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
