import { StyleSheet } from "react-native";

const styles = (colors: any) => StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10%'
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
            textAlign: 'center',

        },

        logo: {
            textAlign: 'center',
            color: colors.primary,
            marginBottom: 20
        },

        welcomeMessage: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: colors.primary,
            marginBottom: 50
        },

        description: {
            textAlign: 'center'
        }

    }
)

export default styles