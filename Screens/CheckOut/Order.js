import {faArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, useEffect, useCallback} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {fetchStatusEnum} from '../constants/index';
import cartStore from '../stores/CartStore';
import {useFocusEffect} from '@react-navigation/native';
import {colors, icons, images} from '../../constants';
import profileStore from '../stores/LoginStore';
import bookApis from '../api';

function _geColorFromStatus(status) {
  return status.toLowerCase().trim() == 'successful'
    ? 'green'
    : status.toLowerCase().trim() == 'processing'
    ? 'red'
    : status.toLowerCase().trim() == 'failure'
    ? 'purple'
    : 'green';
}
const OrderIt = ({item, navigation}) => {
  const profile = profileStore.getProfile();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('OrderItem', {
          item,
        })
      }
      style={{
        borderWidth: 1,
        borderColor: '#b483eb',
        borderRadius: 10,
        height: 120,
        marginBottom: 20,
      }}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 20}}>#{item.id}</Text>
        <View style={{flex: 1}} />
        <Text
          style={{
            color: _geColorFromStatus(item.ordersStatus),
            fontSize: 20,
          }}>
          {item.ordersStatus.toUpperCase()}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '70%',
            borderRightColor: '#b483eb',
            borderRightWidth: 1,
          }}>
          <Text
            style={{
              textAlign: 'left',
              marginLeft: 20,
              opacity: 0.5,
            }}>
            customerName
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              fontWeight: 'bold',
              alignItems: 'center',
              justifyContent: 'center',
              fontStyle: 'italic',
            }}>
            {profile.userName}
          </Text>
        </View>
        <View
          style={{
            width: '30%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'left', opacity: 0.5}}>Price</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
function generateRandomStatus() {
  const statuses = ['Success', 'Processing', 'Failure'];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

function Order(props) {
  let {
    ordersStatus,
    bookImage,
    finalPrice,
    discount,
    price,
    bookName,
    customerName,
  } = props;
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(fetchStatusEnum.NONE);
  const [isLoading, setIsLoading] = useState(true);
  const {isSelected, onPress} = props;
  const [items, setItems] = useState([]);
  const [randomStatus, setRandomStatus] = useState('');
  const profile = profileStore.getProfile();
  // useFocusEffect(
  //   useCallback(() => {
  //     setStatus(fetchStatusEnum.LOADING);
  //     setRandomStatus(generateRandomStatus());
  //     const fetchOrder = () => {
  //       bookApis.getOrders(json => {
  //         setTimeout(() => {
  //           setStatus(fetchStatusEnum.SUCCESS);
  //           setItems(json.filter(it => it.cusId == profile.currentId));
  //           setIsLoading(false);
  //         }, 2000);
  //       });
  //     };
  //     fetchOrder();
  //   }, []),
  // );
  useEffect(() => {
    // Generate a random status when the component mounts
    setRandomStatus(generateRandomStatus());
  }, []);
  const fetchOrder = () => {
    bookApis.getOrders(json => {
      setItems(json.filter(it => it.cusId == profile.currentId));
    });
  };

  useFocusEffect(
    useCallback(() => {
      fetchOrder();
    }, []),
  );
  // const renderContent = () => {
  //   if (status == fetchStatusEnum.LOADING || isLoading) {
  //     return (
  //       <>
  //         <View
  //           style={{
  //             flex: 1,
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //           }}>
  //           {/* <Loader /> */}
  //           <Text>Loading</Text>
  //         </View>
  //       </>
  //     );
  //   }
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('UITabs')}>
        <Image
          source={icons.leftArrow}
          style={{
            height: 50,
            width: 50,
            marginLeft: 15,
            marginTop: 15,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          //flex: 1,
          height: 150,
          justifyContent: 'center',
          borderBottomColor: '#b483eb',
          borderBottomWidth: 1,
          marginLeft: 20,
          marginRight: 20,
          //backgroundColor: 'red',
        }}>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 20,
            marginBottom: 15,
            color: '#b483eb',
          }}>
          My Order
        </Text>
      </View>
      <FlatList
        data={items}
        numColumns={1}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          item.nameBook = item.bookName;
          item.url = item.bookImage;
          return <OrderIt item={item} navigation={props.navigation} />;
        }}
        style={{
          height: '55%',
        }}
      />
    </View>
  );
}
//   return <View style={{flex: 1}}>{renderContent()}</View>;
// }
export default Order;
