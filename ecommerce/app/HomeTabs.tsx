import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from './Tabs/HomeScreen/HomeScreen';
import ShoppingCart from './Tabs/ShoppingCart/ShoppingCart';
import Settings from './Tabs/Settings/Settings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeTabs = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen options={{ tabBarLabel: "home", tabBarIcon: () => (<AntDesign size={30} name="home" />) }} name="homeScreen" component={HomeScreen}></Tab.Screen>
            <Tab.Screen options={{ tabBarLabel: "ShoppingCart", tabBarIcon: () => (<AntDesign size={30} name="shoppingcart" />) }} name="shoppingCart" component={ShoppingCart}></Tab.Screen>
            <Tab.Screen options={{ tabBarLabel: "Settings", tabBarIcon: () => (<Ionicons size={30} name="settings-outline" />) }} name="settings" component={Settings}></Tab.Screen>
        </Tab.Navigator>
    );
}

export default HomeTabs
