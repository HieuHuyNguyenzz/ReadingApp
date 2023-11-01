import React, {useState, useEffect, useCallback} from 'react';
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
} from 'react-native';
import {images, colors, icons, fontSize} from '../../constants';
import GridItem from './GridItem';
import {useFocusEffect} from '@react-navigation/native';
import bookApis from '../api';

function BookGridView(props, route) {
  // const { addBookToCart } = route.params;
  // const addToCart = (book) => {
  //     // Sao chép giỏ hàng hiện tại và thêm sách mới vào đó
  //     const updatedCart = [...cart, book];
  //     setCart(updatedCart);
  // };

  const [products, setProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      bookApis.getBooks(json => setProducts(json));
    }, []),
  );

  console.log('grid>>', products);

  const {navigation} = props;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          item.nameBook = item.bookName;
          item.url = item.bookImage;
          item.rating = Math.floor(Math.random() * 5) + 1;

          return (
            <GridItem
              item={item}
              index={index}
              onPress={() => {
                let clonedProducts = products.map(eachProduct => {
                  if (item.nameBook == eachProduct.nameBook) {
                    return {
                      ...eachProduct,
                      isSaved:
                        eachProduct.isSaved == false ||
                        eachProduct.isSaved == undefined
                          ? true
                          : false,
                    };
                  }
                  return eachProduct;
                });
                setProducts(clonedProducts);
              }}
              onBookDetail={() => {
                navigation.navigate('BookDetail', {item});
              }}
            />
          );
        }}
      />
    </View>
  );
}
export default BookGridView;
