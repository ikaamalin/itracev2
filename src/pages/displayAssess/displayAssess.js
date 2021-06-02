import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';

class displayAssess extends Component {
    constructor(props) {
        super(props);
        if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        }
        this.ref = firebase.firestore().collection('conditions');
        this.state={
        dataSource : []
      }
      }
      
      componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.latestComments);
      }
      
      latestComments = (commentsSnapShot) =>{
        const Comment = [];
        commentsSnapShot.forEach((doc) => {
        const {firstQues,
            secondQues,
            coughs,
            fever,
            sorethroat,
            fatigue,
            losstaste,
            chestpain,
            breathing,
            fourthQues,
            fifthQues,
            createdAt} = doc.data();
          Comment.push({
            key: doc.id,
            firstQues,
            secondQues,
            coughs,
            fever,
            sorethroat,
            fatigue,
            losstaste,
            chestpain,
            breathing,
            fourthQues,
            fifthQues,
            createdAt
          });
        });
        this.setState({
          dataSource : Comment,
        });
      }

        render(){
           const {dataSource} = this.state
          return(
              <View style={styles.container}>
                <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                    <Image
                    style={styles.logo}
                    source={require('../../../assets/logoiium.png')}
                    />

                    <Text style = {styles.word}>  1) Which room are you currently staying at? </Text>
                    <ul>
                        {dataSource.map(item =>

                        <p>
                         {item.firstQues}
                        </p>

                        )}
                    </ul>
                    
                    <Text style = {styles.word}>2) How are you feeling today?</Text>
                    <ul>
                        {dataSource.map(item =>

                        <p>
                         {item.secondQues}
                        </p>

                        )}
                    </ul>
                    
                    <Text style = {styles.word}>3) What are the symptoms that you are currently experiencing?</Text>
                    <ul>
                        {dataSource.map(item =>
                    
                        <p>
                        {item.coughs} 
                        {item.fever}
                        {item.sorethroat}
                        {item.fatigue}
                        {item.losstaste}
                        {item.chestpain}
                        {item.breathing}
                        
                        </p>
                        )}
                    </ul>

                    <Text style = {styles.word}>4) Since when have you started experiencing the symptoms?</Text>
                    <ul>
                        {dataSource.map(item =>

                        <p>
                         {item.fourthQues}
                        </p>

                        )}
                    </ul>
                    
                    <Text style = {styles.word}>5) List down the places you frequently visited for today.</Text>
                    <ul>
                        {dataSource.map(item =>

                        <p>
                         {item.fifthQues}
                        </p>

                        )}
                    </ul>
                    
                </KeyboardAwareScrollView>
              </View>

          )
        }
}

export default displayAssess;


    

