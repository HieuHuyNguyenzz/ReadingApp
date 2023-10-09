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
    ScrollView,
    FlatList,
    Alert,
} from 'react-native'
import { images, colors, icons, fontSize } from '../../constants'
import FiveStars from "./FiveStars";
function GridItem(props){
    const {item, index, onPress} = props
    return <View style={{
        color: 'black',
        flex: 0.5,
        marginTop: 5,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginBottom: 5,
        marginRight: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.inactive

    }}>
        <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 5, }}>
            <Image
                style={{
                    width: 70,
                    height: 90,
                    resizeMode: 'cover',
                    borderRadius: 20,
                    marginRight: 15,
                }}
                source={{ uri: item.url }} />
            <Text style={{
                color: 'black',
                fontSize: fontSize.h2,
                flex: 1,
                textAlign: 'right'
            }}>$ {item.price}</Text>
        </View>
        <Text style={{
            color: colors.primary,
            fontWeight: 'bold',
            fontSize: fontSize.h6,
            marginHorizontal: 10,
            marginTop: 5,
        }}>
            {item.nameBook}
        </Text>
        {
            item.specifications.map(specifications =>
                <Text
                    key={specifications}
                    style={{
                        color: 'black',
                        fontSize: fontSize.h6,
                        paddingHorizontal: 10,
                        paddingBottom: 10,
                    }}>* {specifications}</Text>)
        }
        <View style={{
            flexDirection: 'row',
            padding: 10,
            marginTop: 5,
            marginLeft: 10,
            marginBottom: 10,
            marginRight: 10,
        }}>
            <TouchableOpacity
                
                style={{
                    flexDirection: 'row'
                }}>
                <Image source={icons.heart}
                    style={{
                        height: 20,
                        width: 20,
                        marginEnd: 5,
                    }}
                    
                />
                <Text style={{
                    //color: '#2395ff',
                    color: '#FF7E92',
                    fontWeight: 'bold',
                    opacity: 1,
                    width: 50,
                }}>Saved for later</Text>
            </TouchableOpacity>
            <View style={{
                //backgroundColor: '',
                flex: 1,
            }}>
                <FiveStars numberOfStars={item.stars}></FiveStars>
                <Text style={{
                    color: "blue",
                    fontSize: 10,
                    textAlign: 'right',
                    paddingTop: 5,
                }}>{item.reviews} reviews</Text>
            </View>

        </View>
    </View>
}
export default GridItem