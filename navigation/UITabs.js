import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { BookGridView, BookList, Settings, Profile } from '../Screens'
import { colors } from '../constants'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { faHouse, faGripLines, faGear, faBars, faAddressCard } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator()
// const screenOptions = ({ route }) => ({
//     headerShown: false,
//     tabBarActiveTintColor: colors.primary,
//     tabBarInactiveTintColor: colors.inactive,
//     tabBarIcon: ({ focused, color, size }) => {
//         let screenName = route.name
//         let iconName = "facebook";
//         if (screenName == "BookGridView") {
//             iconName = "align-center"
//         } else if (screenName == "BookList") {
//             iconName = "accusoft"
//         } else if (screenName == "Settings") {
//             iconName = "cogs"
//         }
//         return <FontAwesomeIcon icon="fa-solid fa-user" />
//     }
// })


function UITabs(props) {
    return <Tab.Navigator>
        <Tab.Screen
            options={
                { tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faBars} color={focused ? "red" : ""} /> }
            }
            name={'BookGridView'}
            component={BookGridView}
        />
        <Tab.Screen
            options={
                { tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faHouse} color={focused ? "red" : ""} /> }
            }
            name={'BookList'}
            component={BookList} />
        <Tab.Screen
            options={
                { tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faGear} color={focused ? "red" : ""} /> }
            }
            name={'Settings'}
            component={Settings} />
        <Tab.Screen
            options={
                { tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faAddressCard} color={focused ? "red" : ""} /> }
            }
            name={"Profile"}
            component={Profile} />
    </Tab.Navigator>
}
export default UITabs