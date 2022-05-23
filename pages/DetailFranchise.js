import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'

const DetailFranchise = ({ route, navigation }) => {
  const payload = route.params
  const data = [
    { key: 'Minimum Cash Required', value: 'Rp 1.000.000' },
    { key: 'Total Investment', value: 'Rp 1.000.000 - Rp 0' },
    { key: 'Year Founded', value: '2017' }
  ]
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, margin: 10 }}>
          Detail Franchise
        </Text>
        <View style={styles.franchiseSum}>
          <View style={styles.franchiseBox1}>
            <Text
              style={{ fontWeight: 'bold', marginBottom: 15, fontSize: 16 }}
            >
              {route.params.name}
            </Text>
            <View style={styles.imageBox}>
              <Image
                source={{
                  uri: route.params.uri
                }}
                style={styles.franchiseLogo}
              />
            </View>
            <Text style={{ marginTop: 5, marginBottom: 5 }}>Summary</Text>
            <Text style={{ textAlign: 'left', fontSize: 12, maxHeight: 134 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec metus sem. Duis ut turpis metus.
            </Text>
            <View style={styles.location}>
              <Image
                source={require('../assets/location.png')}
                style={styles.locationLogo}
              />
              <Text>Bandung</Text>
            </View>
          </View>
          <View style={styles.franchiseBox2}>
            <View
              style={{
                backgroundColor: '#5CA5FC',
                borderRadius: 10,
                maxWidth: 75,
                marginLeft: 80
              }}
            >
              <Text
                style={{ fontSize: 12, textAlign: 'center', color: 'white' }}
              >
                Coffee
              </Text>
            </View>
            <View style={styles.priceBox}>
              <Text
                style={{ fontSize: 14, textAlign: 'center', color: 'white' }}
              >
                Business Cost, Fees & Facts
              </Text>
              {data.map((item) => {
                return (
                  <View>
                    <View style={{ backgroundColor: '#DADADA', padding: 5 }}>
                      <Text>{item.key}</Text>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 5 }}>
                      <Text>{item.value}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
            <TouchableOpacity
              navigation={navigation}
              onPress={() => navigation.navigate('RequestForm', { ...payload })}
              style={{
                backgroundColor: '#3B93FC',
                borderRadius: 6,
                marginTop: 20,
                padding: 5,
                maxWidth: 100,
                height: 40,
                marginLeft: 60,
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <Text
                style={{ fontSize: 14, textAlign: 'center', color: 'white' }}
              >
                Request
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.overview}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Overview</Text>
          <View>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec metus sem. Duis ut turpis metus. Quisque dolor ante, ultricies
              eget ultrices eu, ornare at lacus. Fusce sit amet tempor metus.
              Pellentesque interdum tincidunt elit hendrerit posuere.
              Pellentesque dignissim tristique quam, ut lobortis ipsum finibus
              vitae. Aenean eget odio vel neque gravida scelerisque.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  franchiseLogo: {
    width: 80,
    height: 80,
    backgroundColor: 'white'
  },
  locationLogo: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  franchiseSum: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#A0CAFC',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'black'
  },
  container: {
    margin: 10,
    padding: 20
  },
  franchiseBox1: {
    width: '45%',
    padding: 20
  },
  franchiseBox2: {
    width: '55%',
    padding: 20
  },
  location: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin: 5,
    marginTop: 355,
    marginLeft: 20,
    position: 'absolute'
  },
  overview: {
    borderColor: 'black',
    borderWidth: 0.3,
    borderRadius: 11,
    padding: 20,
    marginTop: 20,
    backgroundColor: '#FDFDFD'
  },
  imageBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 6,
    maxWidth: 200,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceBox: {
    marginTop: 20,
    backgroundColor: '#3B93FC',
    paddingTop: 10,
    paddingBottom: 30,
    borderRadius: 6
  }
})

export default DetailFranchise
