import React, {useState, Component} from 'react';
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
import {
  Login,
  Register,
  BookList,
  Welcome,
  Settings,
  BookGridView,
  Password,
  BookDetail,
  Order,
  Cart,
  AddBook,
  Checkout,
  OrderItem,
} from '../Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigatior} from '@react-navigation/bottom-tabs';
import UITabs from './UITabs';

const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="BookGridView" component={BookGridView} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="UITabs" component={UITabs} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="AddBook" component={AddBook} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="OrderItem" component={OrderItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
