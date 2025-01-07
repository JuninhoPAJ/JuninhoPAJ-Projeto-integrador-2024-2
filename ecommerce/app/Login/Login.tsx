import React, { useState } from 'react'
import { View } from 'react-native'
import style from './LoginStyle';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Button, Text, useTheme, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message'


const Login = ({ navigation }: any) => {
  const { colors } = useTheme()
  const [emailInput, setEmailInput] = useState({ value: '', dirty: false })
  const [passwordInput, setPasswordInput] = useState({ value: '', dirty: false })
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const showMessage = (type: string, title: string, message: string) => {
    Toast.show({
      type: type,
      text1: title,
      text2: message
    })
  }

  const handleErrorEmail = () => {
    if (!emailInput.value && emailInput.dirty) {
      return (<Text style={style.error}>Campo Obrigatório</Text>)
    } else if (!emailRegex.test(emailInput.value) && emailInput.dirty) {
      return (<Text style={style.error}>Email Inválido</Text>)
    } else {
      return (<Text style={style.error}> </Text>)
    }
  }

  const validForm = (e: any) => {
    e.preventDefault()
    let hasError = false
    if (!emailRegex.test(emailInput.value) || !emailInput.value) {
      setEmailInput({ value: emailInput.value, dirty: true })
      hasError: true
    }

    if (!passwordInput.value) {
      setPasswordInput({ value: passwordInput.value, dirty: true })
      hasError: true
    }

    if (!hasError) {
      showMessage("success", "Usuário logado com sucesso", "Credenciais válidas")
      navigation.navigate("HomeTabs");
    }
  }

  const handleErrorPassword = () => {
    if (!passwordInput.value && passwordInput.dirty) {
      return (<Text style={style.error}>Campo Obrigatório</Text>)
    } else {
      return (<Text style={style.error}> </Text>)
    }
  }

  return (
    <View style={style.loginContainer}>
      <Icon style={{ textAlign: 'center', color: colors.primary, marginBottom: 20 }} size={100} name="ghost" />
      <Text style={{ ...style.title, color: colors.primary, marginBottom: 50 }}>Seja bem vindo novamente!</Text>
      <TextInput onChangeText={(text) => setEmailInput({ value: text, dirty: true })} mode='outlined' placeholder='Email' style={style.loginInput} />
      {handleErrorEmail()}
      <TextInput onChangeText={(text) => setPasswordInput({ value: text, dirty: true })} secureTextEntry mode='outlined' placeholder='Password' style={style.loginInput} />
      {handleErrorPassword()}
      <Text style={style.forgotPassword}>Esqueceu sua senha?</Text>
      <Button mode='contained' style={style.button} onPress={(event) => { validForm(event) }}>Login</Button>
      <Button mode='outlined' style={style.button} onPress={() => { navigation.navigate("Welcome") }}>Voltar</Button>
    </View>
  )
}

export default Login
