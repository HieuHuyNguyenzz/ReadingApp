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
import { images, colors, icons, fontSize } from '../../constants'

function _geColorFromStatus(status) {
    // if(status.toLowerCase().trim() == "opening now"){
    //     return colors.success   
    // }else if(status.toLowerCase().trim() == "closing soon"){
    //     return colors.alert
    // }else if(status.toLowerCase().trim() == "coming soon"){
    //     return colors.warning
    // }
    return status.toLowerCase().trim() == "opening now" ? colors.success :
        (status.toLowerCase().trim() == "closing soon" ? colors.alert :
            (status.toLowerCase().trim() == "coming soon" ? colors.warning : colors.success))
}
function BookItems(props) {
    let { name, type, url, status, price, website, Etp, onPress } = props.book


    return (<TouchableOpacity 
        onPress={onPress}
        style={{
        height: 150,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
    }}>
        <Image
            style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 5,
                marginRight: 15,
            }}
            source={{
                uri: url
            }} />
        <View style={{
            flex: 1,
            marginRight: 10,
        }}>
            <Text style={{
                color: 'black',
                fontSize: 12,
                fontWeight: 'bold'
            }}>{name}</Text>
            <View style={{
                height: 1,
                backgroundColor: 'black',
            }} />
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={{
                    color: colors.inactive,
                    fontSize: 12,
                }}>status: </Text>
                <Text style={{
                    color: _geColorFromStatus(status),
                    fontSize: 12,
                }}>{status.toUpperCase()}</Text>
            </View>
            <Text style={{
                color: colors.inactive,
                fontSize: 12,
            }}>Price: {price}$</Text>
            <Text style={{
                color: colors.inactive,
                fontSize: 12,
            }}>Genres: {type}</Text>
            <Text style={{
                color: colors.inactive,
                fontSize: 12,
            }}>Website: {website}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    padding: 5
                }}>
                <Image source={icons.facebook}
                    style={{
                        width: 20,
                        height: 20,
                        color: colors.fb,
                    }} />
                <View style={{ width: 5 }} ></View>
                <Image source={icons.shopee}
                    style={{
                        width: 20,
                        height: 20,
                    }} />
                <View style={{ width: 5 }} ></View>
                <Image source={icons.lazada}
                    style={{
                        width: 20,
                        height: 20,
                    }} />
            </View>
        </View>
    </TouchableOpacity>)
}
export default BookItems