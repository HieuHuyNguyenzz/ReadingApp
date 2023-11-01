import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import {colors, icons, images} from '../../constants';
import cartStore from '../stores/CartStore';
import {useFocusEffect} from '@react-navigation/native';
import bookApis from '../api';
import profileStore from '../stores/LoginStore';
import checkoutStore from '../stores/CheckoutStore';

const CartItem = ({item, remove = () => {}}) => {
  console.log({item});
  return (
    <View
      style={{
        ...styles.shadowContainerStyle,
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
      }}>
      <Image
        source={{uri: item.url}}
        style={{
          width: 100,
          height: 'auto',
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 10,
          flex: 1,
        }}>
        <Text
          style={{
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
          }}>
          {item.nameBook}
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 18,
            color: 'black',
            opacity: 0.5,
          }}>
          $ {item.price}
        </Text>
        <TouchableOpacity
          style={{
            alignItems: 'right',
            flexDirection: 'row',
            padding: 4,
          }}
          onPress={remove}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginLeft: 'auto',
            }}
            source={icons.bin}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

function Cart(props) {
  const {isSelected, onPress} = props;
  const [items, setItems] = useState([]);
  const profile = profileStore.getProfile();

  const fetchCart = () => {
    // setItems(cartStore.get());
    profile &&
      bookApis.getCart(json =>
        setItems(json.filter(it => it.cusId == profile.currentId)),
      );
  };

  const clearCart = () => {
    // setItems([]);
    // cartStore.clear();
    bookApis.clearCart(profile.currentId, () => {
      fetchCart();
    });
  };

  useFocusEffect(
    useCallback(() => {
      fetchCart();
    }, []),
  );

  console.log({
    items,
  });

  const STATUSES = ['SUCCESSFUL', 'PROCESSING', 'FAILURE'];

  const checkout = () => {
    const data = items.map(item => ({
      ...item,
      customerName: profile.userName,
      cusId: profile.currentId,
      ordersStatus: STATUSES[Math.floor(Math.random() * STATUSES.length)],
    }));

    bookApis.addOrders(data, () => {
      clearCart();
    });
  };

  return (
    <View>
      <View
        style={{
          ...styles.shadowBottomStyle,
          flexDirection: 'row',
          alignItems: 'center',
          boderBottom: 20,
          borderBottomColor: 'red',
        }}>
        <TouchableOpacity
          style={{
            marginLeft: 8,
          }}>
          <FontAwesomeIcon icon={faBars} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            flex: 1,
            fontWeight: 'bold',
            color: colors.primary,
          }}>
          My Cart
        </Text>
        <TouchableOpacity
          style={{
            marginRight: 8,
          }}>
          <FontAwesomeIcon icon={faSearch} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        numColumns={1}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          item.nameBook = item.bookName;
          item.url = item.bookImage;
          return (
            <CartItem
              item={item}
              remove={() => {
                // setItems(prev => {
                //   return prev.filter(it => it.id != item.id);
                // });
                // cartStore.remove(item.id);
                bookApis.clearCartItem(item.id, () => {
                  fetchCart();
                });
              }}
            />
          );
        }}
        style={{
          height: '55%',
        }}
      />
      <View
        style={{
          marginTop: 32,
          padding: 20,
        }}>
        <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
          Totals
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 16,
              color: 'black',
            }}>
            Sub Total
          </Text>
          <View
            style={{
              height: 1,
              borderColor: '#dddddd',
              borderWidth: StyleSheet.hairlineWidth,
              flex: 1,
              marginHorizontal: 16,
              marginTop: 5,
            }}
          />
          <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
            $
            {items.length > 0
              ? items.reduce((total, item, index) => {
                  total += item.price;
                  return total;
                }, 0)
              : 0}
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Checkout', {
              checkout,
            });
          }}
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
          <Text style={{color: colors.primary}}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowBottomStyle: {
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  shadowContainerStyle: {
    height: 'auto',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
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
    backgroundColor: '#87CEEB',
  },
});

export default Cart;
