import React from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { colors, fontSize, icons } from '../../constants';
import FiveStars from "./FiveStars";
import { Link } from "@react-navigation/native";
function GridItem(props){
    const {item, index, onPress, onBookDetail} = props

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

    }}
    >
        <TouchableOpacity onPress={onBookDetail}>
            <View style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <View style={{ display: "flex", flexDirection: 'row', marginTop: 10, marginHorizontal: 5, }}>
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
                        marginLeft: "auto"
                    }}>$ {item.price}</Text>
                </View>
                <Text style={{
                    color: colors.primary,
                    fontWeight: 'bold',
                    fontSize: fontSize.h6,
                    marginHorizontal: 10,
                    marginTop: 5,
                    wordBreak: "break-word",
                }}>
                    {item.nameBook}
                </Text>
            </View>
        </TouchableOpacity>
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
            flexDirection: 'column',
            padding: 10,
            marginTop: "auto",
            marginLeft: 10,
            marginBottom: 10,
            marginRight: 10,
            position: "relative",
            gap: 6
        }}>
            <View>
                <TouchableOpacity
                    onPress = {onPress}
                    style={{
                        flexDirection: 'row',
                        display: "flex"
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
                        color: item.isSaved ? 'black' : '#FF7E92',
                        fontWeight: 'bold',
                        opacity: item.isSaved ? 0.5 : 1,
                        flex: 1
                    }}>Saved for later</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                //backgroundColor: '',
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <FiveStars numberOfStars={item.stars}></FiveStars>
                <Text style={{
                    color: "blue",
                    fontSize: 10,
                    textAlign: 'right',
                }}>{item.reviews} reviews</Text>
            </View>

        </View>
    </View>
}
export default GridItem