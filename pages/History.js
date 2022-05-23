import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import HistoryCard from '../components/HistoryCard'
import { db, auth } from '../firebase/config'

// const generateHistory = () => {
//   let arr = []
//   for (let index = 0; index < 10; index++) {
//     arr.push(
//       <View style={{ marginBottom: 10 }}>
//         <HistoryCard />
//       </View>
//     )
//   }
//   return <View style={styles.container}>{arr}</View>
// }
const History = ({ navigation }) => {
  const [history, setHistory] = useState([])
  useEffect(() => {
    db.collection('history').onSnapshot((docs) => {
      let histories = []
      docs.forEach((doc) => {
        histories.push(doc.data())
      })
      setHistory(histories)
      console.log(histories)
    })
  }, [])

  const generateHistory = () => {
    let views = []
    history.forEach((dat) => {
      views.push(
        <View style={{ marginBottom: 10 }}>
          <HistoryCard
            name={dat.name}
            location={dat.location}
            status={dat.status}
            uri={dat.uri}
            category={dat.category}
          />
        </View>
      )
    })
    // for (let index = 0; index < 10; index++) {
    //   arr.push(
    //     <View style={{ marginBottom: 10 }}>
    //       <HistoryCard />
    //     </View>
    //   )
    // }
    return <View style={styles.container}>{views}</View>
  }
  return (
    <ScrollView>
      <Text style={styles.h1}>History</Text>
      {generateHistory()}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 70,
    marginBottom: 10,
    marginStart: 20
  },
  container: {
    alignItems: 'center'
  },
  asd: {
    margin: 120,
    backgroundColor: '#000'
  }
})

export default History
