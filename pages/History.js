import { StyleSheet, Text, View, ScrollView } from 'react-native'
import HistoryCard from '../components/HistoryCard'
const generateHistory = () => {
  let arr = []
  for (let index = 0; index < 10; index++) {
    arr.push(
      <View style={{ marginBottom: 10 }}>
        <HistoryCard />
      </View>
    )
  }
  return <View style={styles.container}>{arr}</View>
}
const History = () => {
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
    marginStart: 20,
    marginBottom: 10
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
