import React from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from 'styled-components'
import BirthdaysScreen from './screens/Birthdays'
import HomeScreen from './screens/Home'
import theme from './theme'

const { Navigator, Screen } = createStackNavigator()

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: '#f26100'
  },
  title: 'Who\'s Your Birthday Twin?'
}

const AppWrapper = () => {
  const scheme = useColorScheme()
  return (
    <ThemeProvider theme={theme[scheme]} >
      <NavigationContainer>
        <Navigator initialRouteName="Home" screenOptions={defaultScreenOptions}>
          <Screen name="Home" component={HomeScreen} />
          <Screen name="Birthdays" component={BirthdaysScreen} />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider >
  )
}

const queryClient = new QueryClient()

const App = () => (
  <AppearanceProvider>
    <QueryClientProvider client={queryClient}>
      <AppWrapper />
    </QueryClientProvider>
  </AppearanceProvider>
)

export default App
