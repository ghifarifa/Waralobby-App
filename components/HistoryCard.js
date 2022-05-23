import { StyleSheet, Text, View, Pressable, Image, Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const HistoryCard = (props) => {
  const followUpButton = () => {
    if (
      props.status != 'Offer Sent' &&
      props.status != 'Unsuitable' &&
      props.status != 'Success'
    ) {
      return (
        <View style={styles.flex2}>
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? '#D4EAFF' : '#fff' },
              styles.button
            ]}
            onPress={() => {
              Linking.openURL(
                'https://wa.me/628112340163?text=Hello%2C%20I%20already%20submitted%20my%20application%20for%20franchise%20offering%20with%20your%20product.%20Can%20I%20get%20any%20update%20or%20further%20information%20about%20it%3F%20Thanks.'
              )
            }}
          >
            <Text style={styles.buttonTxt}>FOLLOW UP</Text>
          </Pressable>
        </View>
      )
    }
  }

  const statusColor = () => {
    if (props.status == 'Offer Sent') {
      return (
        <Text style={{ backgroundColor: '#C4C4C4', ...styles.status }}>
          {props.status}
        </Text>
      )
    }
    if (props.status == 'Reviewed') {
      return (
        <Text style={{ backgroundColor: '#F5A623', ...styles.status }}>
          {props.status}
        </Text>
      )
    }
    if (props.status == 'Success') {
      return (
        <Text style={{ backgroundColor: '#23C3F5', ...styles.status }}>
          {props.status}
        </Text>
      )
    }
    if (props.status == 'Unsuitable') {
      return (
        <Text style={{ backgroundColor: '#F52323', ...styles.status }}>
          {props.status}
        </Text>
      )
    }
    if (props.status == 'Payment') {
      return (
        <Text style={{ backgroundColor: '#D8F523', ...styles.status }}>
          {props.status}
        </Text>
      )
    }
  }

  return (
    <View style={styles.flexbox}>
      <View style={styles.flex1}>
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
            <View style={styles.location}>
              <Ionicons name="location-outline" size={20} color="black" />
              <Text>{props.location}</Text>
            </View>
            {statusColor()}
            {/* <Text style={{ backgroundColor: 'red', ...styles.status }}>
              {props.status}
            </Text> */}
          </View>
          <View style={styles.catCon}>
            <Text style={styles.cat}>{props.category}</Text>
          </View>
        </View>
      </View>
      {followUpButton()}
      {/* <View style={styles.flex2}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#D4EAFF' : '#fff' },
            styles.button
          ]}
        >
          <Text style={styles.buttonTxt}>FOLLOW UP</Text>
        </Pressable>
      </View> */}
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
    width: 52,
    height: 52,
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img2: {
    width: 50,
    height: 50,
    borderRadius: 13
  },
  txt: {
    fontWeight: 'bold',
    marginTop: 10,
    // borderWidth: 1,
    width: 170
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
    marginEnd: 30
  },
  status: {
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    borderRadius: 100,
    alignSelf: 'flex-start',

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
