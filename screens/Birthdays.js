import React, { Fragment } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { useQuery } from 'react-query'
import { launchGoogleSearch } from '../helpers'

const Birthdays = ({ route }) => {
  const day = route.params.day
  const { isLoading, data } = useQuery(['birthday', day], () => fetch(
      `https://celeb-birthday-service.andrewusher00.now.sh/api/birthdays.js?day=${day}`
  )
    .then(r => r.json()))

  return (
    <Fragment>
      {isLoading && <ActivityIndicator />}
      {data && (
        <ScrollView>
          {data.map(celeb => (
            <ListItem
              key={celeb._id}
              onPress={launchGoogleSearch(celeb.name)}
              bottomDivider
            >
              <Avatar source={{ uri: celeb.image }} rounded />
              <ListItem.Title>
                {celeb.name}
              </ListItem.Title>
            </ListItem>
          ))}
        </ScrollView>
      )}
    </Fragment>
  )
}

export default Birthdays
