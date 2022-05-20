import * as React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import FrancisorCard from '../components/FranchisorCard'
import RecomendedCard from '../components/RecomendedCard'
const generateFranchisor = () => {
  let arr = []
  for (let index = 0; index < 10; index++) {
    arr.push(
      <View style={{ marginBottom: 10 }}>
        <FrancisorCard />
      </View>
    )
  }
  return <View style={styles.container}>{arr}</View>
}
const Home = () => {
  return (
    <ScrollView>
      <Text style={styles.h1}>Hello, John!</Text>
      <Text style={styles.h2}>Hope you find some good oportunities today</Text>
      <Text style={styles.border}>Recomended for you</Text>
      <View style={styles.recomendedContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ marginRight: 8 }}>
            <RecomendedCard />
          </View>
          <View style={{ marginRight: 8 }}>
            <RecomendedCard />
          </View>
          <View style={{ marginRight: 8 }}>
            <RecomendedCard />
          </View>
          <View style={{ marginRight: 8 }}>
            <RecomendedCard />
          </View>
        </ScrollView>
      </View>

      <Text style={styles.border}>Top Franchisor</Text>
      <View style={styles.listContainer}>{generateFranchisor()}</View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 70,
    marginBottom: 10,
    paddingStart: 12
  },
  h2: {
    paddingStart: 12,
    fontSize: 12
  },
  border: {
    paddingStart: 12,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10
  },
  container: {
    alignItems: 'center'
  },
  recomendedContainer: {
    height: 130,
    marginStart: 15,
    marginBottom: -5
  }
})

export default Home
