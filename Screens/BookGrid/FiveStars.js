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
} from 'react-native'
import { images, colors, icons, fontSize } from '../../constants'
function FiveStars(props) {
    const { numberOfStars } = props
    return <View style={{ flexDirection: 'row' }}>
        {[0, 1, 2, 3, 4].map(item => item <= numberOfStars -1 ? <Image
            source={icons.vote}
            style={{ marginEnd: 2, height: 8, width: 8, }}
        /> : <Image
        source={icons.rate}
        style={{ marginEnd: 2, height: 8, width: 8, }}
    />)
    }
    </View>
}
export default FiveStars