import React from 'react'
import { View } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import styles from './WelcomeStyle'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const Welcome = ({ navigation }: any) => {
    const { colors } = useTheme()
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 20 }}>
                <Icon style={{ textAlign: 'center', color: colors.primary, marginBottom: 20 }} size={100} name="ghost" />
                <Text style={{ ...styles.title, color: colors.primary, marginBottom: 50 }}>Seja bem vindo!</Text>
                <Text style={{ textAlign: 'center' }}>Texto aqui</Text>
            </View>
            <Button mode='contained' style={styles.button} onPress={() => { navigation.navigate("Login") }}>Login</Button>
            <Button mode='outlined' style={styles.button} onPress={() => { navigation.navigate("Cadastar") }}>Cadastrar conta</Button>
        </View>
    )
}

export default Welcome