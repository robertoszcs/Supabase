import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import {UserContext} from './UserContext'

const Home = () => {

const {user, setUser} = useContext(UserContext);

  {console.log(user)}

  return (
    <View>
      <Text>Bienvenido {user.email}</Text>
    </View>
  )
}

export default Home