import React, { Component } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import { images, icons, colors } from '../constants/index'

function UIbuttons(props) {
    const { onPress, title, isSelected } = props
    return <TouchableOpacity
        onPress={props.onPress}
        style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 40,
            borderRadius: 5,
            marginHorizontal: 15,
            marginVertical: 10,
            alignItems: "center",
            justifyContent: 'center',
            color: 'red',
            backgroundColor: isSelected == true ? 'white' : null,
        }}>
        {isSelected == true && <Image
            source={icons.check}
            style={{
                width: 20,
                height: 20,
                left: 10,
                position: 'absolute',
            }} />}
        <Text style={{
            color: isSelected == true ? colors.primary : 'white',
        }}>{props.title}</Text>

    </TouchableOpacity>
}

export default UIbuttons