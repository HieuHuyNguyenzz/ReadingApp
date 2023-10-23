import { Icon } from 'native-base';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';
import { images } from '../../constants';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
const DATA = [
    {
        id: '1',
        bankName: 'SBI',
        cardNo: '5535 6535 2345 3786',
        name: 'ARIF MAHMOOD',
        cvv: '123',
        expireDate: '11/19',
        image: images.visa,
        bg_color: '#FC328A',
    },
    {
        id: '2',
        bankName: 'BOI',
        cardNo: '5598 6545 4545 5686',
        name: 'PRAVAT BEHERA',
        cvv: '123',
        expireDate: '11/19',
        image: images.masterCard,
        bg_color: '#8961EE',
    },
    {
        id: '3',
        bankName: 'NIOX',
        cardNo: '5598 6545 4545 5456',
        name: 'KAMRUDDIN KHAN',
        cvv: '123',
        expireDate: '11/19',
        image: images.masterCard,
        bg_color: '#AC2DFE',
    },
];

const defaultBank = {
    bankName: "",
    cardNo: "",
    name: "",
    expireDate: "",
    cvv: "",
};

const Checkout = (props) => {
    const [bank, setBank] = useState(defaultBank)
    const [details, setDetails] = useState([]);

    const { name, cardNo, expireDate, cvv } = bank;

    const onChange = (name, value) => {
        setBank({ ...bank, [name]: value })
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => setDetails(item)}>
                <View style={[styles.card, { backgroundColor: item.bg_color }]}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>
                        {item.bankName}
                    </Text>
                    <Text
                        style={{
                            fontSize: 28,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginVertical: 40,
                        }}>
                        {item.cardNo}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>
                            {item.name}
                        </Text>
                        <Image
                            source={item.image}
                            style={{ height: 60, width: 120, resizeMode: 'contain' }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("UITabs")}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </TouchableOpacity>
                <Text style={styles.headerText}>CARD CHECKOUT</Text>
                <FontAwesomeIcon icon={faBars} />
            </View>

            <View style={{ marginVertical: 40 }}>
                <FlatList
                    horizontal
                    data={DATA}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={{ paddingHorizontal: 30 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    value={cardNo}
                    onChangeText={text => onChange("cardNo", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    value={name}
                    onChangeText={text => onChange("name", text)}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '40%' }}>
                        <TextInput
                            style={styles.input}
                            placeholder="expireDate"
                            placeholderTextColor="rgba(0,0,0,0.4)"
                            value={expireDate}
                            onChangeText={text => onChange("expireDate", text)}
                        />
                    </View>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={styles.input}
                            placeholder="cvv"
                            placeholderTextColor="rgba(0,0,0,0.4)"
                            value={cvv}
                            onChangeText={text => onChange("cvv", text)}
                        />
                    </View>
                </View>

                <TouchableOpacity style={[styles.textView, { backgroundColor: '#EE2A90', alignItems: 'center', marginVertical: 30 }]}>
                    <Text style={[styles.text, { color: '#fff' }]}>CHECKOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Checkout;

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#FBFBFB',
    },
    header: {
        paddingTop: 50,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        width: 400,
        height: 220,
        marginHorizontal: 8,
        borderRadius: 14,
        padding: 20,
    },
    textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ccc',
    },
    textView: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        borderRadius: 10,
        marginVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});