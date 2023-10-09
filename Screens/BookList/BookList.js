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
import { isValidEmail, isValidPassword } from '../../utilies/Validation'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BookItems from './BookItems'

function BookList(props) {
    const { navigation } = props

    const [books, setBooks] = useState([
        {
            name: 'I Am Tuiba',
            type: 'Adventure, Fantasy',
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
            type: 'Historical Fiction',
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
            type: 'Mystery Thriller',
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
            type: 'Mystery Thriller',
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
            type: 'Psychological Thriller',
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

    const [categories, setCategories] = useState([
        {
            name: 'Fiction',
            url: "https://cdnimg.vietnamplus.vn/uploaded/mzdic/2015_02_15/ibrahimovic_1502.jpg",
        },
        {
            name: 'Thriller',
            url: "https://vcdn-thethao.vnecdn.net/2020/12/28/ibra-1447-1609151178.jpg",
        },
        {
            name: 'Adventure',
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMyff2-JPgJjRGHhmHSf1yqGINcx3ypRmq-uIYlbiu0GUYpaT24JIUGv0n9wdjbNAd48&usqp=CAU",
        },
        {
            name: 'Fantasy',
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTawOxjwktIAxO5KZvZt7sEsoTM-fAOI56AyRfVYc6frp6bK_qL5i2gMfYmQEqWR6EK0&usqp=CAU",
        },
        {
            name: 'Mystery',
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFmbAgnAuu1BIi03n88eNxsF9rFZc9b9iCA&usqp=CAU",
        },
        {
            name: 'Psychological',
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHAoohYC8epFeP9w3zKdtloVvbTEZHdeNXQ&usqp=CAU",
        },
        {
            name: 'Story',
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-dvhtuFpvUAPAKA35yrQENAB9BJxkvaZ4A&usqp=CAU",
        },
    ])
    const [searchText, setSearchText] = useState('')
    const filteredFoods = () => books.filter(eachBook => eachBook.name.toLowerCase().includes(searchText.toLowerCase()))
    return <View style={{
        flex: 1,
        backgroundColor: 'white',
    }}>
        <View style={{
            marginVertical: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: "center",
        }}>
            <Image source={icons.search}
                style={{
                    width: 20,
                    height: 20,
                    color: 'black',
                    position: 'absolute',
                    top: 8,
                    left: 5,
                }} />
            <TextInput
                autoCorrect={false}
                onChangeText={(text) => {
                    setSearchText(text)
                }}
                style={{
                    backgroundColor: colors.inactive,
                    height: 40,
                    flex: 1,
                    marginEnd: 8,
                    borderRadius: 5,
                    opacity: 0.7,
                    paddingStart: 32,
                }} />
            <TouchableOpacity
                onPress={() => navigation.navigate('BookGridView')}>
                <Image source={icons.menu}
                    style={{
                        width: 30,
                        height: 30,
                        color: 'black',
                    }}
                />
            </TouchableOpacity>
        </View>
        <View style={{
            height: 100,
        }}>
            <View style={{ height: 1, backgroundColor: colors.inactive }} />
            <FlatList
                horizontal
                data={categories}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return <TouchableOpacity
                        onPress={() => {
                            alert(`press ${item.name}`)
                        }}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Image style={{
                            width: 50,
                            height: 50,
                            resizeMode: 'cover',
                            borderRadius: 25,
                            margin: 10,

                        }}
                            source={{
                                uri: item.url,
                            }} />
                        <Text style={{ color: 'pink', fontSize: 12 }}>{item.name}</Text>
                    </TouchableOpacity>
                }}
                style={{ flex: 1 }}>
            </FlatList>
            <View style={{
                height: 1,
                backgroundColor: colors.inactive,
            }} />
        </View>
        {filteredFoods().length > 0 ? <FlatList
            data={filteredFoods()}
            renderItem={({ item }) => <BookItems
                onPress={() => {
                    alert(`You press item's name: ${item.name}`)
                }}
                book={item}
                key={item.name} />}
            keyExtractor={eachBook => eachBook.name}
        /> : <View style={{
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSize.h3
            }}>No book found</Text>
        </View>}
        {/* <ScrollView>
                {books.map(eachBook => <BookItems book = {eachBook} />)}
            </ScrollView> */}
    </View>
}
export default BookList