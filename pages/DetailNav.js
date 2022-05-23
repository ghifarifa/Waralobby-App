import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailFranchise from './DetailFranchise'
import RequestForm from './RequestForm'
import ReqScreen from './RequestNav'
import Profile from './Profile'
const DetailStack = createNativeStackNavigator()
function DetailScreen() {
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <DetailStack.Screen name="DetailFranchise" component={DetailFranchise} />
      <DetailStack.Screen name="Profile" component={Profile} />
    </DetailStack.Navigator>
  )
}

export default DetailScreen
