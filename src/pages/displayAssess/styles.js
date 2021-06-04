import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    logo: {
        flex: 1,
        height: 200,
        width: 160,
        alignSelf: "center",
        margin: 30
    },

    word: {
        height: 60,
        marginLeft: 30,
        marginBottom: -30,
        marginTop: 10,
    }, 

    header: {
        flex: 1,
        marginLeft: 500,
        marginTop: 50,
        fontSize: 30,
    },

    button: {
        backgroundColor: '#252222',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },

    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },

    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    }
})