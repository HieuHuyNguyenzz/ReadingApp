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
} from 'react-native';
import {images, colors, icons, fontSize} from '../constants';
import {isValidEmail, isValidPassword} from '../utilies/Validation';
import UITabs from '../navigation/UITabs';
import bookApis from './api';
import profileStore from './stores/LoginStore';

const STATUSES = {
  NONE: 0,
  SUCCESS: 1,
  ERROR: 2,
};

function Login(props) {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(STATUSES.NONE);
  const isValidationOK = () => email.length > 0 && password.length > 0;

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });

  const {navigation} = props;

  const login = () => {
    if (isValidationOK()) {
      bookApis.login(
        {
          userName: email,
          usersPassword: password,
        },
        (json = {}) => {
          console.log(json);
          if (json.currentId && json.token) {
            setStatus(STATUSES.SUCCESS);
            profileStore.setProfile({
              ...json,
              userName: email,
            });
            navigation.navigate('UITabs');
          } else {
            setStatus(STATUSES.ERROR);
          }
        },
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
      }}>
      <View
        style={{
          flex: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h2,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Already have an Account ?
        </Text>
        <Image
          tintColor={colors.primary}
          source={icons.library}
          style={{
            width: 120,
            height: 120,
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          flex: 35,
        }}>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSize.h5,
              color: colors.primary,
            }}>
            Username
          </Text>
          <TextInput
            onChangeText={text => {
              setEmail(text);
            }}
            style={{
              color: 'black',
            }}
            placeholder="Enter your username"
            placeholderTextColor={'rgba(0,0,0,0.5)'}
          />
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSize.h5,
              color: colors.primary,
            }}>
            Password
          </Text>
          <TextInput
            onChangeText={text => {
              setPassword(text);
            }}
            style={{
              color: 'black',
            }}
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor={'rgba(0,0,0,0.5)'}
          />
          <View
            style={{
              height: 1,
              backgroundColor: 'pink',
              width: '100%',
              marginBottom: 15,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
        </View>
        <View
          style={{
            backgroundColor: 'pink',
            width: '100%',
            marginBottom: 5,
            marginHorizontal: 15,
            alignSelf: 'center',
          }}></View>
        <Text
          style={{
            color: 'red',
            marginBottom: 15,
            fontSize: fontSize.h5,
            marginHorizontal: 15,
          }}>
          {status == STATUSES.ERROR && 'Invalid username or password'}
        </Text>
      </View>
      {keyboardIsShown == false ? (
        <View
          style={{
            flex: 15,
          }}>
          <TouchableOpacity
            disabled={isValidationOK() == false}
            onPress={() => {}}
            style={{
              backgroundColor:
                isValidationOK() == true ? colors.primary : colors.inactive,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 30,
              width: '50%',
              borderRadius: 18,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSize.h5,
                color: 'white',
              }}
              onPress={() => {
                if (isValidationOK) {
                  login();
                }
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={{padding: 5}}>
            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                alignSelf: 'center',
              }}>
              New user ? Register now
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('Password');
            }}
            style={{padding: 5}}>
            <Text
              style={{
                fontSize: 12,
                alignSelf: 'center',
              }}>
              Forgot password
            </Text>
          </TouchableOpacity> */}
        </View>
      ) : (
        <View
          style={{
            flex: 15,
          }}></View>
      )}
      {keyboardIsShown == false ? (
        <View
          style={{
            flex: 25,
          }}>
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 40,
            }}>
            <View
              style={{
                height: 1,
                backgroundColor: 'black',
                flex: 1,
              }}></View>
            <Text
              style={{
                padding: 8,
                fontSize: 12,
                color: 'black',
                alignSelf: 'center',
                marginHorizontal: 10,
              }}>
              Use other methods ?
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: 'black',
                flex: 1,
              }}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.facebook}
              style={{
                width: 40,
                height: 40,
                color: colors.fb,
              }}
            />
            <View style={{width: 20}}></View>
            <Image
              source={icons.google}
              style={{
                width: 40,
                height: 40,
                color: colors.gg,
              }}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 25,
          }}></View>
      )}
    </KeyboardAvoidingView>
  );
}

export default Login;
