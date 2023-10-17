import React, { useState, useEffect } from "react";
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
} from 'react-native'
import { images, colors, icons, fontSize } from '../constants'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigatior } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from "react-native-safe-area-context";
import { user as UserRepository, population as PopulationRepository } from '../Repositories'
import { convertDateTimeToString } from "../utilies/DateTime";
import { imagesDataURL } from '../constants/images'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
function Profile(props) {
    const [user, setUser] = useState({})
    const [population, setPopulation] = useState()
    const [selectedImage, setSelectedImage] = useState(null)
    const handleImageSelection = async () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
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

    useEffect(() => {
        UserRepository.
            getUserDetail().then(responseUser => setUser(responseUser))
        PopulationRepository.
            getPopulation({
                drilldowns: 'Nation',
                measures: 'Population'
            }).then(responsePopulation => setPopulation(responsePopulation))
    }, [])
    const { email, dateOfBirth, gender, url, userId, address, registeredDate, phone, username } = user
    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: '',
        paddingTop: 50,
        paddingStart: 20,
    }}>
        <ScrollView>
            <View style={{
                marginVertical: 22,
                marginHorizontal: 22,
            }}>
                <TouchableOpacity
                    onPress={handleImageSelection}
                >
                    <Image style={{
                        width: 160,
                        height: 160,
                        borderRadius: 80,
                        borderWidth: 2,
                        backgroundColor: 'red',
                        borderColor: colors.primary,
                    }}
                        source={
                            images.avatar
                        } />
                    <View style={{
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
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>User name: </Text>
                <Text>{username}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Email: </Text>
                <Text>{email}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>DOB: </Text>
                <Text>{convertDateTimeToString(dateOfBirth)}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Gender: </Text>
                <Text>{gender}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Address: </Text>
                <Text>{address}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Phone: </Text>
                <Text>{phone}</Text>
            </View>
            <View>
                <Text>
                    {JSON.stringify}
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView >
}

export default Profile