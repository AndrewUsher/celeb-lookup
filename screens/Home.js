import React, { useState } from 'react'
import { Button, Input } from 'react-native-elements'
import styled from 'styled-components/native'
import { useColorScheme } from 'react-native-appearance'
import {
  border,
  createError,
  validateDay,
  validateMonth,
  formatDay,
  formatMonth
} from '../helpers'

const HomeContainer = styled.View`
  background-color: ${props => props.scheme === 'light' ? props.theme.light.bg : props.theme.dark.bg};
  height: 100%;
  padding: 5%;
`

const buttonStyle = {
  backgroundColor: '#f26100'
}

const containerStyle = {
  marginTop: '10%'
}

const TextInput = props => (
  <Input
    containerStyle={{ marginBottom: 15, width: '100%', paddingHorizontal: 0 }}
    inputStyle={{ paddingLeft: 20 }}
    inputContainerStyle={{
      ...border(1, '#202124'),
      borderRadius: 5
    }}
    labelStyle={{ borderBottomWidth: 0 }}
    maxLength={2}
    keyboardType="number-pad"
    {...props}
  />
)

const Home = ({ navigation }) => {
  const scheme = useColorScheme()
  console.log(scheme)
  const [month, setMonth] = useState(null)
  const [day, setDay] = useState(null)
  const [monthError, setMonthError] = useState(null)
  const [dayError, setDayError] = useState(null)
  const clearMonthError = () => setMonthError(null)
  const clearDayError = () => setDayError(null)
  const goToBirthdaysPage = () => {
    const formattedMonth = formatMonth(month)
    const formattedDay = formatDay(day)
    const monthIsValid = validateMonth(formattedMonth)
    const dayIsValid = validateDay(formattedDay)

    if (!monthIsValid) {
      setMonthError(createError('month'))
      setTimeout(clearMonthError, 2000)
    }

    if (!dayIsValid) {
      setDayError(createError('day'))
      setTimeout(clearDayError, 2000)
    }

    if (monthIsValid && dayIsValid) {
      navigation.navigate('Birthdays', {
        day: `${formattedMonth}-${formattedDay}`
      })
    }
  }
  return (
    <HomeContainer scheme={scheme}>
      <TextInput
        value={month}
        onChangeText={setMonth}
        placeholder="Month"
        errorMessage={monthError}
      />
      <TextInput
        value={day}
        onChangeText={setDay}
        placeholder="Day"
        errorMessage={dayError}
      />
      <Button
        raised
        buttonStyle={buttonStyle}
        containerStyle={containerStyle}
        title="Find Birthdays"
        onPress={goToBirthdaysPage}
      />
    </HomeContainer>
  )
}

export default Home
