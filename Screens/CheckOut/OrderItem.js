import React, {useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {icons, images} from '../../constants';
import profileStore from '../stores/LoginStore';

function _geColorFromStatus(status) {
  return status.toLowerCase().trim() == 'success'
    ? 'green'
    : status.toLowerCase().trim() == 'processing'
    ? 'red'
    : status.toLowerCase().trim() == 'failure'
    ? 'purple'
    : 'green';
}

function generateRandomStatus() {
  const statuses = ['Success', 'Processing', 'Failure'];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

function OrderItem(props) {
  let {
    ordersStatus,
    bookImage,
    finalPrice,
    discount,
    price,
    bookName,
    customerName,
    route = {},
  } = props;
  const {item} = route.params || {};
  const {isSelected, onPress} = props;
  // const [randomStatus, setRandomStatus] = useState('');
  const profile = profileStore.getProfile();

  useEffect(() => {
    // Generate a random status when the component mounts
    // setRandomStatus(generateRandomStatus());
  }, []);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        height: '100%',
      }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Order')}>
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
          Order Detail
        </Text>
      </View>
      <ScrollView
        style={{
          padding: 12,
          height: '50%',
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#b483eb',
            borderRadius: 10,
            height: 150,
            marginBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: '100%',
            }}>
            <Image
              source={{uri: item.bookImage}}
              style={{
                height: 'auto',
                width: 100,
                marginLeft: 15,
                marginVertical: 25,
                borderRadius: 10,
              }}
            />
            <View
              style={{
                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                Tuibaaaaaaaaaa
              </Text>
              <Text style={{fontSize: 40, fontStyle: 'italic'}}>
                $ {item.price}.99
              </Text>
            </View>
            <View style={{flex: 1}} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
          flexDirection: 'row',
          borderBottomColor: '#b483eb',
          borderBottomWidth: 1,
        }}>
        <Text
          style={{
            marginBottom: 15,
            fontSize: 20,
            color: '#b483eb',
            fontWeight: 'bold',
          }}>
          Total
        </Text>
        <Text
          style={{
            width: '100%',
            textAlign: 'right',
            marginLeft: 'auto',
            marginBottom: 15,
            fontSize: 20,
            color: '#b483eb',
            fontWeight: 'bold',
          }}>
          $ {item.price}.99
        </Text>
        <View style={{flex: 1}} />
      </View>
      <ScrollView
        style={{
          flexShrink: 0,
        }}>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 10,
              color: '#b483eb',
              fontWeight: 'bold',
            }}>
            Fees to be paid
          </Text>
          <View
            style={{
              marginLeft: 15,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginBottom: 15,
                color: '#b483eb',
              }}>
              Fee
            </Text>
            <View style={{flex: 1}} />
            <Text
              style={{
                marginBottom: 15,
                fontSize: 20,
                color: '#b483eb',
                fontWeight: 'bold',
              }}>
              % 10
            </Text>
          </View>
          <View
            style={{
              marginLeft: 15,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginBottom: 15,
                color: '#b483eb',
              }}>
              FinalPrice
            </Text>
            <View style={{flex: 1}} />
            <Text
              style={{
                marginBottom: 15,
                fontSize: 20,
                color: '#b483eb',
                fontWeight: 'bold',
              }}>
              $ {item.price + item.price * 0.1 + 0.99}
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: '#b483eb',
            }}>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 15,
                color: '#b483eb',
                fontWeight: 'bold',
              }}>
              Order Detail
            </Text>
            <View
              style={{
                marginLeft: 15,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginBottom: 15,
                  color: '#b483eb',
                }}>
                Note
              </Text>
              <View style={{flex: 1}} />
              <Text
                style={{
                  marginBottom: 15,
                  color: '#b483eb',
                  fontWeight: 'bold',
                }}>
                None
              </Text>
            </View>
            <View
              style={{
                marginLeft: 15,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginBottom: 15,
                  color: '#b483eb',
                }}>
                Payment
              </Text>
              <View style={{flex: 1}} />
              <Text
                style={{
                  marginBottom: 15,
                  color: '#b483eb',
                  fontWeight: 'bold',
                }}>
                Card
              </Text>
            </View>
            <View
              style={{
                marginLeft: 15,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginBottom: 15,
                  color: '#b483eb',
                }}>
                customerName
              </Text>
              <View style={{flex: 1}} />
              <Text
                style={{
                  marginBottom: 15,
                  color: '#b483eb',
                  fontWeight: 'bold',
                }}>
                {profile.userName}
              </Text>
            </View>
            <View
              style={{
                marginLeft: 15,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginBottom: 15,
                  color: '#b483eb',
                }}>
                ordersStatus
              </Text>
              <View style={{flex: 1}} />
              <Text
                style={{
                  color: _geColorFromStatus(item.ordersStatus),
                }}>
                {item.ordersStatus.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default OrderItem;
