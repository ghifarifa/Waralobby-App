import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import RecomendedCard from './components/RecomendedCard'
import FrancisorCard from './components/FranchisorCard'
import HistoryCard from './components/HistoryCard'
import History from './pages/History'
import Navbar from './components/Navbar'
import MainPage from './pages/MainPage'
import DetailFranchise from './pages/DetailFranchise';
import RequestForm from './pages/RequestForm'
export default function App() {
  return (
    <DetailFranchise />
    // <View style={styles.container}>
    //   {/* <History /> */}
    //   {/* <Navbar /> */}
    //   <MainPage />
    // </View>
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
