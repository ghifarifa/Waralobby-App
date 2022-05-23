import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import DetailFranchise from './DetailFranchise'
import RequestForm from './RequestForm'
import History from './History'
const HomeStack = createNativeStackNavigator()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="DetailFranchise" component={DetailFranchise} />
      <HomeStack.Screen name="RequestForm" component={RequestForm} />
      <HomeStack.Screen name="HistoryPage" component={History} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
