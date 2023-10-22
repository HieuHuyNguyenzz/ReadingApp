import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
} from 'react-native'
import { images, colors, icons, fontSize } from '../constants'
import { isValidEmail, isValidPassword } from '../utilies/Validation'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function Password(props) {
    const [keyboardIsShown, setKeyboardIsShown] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidationOK = () => email.length > 0 && password > 0 && isValidEmail(email) == true && isValidPassword(password) == true
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsShown(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsShown(false)
        })
    })
    return <KeyboardAwareScrollView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
            flex: 100,
            backgroundColor: 'pink'
        }}>
        <View style={{
            flex: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        }}>
            <Text style={{
                color: 'white',
                fontSize: fontSize.h2,
                fontWeight: 'bold',
                width: '50%',
            }} >
                Forgot your password
            </Text>
            <Image
                tintColor={colors.primary}
                source={icons.library}
                style={{
                    width: 120,
                    height: 120,
                    alignSelf: 'center',
                }} />
        </View>
        <View style={{
            flex: 45,
            backgroundColor: 'white',
            borderRadius: 20,
            margin: 10,
            padding: 10,
        }} >

            <View style={{
                marginHorizontal: 15
            }} >
                <Text style={{
                    fontSize: fontSize.h5,
                    color: colors.primary
                }} >
                    Password
                </Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ?
                            '' : 'Password not in correct format')
                        setPassword(text)
                    }}
                    style={{
                        color: 'black'
                    }}
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                />
                <View
                    style={{
                        height: 1,
                        backgroundColor: 'pink',
                        width: '100%',
                        marginBottom: 10,
                        marginHorizontal: 15,
                        alignSelf: 'center'
                    }}></View>
                <Text style={{
                    color: 'red',
                    marginBottom: 10,
                    fontSize: fontSize.h5
                }}>{errorPassword}</Text>
            </View>
            <View style={{
                marginHorizontal: 15
            }} >
                <Text style={{
                    fontSize: fontSize.h5,
                    color: colors.primary
                }} >
                    Re-password
                </Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ?
                            '' : 'Password not in correct format')
                        setPassword(text)
                    }}
                    style={{
                        color: 'black'
                    }}
                    secureTextEntry={true}
                    placeholder="Re-Enter your password"
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                />
                <View
                    style={{
                        height: 1,
                        backgroundColor: 'pink',
                        width: '100%',
                        marginBottom: 10,
                        marginHorizontal: 15,
                        alignSelf: 'center'
                    }}></View>
                <Text style={{
                    color: 'red',
                    fontSize: fontSize.h5
                }}>{errorPassword}</Text>
            </View>
            <TouchableOpacity
                disabled={isValidationOK() == false}
                onPress={() => {
                    alert(`Email = ${email},
                            password = ${password}`)
                }}
                style={{
                    backgroundColor: isValidationOK() == true ? colors.primary : colors.inactive,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 30,
                    width: '50%',
                    borderRadius: 18,
                    alignSelf: 'center',
                }} >
                <Text style={{
                    padding: 8,
                    fontSize: fontSize.h5,
                    color: 'white',
                }}>Save</Text>
            </TouchableOpacity>
        </View>
        {keyboardIsShown == false ?
            <View style={{
                flex: 20,
            }}>
            </View> : <View
                style={{
                    flex: 15,
                }}></View>}
        
    </KeyboardAwareScrollView>
}
export default Password