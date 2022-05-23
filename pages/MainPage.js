import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import History from './History'
import Home from './Home'
import Profile from './Profile'
import HomeStackScreen from './HomeNav'
//Screen names
const homeName = 'Home'
const historyName = 'History'
const profileName = 'Profile'

const Tab = createBottomTabNavigator()

function MainPage() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            borderRadius: 15,
            backgroundColor: '#A0CAFC',
            height: 70
          },
          tabBarItemStyle: {},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            let rn = route.name

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn === historyName) {
              iconName = focused ? 'ios-book-sharp' : 'ios-book-outline'
            } else if (rn === profileName) {
              iconName = focused ? 'ios-person-sharp' : 'ios-person-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: '#5CA5FC',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 }
        }}
      >
        <Tab.Screen name={homeName} component={HomeStackScreen} />
        <Tab.Screen name={historyName} component={History} />
        <Tab.Screen name={profileName} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainPage
