import React, {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors, fontSize, icons} from '../constants';
import bookApis from './api';
import profileStore from './stores/LoginStore';

function Password(props) {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const isValidationOK = () => password.length > 0 && rePassword.length > 0;
  const [validations, setValidations] = useState('');

  const {navigation} = props;

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });

  const resetPassword = () => {
    if (isValidationOK()) {
      if (password !== rePassword) {
        setValidations('Password and Re-password doesnt match');
      } else {
        setValidations('');
      }
    } else {
      setValidations('Password and Re-password must not be empty');
    }

    const profile = profileStore.getProfile();
    profile &&
      isValidationOK() &&
      validations.length == 0 &&
      bookApis.resetPassword(
        {
          id: profile.currentId,
          usersPassword: password,
        },
        () => {
          navigation.navigate('Login');
          setValidations('');
        },
      );
  };

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: 'pink',
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
            color: 'white',
            fontSize: fontSize.h2,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Change your password
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
          flex: 45,
          backgroundColor: 'white',
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
              color: colors.primary,
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
              backgroundColor: 'pink',
              width: '100%',
              marginBottom: 10,
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
          {validations.length > 0 && validations}
        </Text>
        <TouchableOpacity
          onPress={() => {
            resetPassword();
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
            Save
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
    </KeyboardAwareScrollView>
  );
}
export default Password;
