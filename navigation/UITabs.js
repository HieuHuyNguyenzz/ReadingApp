import { faAddressCard, faBars, faCartShopping, faGear, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { BookGridView, BookList, Cart, Profile, Settings } from '../Screens'
import { View, Platform } from 'react-native'
import { colors } from '../constants'

const Tab = createBottomTabNavigator()

function UITabs(props) {
    return <Tab.Navigator>
        <Tab.Screen
            options={
                {
                    tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faBars} color={focused ? "red" : ""} />,
                    headerShown: false
                }
            }
            name={'BookGridView'}
            component={BookGridView}
        />
        <Tab.Screen
            options={
                {
                    tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faHouse} color={focused ? "red" : ""} />,
                    headerShown: false
                }
            }
            name={'BookList'}
            component={BookList} />
        <Tab.Screen
            options={
                {
                    tabBarIcon: ({ focused }) => <View style={{
                        borderWidth: 2,
                        borderRadius: Platform.OS == 'ios' ? 25 : 30,
                        justifyContent: "center",
                        alignItems: "center",
                        height: Platform.OS == 'ios' ? 50 : 60,
                        width: Platform.OS == 'ios' ? 50 : 60,
                        top: Platform.OS == 'ios' ? -10 : -20,
                        backgroundColor: 'white',
                        borderColor: 'white',
                        elevation: 20,
                    }}>
                        <FontAwesomeIcon icon={faCartShopping} size={32} color={focused ? "red" : ""} />
                    </View>,
                    headerShown: false
                }
            }
            name={'Cart'}
            component={Cart} />
        <Tab.Screen
            options={
                {
                    tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faGear} color={focused ? "red" : ""} />,
                    headerShown: false
                }
            }
            name={'Settings'}
            component={Settings} />
        <Tab.Screen
            options={
                {
                    tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faAddressCard} color={focused ? "red" : ""} />,
                    headerShown: false
                }
            }
            name={"Profile"}
            component={Profile} />
    </Tab.Navigator>
}
export default UITabs