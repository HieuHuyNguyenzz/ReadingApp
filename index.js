/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Login, Register, BookList, Welcome, Settings, BookGridView, Profile, BookDetail, List, Cart, AddBook, Checkout } from './Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './navigation/App.js';
// const Stack = createNativeStackNavigator()

// const App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Welcome">
//                 <Stack.Screen name="Welcome" component={Welcome} />
//                 <Stack.Screen name="Login" component={Login} />
//                 <Stack.Screen name="Register" component={Register} />
//                 <Stack.Screen name="BookList" component={BookList} />
//                 <Stack.Screen name="BookGridView" component={BookGridView} />
//                 <Stack.Screen name="Settings" component={Settings} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

AppRegistry.registerComponent(appName, () => () => <App />)