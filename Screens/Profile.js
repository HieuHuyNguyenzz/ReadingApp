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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigatior } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from "react-native-safe-area-context";
import { user as UserRepository, population } from '../Repositories'

function Profile(props) {
    // const [user, setUser] = useState({})
    // useEffect(()=>{
    UserRepository.getUserDetail()
    //})
    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: ''
    }}>
        <Text>
            this is your profile
        </Text>
    </SafeAreaView>
}
export default Profile