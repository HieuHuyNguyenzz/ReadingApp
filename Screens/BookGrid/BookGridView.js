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
import GridItem from "./GridItem";

function BookGridView(props) {
    const [products, setProducts] = useState([
        {
            url: 'https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/6/5/photo1685936445303-1685936446034747085225.jpg',
            price: 499.00,
            nameBook: 'Gã bạo chúa cúi mình',
            specifications: [
                'Impressively engaging: This book is impressively engaging and worth reading',
                'A remarkable masterpiece: It\'s a remarkable masterpiece that won\'t disappoint you',
                'A must-read: If you\'re a book enthusiast, you can\'t afford to miss this book',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://image.sggp.org.vn/1200x630/Uploaded/2023/evofzyresfj/2021_01_27/142656959_2547928055515598_3843955001689623399_n_EPWP.jpg',
            price: 499.00,
            nameBook: 'gã bạo chúa và "ngôi nhà thứ 2 của tôi"',
            specifications: [
                'Impressively engaging: This book is impressively engaging and worth reading',
                'A remarkable masterpiece: It\'s a remarkable masterpiece that won\'t disappoint you',
                'A must-read: If you\'re a book enthusiast, you can\'t afford to miss this book',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTWYniXJSbbjwtJ258myLWOiGa-ZpSiXV5JFeEfHdl_Ger7mlF_',
            price: 88,
            nameBook: 'War And Peace',
            specifications: [
                'Impressively engaging: This book is impressively engaging and worth reading',
                'A remarkable masterpiece: It\'s a remarkable masterpiece that won\'t disappoint you',
                'A must-read: If you\'re a book enthusiast, you can\'t afford to miss this book',
            ],
            reviews: 19,
            stars: 4,
        },
        {
            url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAuK4rFUg-jUNuHV-bW-tZJ3RBQ_W2wUm25kevDVP46Y-3Tt16',
            price: 88,
            nameBook: 'Catch 22',
            specifications: [
                'Impressively engaging: This book is impressively engaging and worth reading',
                'A remarkable masterpiece: It\'s a remarkable masterpiece that won\'t disappoint you',
                'A must-read: If you\'re a book enthusiast, you can\'t afford to miss this book',
            ],
            reviews: 19,
            stars: 3,
        },
        {
            url: 'https://images.saymedia-content.com/.image/t_share/MTc0NDE3MjY2MjkxNTE2Nzc2/film-review-alice-in-wonderland-2010.jpg',
            price: 88,
            nameBook: 'Alice in Wonderland',
            specifications: [
                'Impressively engaging: This book is impressively engaging and worth reading',
                'A remarkable masterpiece: It\'s a remarkable masterpiece that won\'t disappoint you',
                'A must-read: If you\'re a book enthusiast, you can\'t afford to miss this book',
            ],
            reviews: 19,
            stars: 3,
        },
        {
            url: 'https://d3fa68hw0m2vcc.cloudfront.net/543/173360429.jpeg',
            price: 88,
            nameBook: 'Sir',
            specifications: [
                'Impressively engaging: This book is impressively engaging and worth reading',
                'A remarkable masterpiece: It\'s a remarkable masterpiece that won\'t disappoint you',
                'A must-read: If you\'re a book enthusiast, you can\'t afford to miss this book',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://m.media-amazon.com/images/I/7117EruQDeL._AC_UF1000,1000_QL80_.jpg',
            price: 88,
            nameBook: 'Lionel Messi "My football hero"',
            specifications: [
                'Impressively engaging: This book is impressively engaging and worth reading',
                'A remarkable masterpiece: It\'s a remarkable masterpiece that won\'t disappoint you',
                'A must-read: If you\'re a book enthusiast, you can\'t afford to miss this book',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://bitebackpub.s3.amazonaws.com/uploads/book/image/236/cover_9781849547628.jpg',
            price: 88,
            nameBook: 'Prison Diaries',
            specifications: [
                'Impressively engaging: This book is impressively engaging and worth reading',
                'A remarkable masterpiece: It\'s a remarkable masterpiece that won\'t disappoint you',
                'A must-read: If you\'re a book enthusiast, you can\'t afford to miss this book',
            ],
            reviews: 19,
            stars: 1,
        },
        {
            url: 'https://cdn.kobo.com/book-images/58bc55c4-7642-4156-b6d4-e343979a9a13/353/569/90/False/hell-on-earth-18.jpg',
            price: 88,
            nameBook: 'Hell on earth',
            specifications: [
                'Impressively engaging: This book is impressively engaging and worth reading',
                'A remarkable masterpiece: It\'s a remarkable masterpiece that won\'t disappoint you',
                'A must-read: If you\'re a book enthusiast, you can\'t afford to miss this book',
            ],
            reviews: 19,
            stars: 2,
        },
    ])
    return <View style={{
        flex: 1,
        backgroundColor: 'white',
    }}>`    `
        <FlatList
            data={products}
            numColumns={2}
            keyExtractor={item => item.nameBook}
            renderItem={({ item, index }) => <GridItem
                item={item} index={index}
                onPress={() => {
                    let clonedProducts = products.map(eachProduct => {
                        if(item.nameBook == eachProduct.nameBook){
                            return {
                                ...eachProduct,
                                isSaved: eachProduct.isSaved == false || eachProduct.isSaved == undefined ? true : false
                            }
                        }
                        return eachProduct
                    })
                    setProducts(clonedProducts)
                }}
            />}
        />
    </View>
}
export default BookGridView