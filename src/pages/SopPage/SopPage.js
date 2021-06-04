import React from 'react'
import { Image, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function SopPage({props}) {

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logoiium.png')}
                />
                <Text style = { styles.header }>Standard of Procedures from IIUM Student Union</Text>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/sop.jpg')}
                />

                <View style={styles.footerView}>
                    <Text style = {styles.footerText}> {"\n"}{"\n"} © Start-Up; 2021</Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}