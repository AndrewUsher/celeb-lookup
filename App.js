import { createStackNavigator, createAppContainer } from 'react-navigation'
import BirthdaysScreen from './screens/Birthdays'
import HomeScreen from './screens/Home'

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

export default createAppContainer(AppNavigator)
