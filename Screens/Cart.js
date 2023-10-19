import { faAddressCard, faBars, faTrash, faSearch, faCartShopping, faGear, faHouse } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect, useRef } from "react";
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
    FlatList,
    ScrollView,
} from "react-native"
import InputSpinner from 'react-native-input-spinner';
import { colors, icons, images } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Button from '../components/Button';
import { UIbuttons } from '../components';

const CartItem = ({item}) => {
    return  <View style={{
        ...styles.shadowContainerStyle,
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row'
    }}>
        <Image source={images.avatar}
            style={{
                width: 100,
                height: 100,
                marginHorizontal: 10,
                marginVertical: 10,
            }}
        />
        <View style={{ flexDirection: 'column', padding: 10 }}>
            <Text
                style={{
                    marginTop: 10,
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: 'black'
                }}
            >ahihi</Text>
            <Text
                style={{
                    marginTop: 5,
                    fontSize: 18,
                    color: 'black',
                    opacity: 0.5
                }}
            >$ 277.00</Text>
        </View>
        <View style={{ flex: 1 }} />
        <View style={{ flexDirection: 'column', }}>
            <Button />
            <TouchableOpacity
                style={{ marginBottom: 20, alignItems: 'center' }}
            >
                <Image
                    style={{
                        width: 40,
                        height: 40
                    }}
                    source={icons.bin} />
            </TouchableOpacity>
        </View>
    </View>
}

function Cart(props) {
    const { isSelected, onPress } = props
    const [books, setBooks] = useState([
        {
            name: 'I Am Tuiba',
            type: 'Adventure',
            url: 'https://eccthai.com/wp-content/uploads/2022/05/toi-la-ibrahimovic.jpg',
            status: 'Opening soon',
            price: 499.99,
            website: 'https://tuibavodich.cnn.com',
            Etp: [
                {
                    shoppe: '',
                    lazada: '',
                    facebook: '',
                    tiktok: '',
                }
            ]
        },
        {
            name: 'The Road',
            type: 'Fiction',
            url: 'https://th.bing.com/th/id/R.84281c01626de35a000da7022e35ff19?rik=fT0D2LQsr5HU1w&riu=http%3a%2f%2f4.bp.blogspot.com%2f_qs53l7Z3B0M%2fS8blOUPe6XI%2fAAAAAAAAAYg%2fh7ARWeVi1bc%2fs1600%2fthe-road-cormac-mccarthy1.jpg&ehk=sWvo1hTNAc6oJ9FFvLHZwr%2bW%2bmN4shDodHIcFcqm%2bD0%3d&risl=&pid=ImgRaw&r=0',
            status: 'Opening Now',
            price: 499.99,
            website: 'https://tuibavodich.cnn.com',
            Etp: [
                {
                    shoppe: '',
                    lazada: '',
                    facebook: '',
                    tiktok: '',
                }
            ]
        },
        {
            name: 'Becoming',
            type: 'Memoir',
            url: 'https://th.bing.com/th/id/OIP.wDQFCbweou07KFknivY97gHaK-?pid=ImgDet&rs=1',
            status: 'Coming Soon',
            price: 499.99,
            website: 'https://tuibavodich.cnn.com',
            Etp: [
                {
                    shoppe: '',
                    lazada: '',
                    facebook: '',
                    tiktok: '',
                }
            ]
        },
        {
            name: 'All the Light We Cannot See',
            type: 'Historical',
            url: 'https://th.bing.com/th/id/R.aff5cb8b720e75ce3fc7470df641c51b?rik=E5K8Ywe7N1L3Cw&riu=http%3a%2f%2fcovers.booktopia.com.au%2fbig%2f9780007548699%2fall-the-light-we-cannot-see.jpg&ehk=g%2fi5HrUOMXw%2bzXgEzSyZKjaZsU%2bDHWT%2brBe3lxFrC2c%3d&risl=&pid=ImgRaw&r=0',
            status: 'Closing Soon',
            price: 499.99,
            website: 'https://tuibavodich.cnn.com',
            Etp: [
                {
                    shoppe: '',
                    lazada: '',
                    facebook: '',
                    tiktok: '',
                }
            ]
        },
        {
            name: 'A Thousand Splendid Suns',
            type: 'Fiction',
            url: 'https://th.bing.com/th/id/OIP.X7V7DyBgv7tZIfURqECpvQHaLA?pid=ImgDet&rs=1',
            status: 'Opening Now',
            price: 499.99,
            website: 'https://tuibavodich.cnn.com',
            Etp: [
                {
                    shoppe: '',
                    lazada: '',
                    facebook: '',
                    tiktok: '',
                }
            ]
        },
        {
            name: 'The Help',
            type: 'Fiction',
            url: 'https://th.bing.com/th/id/OIP.UAEBnCp9eVfPyTnjIln39AHaLC?pid=ImgDet&rs=1',
            status: 'Opening Now',
            price: 499.99,
            website: 'https://tuibavodich.cnn.com',
            Etp: [
                {
                    shoppe: '',
                    lazada: '',
                    facebook: '',
                    tiktok: '',
                }
            ]
        },
        {
            name: 'The Girl with the Dragon Tattoo',
            type: 'Mystery',
            url: 'https://th.bing.com/th/id/R.e479e3aa185a06d9e183bd67321fa3d7?rik=UbE%2bCXx7X7JWAw&riu=http%3a%2f%2fpics.filmaffinity.com%2fThe_Girl_with_the_Dragon_Tattoo-445739302-large.jpg&ehk=elRQTN5uE5QebuPi9yWXdkMBASpxjptA9QG3d97wiT4%3d&risl=&pid=ImgRaw&r=0',
            status: 'Opening Now',
            price: 499.99,
            website: 'https://tuibavodich.cnn.com',
            Etp: [
                {
                    shoppe: '',
                    lazada: '',
                    facebook: '',
                    tiktok: '',
                }
            ]
        },
        {
            name: 'Gone Girl',
            type: 'Mystery',
            url: 'https://th.bing.com/th/id/R.6c30ca68df18aa8b9ed0b3f77e12b5ab?rik=qOgQ7ZCa5O8F2A&riu=http%3a%2f%2fwww.newdvdreleasedates.com%2fimages%2fposters%2flarge%2fgone-girl-2014-06.jpg&ehk=Q9LfeNdJ5Kt4hBY6K5xBGo9Ark3x297JSNwyYJ1n6W8%3d&risl=&pid=ImgRaw&r=0',
            status: 'Opening Now',
            price: 499.99,
            website: 'https://tuibavodich.cnn.com',
            Etp: [
                {
                    shoppe: '',
                    lazada: '',
                    facebook: '',
                    tiktok: '',
                }
            ]
        },
        {
            name: 'Crime and Punishment',
            type: 'Psychological',
            url: 'https://i.thenile.io/r1000/9780486415871.jpg?r=5e4284a48e904',
            status: 'Coming soon',
            price: 499.99,
            website: 'https://tuibavodich.cnn.com',
            Etp: [
                {
                    shoppe: '',
                    lazada: '',
                    facebook: '',
                    tiktok: '',
                }
            ]
        },
        {
            name: 'The Book Thief',
            type: 'Fiction',
            url: 'https://image.tmdb.org/t/p/original/xNqdfSBflOjgZ0Sj7MSYszm4uc4.jpg',
            status: 'Closing soon',
            price: 499.99,
            website: 'https://tuibavodich.cnn.com',
            Etp: [
                {
                    shoppe: '',
                    lazada: '',
                    facebook: '',
                    tiktok: '',
                }
            ]
        },
    ])

    return <View>
        <View style={{
            ...styles.shadowBottomStyle,
            flexDirection: 'row',
            alignItems: "center",
            boderBottom: 20,
            borderBottomColor: 'red'
        }}>
            <TouchableOpacity
                style={{
                    marginLeft: 8
                }}>
                <FontAwesomeIcon icon={faBars} />
            </TouchableOpacity>
            <Text style={{
                fontSize: 25,
                textAlign: 'center',
                flex: 1,
                fontWeight: 'bold',
                color: colors.primary
            }}>My Cart</Text>
            <TouchableOpacity
                style={{
                    marginRight: 8,
                }}>
                <FontAwesomeIcon icon={faSearch} />
            </TouchableOpacity>
        </View>
        <ScrollView>
            <CartItem />
        </ScrollView>
        <View style={{
            marginTop: 32,
            padding: 20,
        }}>
            <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>Totals</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 16,
                    color: 'black',
                }}>
                    Sub Total
                </Text>
                <View style={{
                    height: 1,
                    borderColor: '#dddddd',
                    borderWidth: StyleSheet.hairlineWidth,
                    flex: 1,
                    marginHorizontal: 16,
                    marginTop: 5,
                }} />
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>$30.00</Text>
            </View>
        </View>
        <View style={{ alignItems: 'center', }}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Checkout")}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: isSelected == true ? 'red' : 'white',
                    borderRadius: 50,
                    padding: 10,
                    margin: 20,
                    width: 100,
                    height: 50,
                }}>
                <Text style={{ color: colors.primary }}>Check Out</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    shadowBottomStyle: {
        padding: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    shadowContainerStyle: {
        height: 120,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 18,
    },
    button: {
        width: 100,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87CEEB'
    },
})

export default Cart