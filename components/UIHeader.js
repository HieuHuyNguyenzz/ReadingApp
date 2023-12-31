import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import { images, icons, colors, fontSize } from '../constants/index'

function UIHeader(props) {
    const {title} = props
    return <View style={{
        height: 55,
        backgroundColor: "#FA6F62",
    }}>
        <Text style={{
            fontSize: 15,
            alignSelf: 'center',
            lineHeight: 45,
            color: 'white'
        }}>{title}</Text>
    </View>
}
export default UIHeader