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
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {images, colors, icons, fontSize} from '../../constants';
import GridItem from './GridItem';
import {useFocusEffect} from '@react-navigation/native';
import bookApis from '../api';
import {fetchStatusEnum} from '../constants';

function BookGridView(props, route) {
  // const { addBookToCart } = route.params;
  // const addToCart = (book) => {
  //     // Sao chép giỏ hàng hiện tại và thêm sách mới vào đó
  //     const updatedCart = [...cart, book];
  //     setCart(updatedCart);
  // };

  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(fetchStatusEnum.NONE);
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setStatus(fetchStatusEnum.LOADING);
      bookApis.getBooks(json => {
        setTimeout(() => {
          setStatus(fetchStatusEnum.SUCCESS);
          setProducts(json);
          setIsLoading(false);
        }, 100);
      });
    }, []),
  );

  console.log('grid>>', products);
  const {navigation} = props;

  const renderContent = () => {
    if (status == fetchStatusEnum.LOADING || isLoading) {
      return (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon
              icon={faSpinner}
              spinPulse
              style={{
                '--fa-primary-color': '#b961e5',
                '--fa-secondary-color': '#cf45d9',
              }}
            />
            <Text>Loading</Text>
          </View>
        </>
      );
    }

    if (products.length == 0)
      return (
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: fontSize.h3,
            }}>
            No book found
          </Text>
        </View>
      );

    return (
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
    );
  };

  return <View style={{flex: 1}}>{renderContent()}</View>;
}
export default BookGridView;
