// @flow

import React, { Fragment, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Link, NativeRouter, Route, Switch } from 'react-router-native'
import styled from 'styled-components/native'
import { Button, Input, Text } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import BirthdaysScreen from './screens/Birthdays'
import HomeScreen from './screens/Home'

const Header = styled.View`
  align-self: center;
  background-color: #f26100;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 10px;
`

const HeaderText = styled.Text`
  font-size: 24px;
`

const AppBody = styled.View`
  background-color: #fff;
  padding: 8px;
`

const AppContainer = styled.SafeAreaView`
  background-color: #f26100;
`

const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 30%;
`

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
      title: `Who's Your Birthday Twin?`
    }
  }
)

export default createAppContainer(AppNavigator)
