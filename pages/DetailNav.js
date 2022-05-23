import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailFranchise from './DetailFranchise'
import RequestForm from './RequestForm'
const DetailStack = createNativeStackNavigator()
function DetailScreen() {
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <DetailStack.Screen name="DetailFranchise" component={DetailFranchise} />
      <DetailStack.Screen name="RequestForm" component={RequestForm} />
    </DetailStack.Navigator>
  )
}

export default DetailScreen
