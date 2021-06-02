import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';

class ProfilePage extends Component {

    constructor() {
        super();
        this.state = {
            fullName: '',
            matricNum: '',
            kulliyyah: '',
            contactNum: '',
            address: '',
        };
    }

    componentDidMount() {
        const dbRef = firebase.firestore()
            .collection('users')
            .where("authorID", "==", firebase.auth().currentUser.uid)
        dbRef.get().then((res) => {
          if (res.exists) {
            const user = res.data();
            this.setState({
              key: res.id,
              fullName: user.fullName,
              matricNum: user.matricNum,
              kulliyyah: user.kulliyyah,
              contactNum: user.contactNum,
              address: user.address,
              
            });
          } else {
            console.log("Error: No such data available.");
          }
        });
      }
    
      inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
    
      updateUser() {
        const updateDBRef = firebase.firestore().collection('users').doc(this.state.key);
        updateDBRef.set({
          fullName: this.state.fullName,
          matricNum: this.state.matricNum,
          kulliyyah: this.state.kulliyyah,
          contactNum: this.state.contactNum,
          address: this.state.address,
        }).then((docRef) => {
          this.setState({
            key: '',
            fullName: '',
            matricNum: '',
            kulliyyah: '',
            contactNum: '',
            address: '',
            
          });
          console.log("Information Updated!");
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
      }

      render() {
        return (
        <View>
          <KeyboardAwareScrollView 
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
                <Image style = { styles.logo }
                    source={require('../../../assets/logoiium.png')}
                />

               <TextInput
                  style={styles.input}
                  placeholder={'Full Name'}
                  value={this.state.fullName}
                  onChangeText={(val) => this.inputValueUpdate(val, 'fullName')}
               />

                <TextInput
                  style={styles.input}
                  placeholder={'Matric Number'}
                  value={this.state.matricNum}
                  onChangeText={(val) => this.inputValueUpdate(val, 'matricNum')}
               />

                <TextInput
                  style={styles.input}
                  placeholder={'Kulliyyah'}
                  value={this.state.kulliyyah}
                  onChangeText={(val) => this.inputValueUpdate(val, 'kulliyyah')}
               />

                <TextInput
                  style={styles.input}
                  multiline={true}
                  numberOfLines={2}
                  placeholder={'Address'}
                  value={this.state.address}
                  onChangeText={(val) => this.inputValueUpdate(val, 'address')}
               />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.updateUser()}>
                    <Text style={styles.buttonTitle}>Update Account</Text>
                </TouchableOpacity>

          </KeyboardAwareScrollView>
        </View>
        );
      }

}

export default ProfilePage;