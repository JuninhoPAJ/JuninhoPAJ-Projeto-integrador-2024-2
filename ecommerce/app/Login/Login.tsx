import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import style from './LoginStyle';

const Login = ({navigation} : any) => {
  return (
    <View style = {style.loginContainer}>
      <Text>Login</Text>
      <TextInput style={style.loginInput}/>
      <Text>Password</Text>
      <TextInput style={style.loginInput}/>
      <Button title='send' onPress={() => {navigation.navigate("HomeTabs")}}></Button>
    </View>
  )
}

export default Login
