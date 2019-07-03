import React, { Fragment, useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Card, ListItem, Text } from 'react-native-elements'
import { BACKEND_URL } from 'react-native-dotenv'
import AnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import SVG, { Circle, Rect } from 'react-native-svg'
import styled from 'styled-components/native'

const SkeletonContainer = styled.View`
  padding: 10% 0;
`

const BirthdaySkeleton = () => (
  <SkeletonContainer>
    <AnimatedLinearGradient height={300}>
      <SVG transform="translate(100,100)">
        <Circle cx="30" cy="30" r="30" />
        <Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
        <Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
        <Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
      </SVG>
    </AnimatedLinearGradient>
  </SkeletonContainer>
)

const Birthdays = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [celebs, setCelebs] = useState([])

  const day = navigation.getParam('day', '')
  useEffect(() => {
    fetch(
      `https://celeb-birthday-service.andrewusher00.now.sh/api/birthdays.js?day=${day}`
    )
      .then(r => r.json())
      .then(response => {
        setLoading(false)
        setCelebs(response)
      })
      .catch(console.log)
  }, [])
  return (
    <View>
      {!loading && <BirthdaySkeleton />}
      {!celebs.length ? null : (
        <ScrollView>
          <Card containerStyle={{ padding: 0 }}>
            {celebs.map(celeb => (
              <ListItem
                key={celeb._id}
                leftAvatar={{ source: { uri: celeb.image } }}
                title={celeb.name}
              />
            ))}
          </Card>
        </ScrollView>
      )}
    </View>
  )
}

export default Birthdays
