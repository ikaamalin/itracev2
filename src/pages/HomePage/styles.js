import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode : 'stretch',
      
     },

     SeparatorLine :{
 
        backgroundColor : '#fff',
        width: 1,
        height: 40
         
    },

    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 16
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