import React, { useState } from 'react'
import { Button, Input } from 'react-native-elements'
import styled from 'styled-components/native'
import { withTheme } from 'styled-components'
import {
  border,
  createError,
  validateDay,
  validateMonth,
  formatDay,
  formatMonth
} from '../helpers'

const HomeContainer = styled.View`
  background-color: ${props => props.theme.bg};
  min-height: 100%;
  padding: 5%;
`

const buttonStyle = {
  backgroundColor: '#f26100'
}

const TextInput = ({ inputBorder, ...props }) => (
  <Input
    containerStyle={{ width: '100%', paddingHorizontal: 0 }}
    inputStyle={{ paddingLeft: 20, color: inputBorder }}
    inputContainerStyle={{
      ...border(1, inputBorder),
      borderRadius: 5
    }}
    labelStyle={{ borderBottomWidth: 0 }}
    placeholderTextColor={inputBorder}
    maxLength={2}
    keyboardType="number-pad"
    {...props}
  />
)

const Home = ({ navigation, theme }) => {
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
    <HomeContainer>
      <TextInput
        value={month}
        onChangeText={setMonth}
        placeholder="Month"
        errorMessage={monthError}
        inputBorder={theme.inputBorder}
      />
      <TextInput
        value={day}
        onChangeText={setDay}
        placeholder="Day"
        errorMessage={dayError}
        inputBorder={theme.inputBorder}
      />
      <Button
        raised
        buttonStyle={buttonStyle}
        title="Find Birthdays"
        onPress={goToBirthdaysPage}
      />
    </HomeContainer>
  )
}

export default withTheme(Home)
