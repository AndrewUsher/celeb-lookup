import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import { Card, ListItem } from 'react-native-elements'

const Birthdays = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [celebs, setCelebs] = useState([])

  const day = navigation.getParam('day')
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
      {loading && <ActivityIndicator />}
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
