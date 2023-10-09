import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, ImageBackground, Image, Text, View, Alert } from "react-native";
import { sumNum, subtractNum } from '../utilies/Calculation'
import { images, icons, colors } from '../constants/index'
import { UIbuttons } from "../components";

function Welcome(props) {
    const {navigation} = props
    const [accountTypes, setAccountTypes] = useState([
        {
            name: '1-15',
            isSelected: true
        },
        {
            name: '15-18',
            isSelected: false
        },
        {
            name: '19-100',
            isSelected: false
        },
    ])
    return <View style={{
        flex: 100
    }}>
        <ImageBackground
            source={
                images.background
            }
            resizeMode="cover"
            style={{
                flex: 100,
            }}
        >
            <View style={{
                flex: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Image source={
                        icons.fire
                    }
                        style={{
                            width: 30,
                            height: 30,
                            marginStart: 10,
                            marginEnd: 5
                        }} />

                    <Text style={{
                        color: '#FAEBD7'
                    }}>BOOK.CO</Text>
                    <View style={{ flex: 1 }} />
                    <Image source={
                        icons.conversation
                    }
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: 'black',
                            marginEnd: 10
                        }} />
                </View>
            </View>
            <View style={{
                flex: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                <Text style={{
                    color: '#FAEBD7',
                    marginBottom: 10,
                    fontSize: 12,
                }}>Welcome to</Text>
                <Text style={{
                    color: '#FAEBD7',
                    marginBottom: 10,
                    fontWeight: 'bold',
                    fontSize: 14,
                }}>BOOK.CO!</Text>
                <Text style={{
                    color: '#FAEBD7',
                    fontSize: 12,
                }}>Please select your account type</Text>
            </View>
            <View style={{
                flex: 40,
            }}>
                {accountTypes.map(accountType =>
                    <UIbuttons onPress={() => {
                        let newAccountTypes = accountTypes.map(eachAccountType => {
                            return { ...eachAccountType, isSelected: eachAccountType.name == accountType.name }
                        })
                        setAccountTypes(newAccountTypes);
                        alert('ahihi')
                    }} title={accountType.name}
                        isSelected={accountType.isSelected}
                    />)}
            </View>
            <View style={{
                flex: 20,
            }}>
                <UIbuttons title={'LOGIN'.toUpperCase()} onPress={() => navigation.navigate('Login')}/>
                <Text style={{
                    color: '#FAEBD7',
                    fontSize: 12,
                    alignSelf: 'center'
                }}>Want to register new Account ?</Text>
                <TouchableOpacity
                    onPress={() => {
                        alert('ahihi')
                    }}
                    style = {{
                    padding: 5,
                }} >
                    <Text style={{
                        color: colors.primary,
                        fontSize: 12,
                        alignSelf: 'center',
                        textDecorationLine: 'underline'
                    }}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
}
export default Welcome
// const MainScreen = (props) => {
//     const {x,y} = props
//     const {person} = props
//     const {name, age, email} = person
//     const {products} = props
//     // debugger
//     return <View style = {{
//         backgroundColor: 'pink'
//     }}>
//         <Text>Value of x = {x}, Value of y = {y}</Text>
//         <Text>Name = {name}, email = {email}, age = {age}</Text>
//         {products.map(eachProduct => <Text>
//             {eachProduct.productName},
//             {eachProduct.year}
//         </Text>)}
//         <Text>sum = {sumNum(2,3)}</Text>
//     </View>
// }
