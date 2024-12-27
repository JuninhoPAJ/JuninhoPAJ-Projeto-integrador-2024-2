import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: '5%'
    },

    loginInput: {
        height: 40,
        width: '100%',
        marginBottom: '5%',
        marginTop: '3%',
    },

    button: {
        borderRadius: 5,
        width: "100%",
        height: 40,
        marginBottom: 15
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    forgotPassword: {
        textAlign: 'right',
        textDecorationLine: 'underline',
        color: 'gray',
        marginBottom: 20
    }
})

export default style