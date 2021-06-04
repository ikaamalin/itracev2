import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginPage, 
          HomePage, 
          RegistrationPage, 
          AssessmentPage, 
          displayAssess, 
          CheckinPage, 
          Scanner,
          ProfilePage,
          SopPage,
          HelpPage,
        } from './src/pages'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Checkin">
            {props => <CheckinPage {...props} extraData={user} />}</Stack.Screen>
            <Stack.Screen 
              name="Login" 
              component={LoginPage} 
              options = {{ title: 'Login'}}
              />
            <Stack.Screen 
              name="Registration" 
              component={RegistrationPage}
              options = {{ title: 'Registration for iTrace'}} />
            <Stack.Screen 
              name="Assessment" 
              component={AssessmentPage}
              options = {{ title: 'Quarantine Health Assessment'}} />
            <Stack.Screen 
              name="DisplayAssess" 
              component={ displayAssess }
              options = {{ title: 'Quarantine Health Assessment'}} />
            <Stack.Screen 
              name="Home" 
              component={ HomePage }
              options = {{ title: 'Home'}} />
            <Stack.Screen 
              name="Scanner" 
              component={ Scanner }
              options = {{ title: 'Scan QR Code'}} />
             <Stack.Screen name="Profile" options={{title: 'Profile'}}>
            {props => <ProfilePage {...props} extraData={user}/>}
            </Stack.Screen>
            <Stack.Screen 
              name="SOP" 
              component={ SopPage }
              options = {{ title: 'Current Standard of Procedure'}} />
            <Stack.Screen 
              name="Helpdesk" 
              component={ HelpPage }
              options = {{ title: 'Help Desk'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}