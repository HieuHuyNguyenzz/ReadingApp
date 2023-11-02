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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import bookApis from './api';
import {Alert} from 'react-native';

function Register(props) {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [validations, setValidations] = useState({});
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    fullname.length > 0 &&
    rePassword.length > 0;

  const {navigation} = props;

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });

  const register = () => {
    setValidations(prev => ({...prev, register: ''}));
    if (isValidationOK()) {
      setValidations(prev => ({...prev, empty: ''}));
      if (password !== rePassword) {
        setValidations(prev => ({
          ...prev,
          password: 'Re-enter password does not match',
        }));
      } else {
        setValidations(prev => ({
          ...prev,
          password: '',
        }));
      }
    } else {
      setValidations(prev => ({
        ...prev,
        empty:
          'Username, password, fullname, re-enter password must not be empty',
      }));
    }

    if (isValidationOK() && Object.values(validations).every(it => it == '')) {
      bookApis.register(
        {
          userName: email,
          fullName: fullname,
          usersPassword: password,
          userType: 0,
          email: mail,
          phone: phone,
        },
        json => {
          if (!json.message) {
            navigation.navigate('Login');
          } else {
            setValidations(prev => ({
              ...prev,
              register: json.message.includes('exists')
                ? 'Username already exists'
                : 'Register unsuccessful',
            }));
          }
        },
      );
    }
  };

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: '#b483eb',
            fontSize: fontSize.h2,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Register
        </Text>
        <Image
          tintColor="#b483eb"
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
          flex: 45,
          backgroundColor: '#b483eb',
          borderRadius: 20,
          margin: 10,
          padding: 10,
        }}>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSize.h5,
              color: 'white',
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
            placeholderTextColor={'rgba(0,0,0,0.5)'}
            placeholder="Enter your username"
          />
          <View
            style={{
              height: 1,
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 5,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSize.h5,
              color: 'white',
            }}>
            Fullname
          </Text>
          <TextInput
            onChangeText={text => {
              setFullname(text);
            }}
            placeholder="Enter your fullname"
            style={{
              color: 'black',
            }}
            placeholderTextColor={'rgba(0,0,0,0.5)'}
          />
          <View
            style={{
              height: 1,
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 5,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSize.h5,
              color: 'white',
            }}>
            E-mail
          </Text>
          <TextInput
            onChangeText={text => {
              setMail(text);
            }}
            placeholder="Enter your email"
            style={{
              color: 'black',
            }}
            placeholderTextColor={'rgba(0,0,0,0.5)'}
          />
          <View
            style={{
              height: 1,
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 5,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSize.h5,
              color: 'white',
            }}>
            Phone
          </Text>
          <TextInput
            onChangeText={text => {
              setPhone(text);
            }}
            placeholder="Enter your phone"
            style={{
              color: 'black',
            }}
            placeholderTextColor={'rgba(0,0,0,0.5)'}
          />
          <View
            style={{
              height: 1,
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 5,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSize.h5,
              color: 'white',
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
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSize.h5,
              color: 'white',
            }}>
            Re-password
          </Text>
          <TextInput
            onChangeText={text => {
              setRePassword(text);
            }}
            style={{
              color: 'black',
            }}
            secureTextEntry={true}
            placeholder="Re-Enter your password"
            placeholderTextColor={'rgba(0,0,0,0.5)'}
          />
          <View
            style={{
              height: 1,
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            marginBottom: 5,
            marginHorizontal: 15,
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            color: 'red',
            marginBottom: 15,
            fontSize: fontSize.h5,
            marginHorizontal: 15,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}>
          {Object.values(validations).some(it => it) &&
            Object.values(validations).map(it => {
              return it ? (
                <Text
                  style={{
                    color: 'red',
                  }}>
                  {it}
                </Text>
              ) : null;
            })}
        </View>
        <TouchableOpacity
          //   disabled={isValidationOK() == false}
          onPress={() => {
            register();
          }}
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
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
      {keyboardIsShown == false ? (
        <View
          style={{
            flex: 20,
          }}></View>
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
                backgroundColor: 'white',
                flex: 1,
              }}></View>
            <Text
              style={{
                padding: 8,
                fontSize: 12,
                color: 'white',
                alignSelf: 'center',
                marginHorizontal: 10,
              }}>
              Use other methods ?
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: 'white',
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
    </KeyboardAwareScrollView>
  );
}
export default Register;
