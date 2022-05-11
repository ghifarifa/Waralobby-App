import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import RecomendedCard from './components/RecomendedCard'
import FrancisorCard from './components/FranchisorCard'
import HistoryCard from './components/HistoryCard'
export default function App() {
  return (
    <View style={styles.container}>
      <RecomendedCard />
      <FrancisorCard />
      <HistoryCard />
      {/* <Text>Hello World</Text>
      <StatusBar style="auto" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
