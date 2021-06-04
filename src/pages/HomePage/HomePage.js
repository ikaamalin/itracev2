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

    const onSOPPress = () => {
        navigation.navigate('SOP')
    }

    const onHelpPress = () => {
        navigation.navigate('Helpdesk')
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
                        source = {require('../../../assets/health.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity> 

             <TouchableOpacity 
                onPress={() => onProfilePress()}> 
                    <Image  
                        source = {require('../../../assets/profile.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity> 

             <TouchableOpacity 
                onPress={() => onSOPPress()}> 
                    <Image  
                        source = {require('../../../assets/sop.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity> 

             <TouchableOpacity 
                onPress={() => onHelpPress()}> 
                    <Image  
                        source = {require('../../../assets/helpdesk.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity> 

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLogoutPress()}>
                    <Text style={styles.buttonTitle}>Log Out</Text>
            </TouchableOpacity>

            <View style={styles.footerView}>
                <Text style = {styles.footerText}> {"\n"}{"\n"} © Start-Up; 2021</Text>
            </View>


            </View>
            
        </View>
    )
}