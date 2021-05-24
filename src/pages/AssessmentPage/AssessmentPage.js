import React, { useEffect, useState } from 'react'
import {  Image, Text, TextInput, TouchableOpacity, View, Keyboard, CheckBox } from 'react-native'
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function AssessmentPage({navigation}) {

    // declaration for inserting
    const [cond, setCondition] = useState('')

    const [conditionText1, setConditionText1] = useState('')
    const [conditionText2, setConditionText2] = useState('')
    //  const [conditionText3, setConditionText3] = useState('')
    const [conditionText4, setConditionText4] = useState('')
    const [conditionText5, setConditionText5] = useState('')

    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);
    const [isSelected7, setSelection7] = useState(false);

    // link to firestore in firebase
    const ConditionRef = firebase.firestore().collection('conditions')

    // inserting and queries 
    useEffect(() => {
        ConditionRef
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newConditions = []
                    querySnapshot.forEach(doc => {
                        const condition = doc.data()
                        condition.id = doc.id
                        newConditions.push(condition)
                    });
                    setCondition(newConditions)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    // defining fields in conditions
    const onSubmitPress = () => {

        if (conditionText2 && conditionText2.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                
                firstQues: conditionText1,
                secondQues: conditionText2,
                coughs: isSelected1,
                fever: isSelected2,
                sorethroat: isSelected3,
                fatigue: isSelected4,
                losstaste: isSelected5,
                chestpain: isSelected6,
                breathing: isSelected7,
                fourthQues: conditionText4,
                fifthQues: conditionText5,
                createdAt: timestamp,
            };
            ConditionRef
                .add(data)
                .then(_doc => {
                    setConditionText2('')
                    Keyboard.dismiss()
                    navigation.navigate('DisplayAssess')
                })
                .catch((error) => {
                    alert(error)
                });
            
        }
    }
    

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logoiium.png')}
                />

                <Text style = {styles.word}>  1) Which room are you currently staying at? </Text>
                <TextInput
                    style={styles.input}
                    placeholder='(e.g Maryam d1.4a)'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setConditionText1(text)}
                    value={conditionText1}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <Text style = {styles.word}>2) How are you feeling today?</Text>
                <TextInput
                    style={styles.input}
                    placeholder='e.g nice/terrible'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setConditionText2(text)}
                    value={conditionText2}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <Text style = {styles.word}>3) What are the symptoms that you are currently experiencing?</Text>
                <View style = {styles.checkboxContainer}>
                    <CheckBox 
                        value = {isSelected1}
                        onValueChange = {setSelection1}
                        style = {styles.checkbox}
                    />
                    <Text style = {styles.label}> Coughs </Text>
                </View>

                <View style = {styles.checkboxContainer}>
                    <CheckBox 
                        value = {isSelected2}
                        onValueChange = {setSelection2}
                        style = {styles.checkbox}
                    />
                    <Text style = {styles.label}> Fever </Text>
                </View>

                <View style = {styles.checkboxContainer}>
                    <CheckBox 
                        value = {isSelected3}
                        onValueChange = {setSelection3}
                        style = {styles.checkbox}
                    />
                    <Text style = {styles.label}> Sore throat </Text>
                </View>

                <View style = {styles.checkboxContainer}>
                    <CheckBox 
                        value = {isSelected4}
                        onValueChange = {setSelection4}
                        style = {styles.checkbox}
                    />
                    <Text style = {styles.label}> Tiredness </Text>
                </View>

                <View style = {styles.checkboxContainer}>
                    <CheckBox 
                        value = {isSelected5}
                        onValueChange = {setSelection5}
                        style = {styles.checkbox}
                    />
                    <Text style = {styles.label}> Loss of taste or smell </Text>
                </View>

                <View style = {styles.checkboxContainer}>
                    <CheckBox 
                        value = {isSelected6}
                        onValueChange = {setSelection6}
                        style = {styles.checkbox}
                    />
                    <Text style = {styles.label}> Chest pain or pressure </Text>
                </View>

                <View style = {styles.checkboxContainer}>
                    <CheckBox 
                        value = {isSelected7}
                        onValueChange = {setSelection7}
                        style = {styles.checkbox}
                    />
                    <Text style = {styles.label}> Difficulty in breathing </Text>
                </View>

                <Text style = {styles.word}>{"\n"}4) Since when have you started experiencing the symptoms?</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Give us a date'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setConditionText4(text)}
                    value={conditionText4}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <Text style = {styles.word}>5) List down the places you frequently visited for today.</Text>
                <TextInput
                    style={styles.input}
                    placeholder='e.g Toilet/Cafe'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setConditionText5(text)}
                    value={conditionText5}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                
                {/* SUBMIT BUTTON */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSubmitPress()}>
                    <Text style={styles.buttonTitle}>Submit</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style = {styles.footerText}>{"\n"}{"\n"} © Start-Up; 2021</Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}