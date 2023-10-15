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
    StyleSheet,
} from 'react-native'
import { images, colors, icons, fontSize } from '../../constants'
import FiveStars from "./FiveStars";
import { faCartShopping, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
const BookDetail = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <FontAwesome
                        icon={faArrowLeft}
                        size={32}
                        color={colors.primary}
                    />
                </TouchableOpacity>
                <FontAwesome
                    icon={faCartShopping}
                    size={32}
                    color={colors.primary}
                />
            </View>
            <Image source={images.avatar} style={{
                width: 200,
                height: 250,
                position: "relative",
                borderRadius: 10
            }} />
            <View style={styles.cont3}>
                <Text style={styles.title}>Ibrahimovic</Text>
                <Text style={styles.subtitle}>Footballer</Text>
                <View style={{
                    ...styles.cont2,
                    marginTop: 12
                }}>
                    <Text style={{ ...styles.title, flex: 2, marginTop: 0 }}>Rating</Text>
                    <View>
                        <FiveStars styleItem={{
                            width: 20,
                            height: 20
                        }} numberOfStars={4} />
                    </View>
                </View>
                <View style={{display: "flex", flexDirection: 'row', marginTop: 12}}>
                        <Text style={{
                            ...styles.text,
                            fontWeight: 'bold',
                        }}>Price: </Text>
                        <Text style={{
                            fontFamily: "Montserrat_400Regular",
                            fontSize: 18,
                            lineHeight: 25,
                        }}>$ 499.99</Text>
                    </View>
                <ScrollView style={{
                    marginTop: 8
                }}>
                    <Text style={styles.text}>
                        Zlatan Ibrahimović nổi tiếng với tính cách mạnh mẽ,
                        tự tin và thể hiện của mình. Anh thường tỏ ra rất
                        {"\n\n"}
                        Zlatan Ibrahimović nổi tiếng với tính cách mạnh mẽ,
                        tự tin và thể hiện của mình. Anh thường tỏ ra rấtZlatan 
                        Ibrahimović nổi tiếng với tính cách mạnh mẽ,
                        {"\n"}
                        tự tin và thể hiện của mình. Anh thường tỏ ra rấtZlatan Ibrahimović nổi tiếng với tính cách mạnh mẽ,
                        tự tin và thể hiện của mình. Anh thường tỏ ra rấtZlatan Ibrahimović nổi tiếng với tính cách mạnh mẽ,
                        tự tin và thể hiện của mình. Anh thường tỏ ra rấtZlatan Ibra
                        {"\n"}
                        himović nổi tiếng với tính cách mạnh mẽ,
                    </Text>
                </ScrollView>
                <View style={styles.cont1}>
                    <FontAwesome name="heart-o" color="#000" size={25} />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => props.navigation.navigate("BookGridView")}
                    >
                        <Text style={styles.btnText}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
    },
    title: {
        fontSize: 25,
        fontFamily: "Montserrat_700Bold",
    },
    subtitle: {
        fontSize: 20,
        color: "#474747",
        fontFamily: "Montserrat_400Regular",
    },
    text: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 18,
    },
    btn: {
        backgroundColor: "#E2443B",
        paddingHorizontal: 60,
        paddingVertical: 12,
        borderRadius: 30,
    },
    btnText: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 20,
        color: "#FFF",
    },
    cont1: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 40,
    },
    c3: {
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#529CC0",
        padding: 12
    },
    c2: {
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#529C47",
        marginHorizontal: 10
    },
    c1: {
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#E2443B",
    },
    selected: {
        borderColor: "#E2443B",
        height: 30,
        width: 30,
        borderRadius: 24,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    cont2: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    img: {
        height: "45%",
        width: "50%",
    },
    cont3: {
        flex: 1,
        backgroundColor: "#FFF",
        width: "100%",
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 30,
        display: "flex",
        flexDirection: "column",
    },
});

export default BookDetail