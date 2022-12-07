import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './screens/LoginAndSignUpScreen/AuthNavigation'

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation></AuthNavigation>
    </NavigationContainer>
  )
}

export default RootNavigation
