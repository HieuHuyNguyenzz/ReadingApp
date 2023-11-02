import React, {useState, useEffect} from 'react';
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
  Switch,
} from 'react-native';
import {images, colors, icons, fontSize} from '../constants';
import {UIHeader} from '../components';
import {isEnabled} from 'react-native/Libraries/Performance/Systrace';
function Settings(props) {
  const [isEnabledLockApp, setEnabledLockApp] = useState(true);
  const [isUseFingerPrint, setUseFingerPrint] = useState(true);
  const [isEnabledChangePassword, setEnabledChangePassword] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <UIHeader title={'Settings'} />
      <ScrollView>
        <View
          style={{
            height: 40,
            backgroundColor: '#b483eb',
            justifyContent: 'center',
            borderRadius: 3,
            marginTop: 1,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Common
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Order')}
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={icons.globe}
            style={{
              marginStart: 10,
              height: 20,
              width: 20,
            }}
          />
          <Text
            style={{
              color: '#b483eb',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Order
          </Text>
          <View style={{flex: 1}} />
          <Image
            source={icons.arrow}
            style={{
              paddingEnd: 10,
              height: 20,
              width: 20,
              opacity: 0.5,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={icons.cloud}
            style={{
              marginStart: 10,
              height: 20,
              width: 20,
            }}
          />
          <Text
            style={{
              color: '#b483eb',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Environment
          </Text>
          <View style={{flex: 1}} />

          <Image
            source={icons.arrow}
            style={{
              paddingEnd: 10,
              height: 20,
              width: 20,
              opacity: 0.5,
            }}
          />
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: '#b483eb',
            justifyContent: 'center',
            borderRadius: 3,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Account
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={icons.tele}
            style={{
              marginStart: 10,
              height: 20,
              width: 20,
            }}
          />
          <Text
            style={{
              color: '#b483eb',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Phone Number
          </Text>
          <View style={{flex: 1}} />
          <Image
            source={icons.arrow}
            style={{
              paddingEnd: 10,
              height: 20,
              width: 20,
              opacity: 0.5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={icons.mail}
            style={{
              marginStart: 10,
              height: 20,
              width: 20,
            }}
          />
          <Text
            style={{
              color: '#b483eb',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Email
          </Text>
          <View style={{flex: 1}} />
          <Image
            source={icons.arrow}
            style={{
              paddingEnd: 10,
              height: 20,
              width: 20,
              opacity: 0.5,
            }}
          />
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: '#b483eb',
            justifyContent: 'center',
            borderRadius: 3,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Security
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={icons.padlock}
            style={{
              marginStart: 10,
              height: 20,
              width: 20,
            }}
          />
          <Text
            style={{
              color: '#b483eb',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Lock app in background
          </Text>
          <View style={{flex: 1}} />
          <Switch
            trackColor={{false: colors.inactive, true: '#b483eb'}}
            thumbColor={isEnabledLockApp ? '#b483eb' : colors.inactive}
            //ios_backgroundColor = "3e3e3e"
            onValueChange={() => {
              setEnabledLockApp(!isEnabledLockApp);
            }}
            value={isEnabledLockApp}
            style={{marginEnd: 10}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={icons.fp}
            style={{
              marginStart: 10,
              height: 20,
              width: 20,
            }}
          />
          <Text
            style={{
              color: '#b483eb',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Use fingerprint
          </Text>
          <View style={{flex: 1}} />
          <Switch
            trackColor={{false: colors.inactive, true: '#b483eb'}}
            thumbColor={isUseFingerPrint ? '#b483eb' : colors.inactive}
            //ios_backgroundColor = "3e3e3e"
            onValueChange={() => {
              setUseFingerPrint(!isUseFingerPrint);
            }}
            value={isUseFingerPrint}
            style={{marginEnd: 10}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={icons.changepassword}
            style={{
              marginStart: 10,
              height: 20,
              width: 20,
            }}
          />
          <Text
            style={{
              color: '#b483eb',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Change Password
          </Text>
          <View style={{flex: 1}} />
          <Switch
            trackColor={{false: colors.inactive, true: '#b483eb'}}
            thumbColor={isEnabledChangePassword ? '#b483eb' : colors.inactive}
            //ios_backgroundColor = "3e3e3e"
            onValueChange={() => {
              setEnabledChangePassword(!isEnabledChangePassword);
            }}
            value={isEnabledChangePassword}
            style={{marginEnd: 10}}
          />
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: '#b483eb',
            justifyContent: 'center',
            borderRadius: 3,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Account
          </Text>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={icons.terms}
            style={{
              marginStart: 10,
              height: 20,
              width: 20,
            }}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Term of Service
          </Text>
          <View style={{flex: 1}} />
          <Image
            source={icons.arrow}
            style={{
              paddingEnd: 10,
              height: 20,
              width: 20,
              opacity: 0.5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={icons.certificate}
            style={{
              marginStart: 10,
              height: 20,
              width: 20,
            }}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 10,
              paddingStart: 10,
            }}>
            Open source license
          </Text>
          <View style={{flex: 1}} />
          <Image
            source={icons.arrow}
            style={{
              paddingEnd: 10,
              height: 20,
              width: 20,
              opacity: 0.5,
            }}
          />
        </View> */}

        <TouchableOpacity onPress={() => props.navigation.navigate('Password')}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image
              source={icons.changepassword}
              style={{
                marginStart: 10,
                height: 20,
                width: 20,
              }}
            />
            <Text
              style={{
                color: '#b483eb',
                fontSize: 10,
                paddingStart: 10,
              }}>
              Change Password
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icons.arrow}
              style={{
                paddingEnd: 10,
                height: 20,
                width: 20,
                opacity: 0.5,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image
              source={icons.logout}
              style={{
                marginStart: 10,
                height: 20,
                width: 20,
              }}
            />
            <Text
              style={{
                color: '#b483eb',
                fontSize: 10,
                paddingStart: 10,
              }}>
              Sign Out
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icons.arrow}
              style={{
                paddingEnd: 10,
                height: 20,
                width: 20,
                opacity: 0.5,
              }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
export default Settings;
