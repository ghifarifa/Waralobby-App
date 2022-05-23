import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RequestForm from './RequestForm'
import History from './History'
const ReqStack = createNativeStackNavigator()
function ReqScreen() {
  return (
    <ReqStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <ReqStack.Screen name="RequestForm" component={RequestForm} />
      <ReqStack.Screen name="HistoryPage" component={History} />
    </ReqStack.Navigator>
  )
}

export default ReqScreen
