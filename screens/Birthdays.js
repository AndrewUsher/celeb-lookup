import React, { Fragment, useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { launchGoogleSearch } from '../helpers'

const Birthdays = ({ route }) => {
  const [loading, setLoading] = useState(true)
  const [celebs, setCelebs] = useState([])

  const day = route.params.day
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
  }, [day])
  return (
    <Fragment>
      {loading && <ActivityIndicator />}
      {!celebs.length ? null : (
        <ScrollView>
          {celebs.map(celeb => (
            <ListItem
              key={celeb._id}
              leftAvatar={{ source: { uri: celeb.image } }}
              title={celeb.name}
              onPress={launchGoogleSearch(celeb.name)}
              bottomDivider
            />
          ))}
        </ScrollView>
      )}
    </Fragment>
  )
}

export default Birthdays
