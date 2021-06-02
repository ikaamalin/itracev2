import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';

class CheckinPage extends Component {

  state = {
    users: [] 
    
  }

  constructor(props) {
    super(props);
    this.subscriber =
      firebase.firestore()
        .collection("users")
        .where("authorID", "==", firebase.auth().currentUser.uid)
        //.orderBy('createdAt')
        //.limit(1)
        .onSnapshot(docs => {
          let users = []
          docs.forEach( doc => {
            users.push(doc.data())
          })
          this.setState({ users })
          console.log(users)
        })
                  }
  
  render() {
    return (
      <View style = {styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps="always">
            <Image style = { styles.logo }
              source={require('../../../assets/logoiium.png')}
            />

            { this.state.users.map((user, index) => <View key = {index}>
            <Text style = {styles.word}> Welcome back, {user.fullName}</Text>

            </View>)}

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Scanner')}>
                    <Text style={styles.buttonTitle}>Check In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.buttonTitle}>Menu Page</Text>
            </TouchableOpacity>
            
        </KeyboardAwareScrollView>
      </View>
    )
  }
}
 export default CheckinPage;

