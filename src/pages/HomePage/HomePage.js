import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function HomePage({navigation}) {

    const onAssessPress = () => {
        navigation.navigate('Assessment')
    }

    const onProfilePress = () => {
        navigation.navigate('Profile')
    }

    const onLogoutPress = () => {
        firebase
            .auth()
            .signOut()
            .then(() => navigation.navigate('Login'))
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>

             <TouchableOpacity 
                onPress={() => onAssessPress()}> 
                    <Image  
                        source = {require('../../../assets/checkin.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity> 

             <TouchableOpacity 
                onPress={() => onProfilePress()}> 
                    <Image  
                        source = {require('../../../assets/checkin.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity> 

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLogoutPress()}>
                    <Text style={styles.buttonTitle}>Log Out</Text>
            </TouchableOpacity>


            </View>
            
        </View>
    )
}