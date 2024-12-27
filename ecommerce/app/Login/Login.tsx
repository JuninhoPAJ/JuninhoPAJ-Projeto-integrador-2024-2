import React from 'react'
import { View } from 'react-native'
import style from './LoginStyle';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Button, Text, useTheme, TextInput } from 'react-native-paper';


const Login = ({ navigation }: any) => {
  const { colors } = useTheme()
  return (
    <View style={style.loginContainer}>
      <Icon style={{ textAlign: 'center', color: colors.primary, marginBottom: 20 }} size={100} name="ghost" />
      <Text style={{ ...style.title, color: colors.primary, marginBottom: 50 }}>Seja bem vindo novamente!</Text>
      <TextInput mode='outlined' placeholder='Email' style={style.loginInput} />
      <TextInput secureTextEntry mode='outlined' placeholder='Password' style={style.loginInput} />
      <Text style={style.forgotPassword}>Esqueci a senha</Text>
      <Button mode='contained' style={style.button} onPress={() => { navigation.navigate("HomeTabs") }}>Login</Button>
      <Button mode='outlined' style={style.button} onPress={() => { navigation.navigate("Welcome") }}>Voltar</Button>
    </View>
  )
}

export default Login
