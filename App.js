import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import RootNavigation from './src/RootNavigation'
import LoginScreen from './src/screens/LoginAndSignUpScreen/LoginScreen'
import WelcomeScreen from './src/screens/LoginAndSignUpScreen/WelcomeScreen'

export default function App() {
  // return <WelcomeScreen />
  return (
    <RootNavigation />
    // <LoginScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
