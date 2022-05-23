import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import FrancisorCard from '../components/FranchisorCard'
import RecomendedCard from '../components/RecomendedCard'
import { db, auth } from '../firebase/config'

const Home = () => {
  const [franchise, setFranchise] = useState([])
  useEffect(() => {
    db.collection('franchise').onSnapshot((docs) => {
      let franchises = []
      docs.forEach((doc) => {
        franchises.push(doc.data())
      })
      setFranchise(franchises)
    })
  }, [])
  const generateFranchisor = () => {
    let views = []
    franchise.forEach((dat) => {
      views.push(
        <View style={{ marginBottom: 10 }}>
          <FrancisorCard
            name={dat.name}
            location={dat.location}
            category={dat.category}
            uri={dat.uri}
          />
        </View>
      )
    })

    return <View style={styles.container}>{views}</View>
  }

  const generateRecomendation = () => {
    let views = []
    franchise.forEach((dat) => {
      views.push(
        <View style={{ marginRight: 8 }}>
          <RecomendedCard
            name={dat.name}
            location={dat.location}
            category={dat.category}
            uri={dat.uri}
            price={dat.price}
          />
        </View>
      )
    })

    return views
  }
  return (
    <ScrollView>
      <Text style={styles.h1}>Hello, John!</Text>
      <Text style={styles.h2}>Hope you find some good oportunities today</Text>
      <Text style={styles.border}>Recomended for you</Text>
      <View style={styles.recomendedContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {generateRecomendation()}
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
