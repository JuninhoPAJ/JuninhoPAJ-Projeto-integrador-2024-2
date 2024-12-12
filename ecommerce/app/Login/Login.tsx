import React from 'react'
import { Button, Text, View } from 'react-native'

const Login = ({navigation} : any) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title='send' onPress={() => {navigation.navigate("HomeTabs")}}></Button>
    </View>
  )
}

export default Login
