import React from 'react'
import { View } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import welcomeStyle from './WelcomeStyle'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const Welcome = ({ navigation }: any) => {
    const { colors } = useTheme()
    const style = welcomeStyle(colors)
    return (
        <View style={style.container}>
            <View style={{ marginBottom: 20 }}>
                <Icon style={style.logo} size={100} name="ghost" />
                <Text style={style.welcomeMessage}>Seja bem vindo!</Text>
                <Text style={style.description}>Texto aqui</Text>
            </View>
            <Button mode='contained' style={style.button} onPress={() => { navigation.navigate("Login") }}>Login</Button>
            <Button mode='outlined' style={style.button} onPress={() => { navigation.navigate("Cadastar") }}>Cadastrar conta</Button>
        </View>
    )
}

export default Welcome