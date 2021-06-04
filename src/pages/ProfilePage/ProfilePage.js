import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function ProfilePage(props) {
const Name = props.extraData.fullName
const Email = props.extraData.email
const MatricNum = props.extraData.matricNum
const Kulliyyah = props.extraData.kulliyyah
const contactNum = props.extraData.contactNum
const address = props.extraData.address


    return (
      <View style={styles.container}>
          <KeyboardAwareScrollView
              style={{ flex: 1, width: '100%' }}
              keyboardShouldPersistTaps="always">
              <Image
                  style={styles.logo}
                  source={require('../../../assets/logoiium.png')}
              />
              
              <View>
    <Text>Name: </Text>
    <TextInput
      style={{
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'white' 
      }}
      defaultValue= {Name}
    />
  </View>
               <View>
    <Text>Email: </Text>
    <TextInput
      style={{
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'white' 
      }}
      defaultValue= {Email}
    />
  </View>
  <View>
    <Text>Matric Number: </Text>
    <TextInput
      style={{
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'white' 
      }}
      defaultValue= {MatricNum}
    />
  </View>
  <View>
    <Text>Kulliyyah: </Text>
    <TextInput
      style={{
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'white' 
      }}
      defaultValue= {Kulliyyah}
    />
  </View>
  <View>
    <Text>Contact Number: </Text>
    <TextInput
      style={{
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'white' 
      }}
      defaultValue= {contactNum}
    />
  </View>
  <View>
    <Text>Address: </Text>
    <TextInput
      style={{
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'white' 
      }}
      defaultValue= {address}
    />
  </View>

             
          </KeyboardAwareScrollView>
      </View>
  )
}