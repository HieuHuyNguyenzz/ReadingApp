import React, {useState, useEffect, useCallback} from 'react';
import * as ImagePicker from 'expo-image-picker';
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
  Title,
  Caption,
} from 'react-native';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {images, colors, icons, fontSize} from '../constants';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigatior} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  user as UserRepository,
  population as PopulationRepository,
} from '../Repositories';
import {fetchStatusEnum} from './constants/index';
import {convertDateTimeToString} from '../utilies/DateTime';
import {imagesDataURL} from '../constants/images';
import {faCameraRetro} from '@fortawesome/free-solid-svg-icons';
import {FontAwesome} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import bookApis from './api';
import profileStore from './stores/LoginStore';
function Profile(props) {
  const {item} = props;
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(fetchStatusEnum.NONE);
  const [isLoading, setIsLoading] = useState(true);
  const handleImageSelection = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  useFocusEffect(
    useCallback(() => {
      setStatus(fetchStatusEnum.LOADING);
      const profile = profileStore.getProfile();
      profile &&
        profile.currentId &&
        bookApis.fetchProfile(profile.currentId, json => {
          setTimeout(() => {
            setStatus(fetchStatusEnum.SUCCESS);
            setUser(json);
            setIsLoading(false);
          }, 2000);
        });
    }, []),
  );

  const {
    email,
    dateOfBirth,
    gender,
    url,
    userId,
    address,
    registeredDate,
    phone,
    userName,
    fullName,
    id,
  } = user;
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
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '',
          paddingTop: 50,
          paddingStart: 20,
        }}>
        <ScrollView>
          <View
            style={{
              marginVertical: 22,
              marginHorizontal: 22,
            }}>
            <TouchableOpacity onPress={handleImageSelection}>
              <Image
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 80,
                  borderWidth: 2,
                  backgroundColor: 'red',
                  borderColor: colors.primary,
                }}
                source={images.avatar}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 10,
                  zIndex: 9999,
                }}>
                <MaterialIcons
                  name="photo-camera"
                  size={32}
                  color={colors.primary}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>{userName}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>
              #{id}
            </Text>
            {/* <Text>{username}</Text> */}
          </View>
          <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 3}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Fullname: </Text>
            <Text>{fullName}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 3, marginBottom: 3}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Email: </Text>
            <Text>{email}</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 3}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Phone: </Text>
            <Text>{phone}</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#dddddd',
              borderBottomWidth: 1,
              borderTopColor: '#dddddd',
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 100,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRightColor: '#dddddd',
                borderRightWidth: 1,
              }}>
              <Text style={{fontSize: 20}}>₹140.50</Text>
              <Text>Wallet</Text>
            </View>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20}}>27</Text>
              <Text>Orders</Text>
            </View>
          </View>
          <View>
            <Text>{JSON.stringify}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  return <View style={{flex: 1}}>{renderContent()}</View>;
}

export default Profile;
