import React from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { ThemeProvider } from 'styled-components'
import BirthdaysScreen from './screens/Birthdays'
import HomeScreen from './screens/Home'
import theme from './theme'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Birthdays: {
      screen: BirthdaysScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f26100'
      },
      title: 'Who\'s Your Birthday Twin?'
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

const App = () => (
  <AppearanceProvider>
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  </AppearanceProvider>
)

export default App
