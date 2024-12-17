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
        <Tab.Navigator screenOptions={{tabBarLabelStyle: {fontSize: 14}}}>
            <Tab.Screen options={{title: "Seja bem vindo!", headerTitleAlign: "center", tabBarLabel: "Home", tabBarIcon: () => (<AntDesign size={30} name="home" />) }} name="homeScreen" component={HomeScreen}></Tab.Screen>
            <Tab.Screen options={{ tabBarLabel: "ShoppingCart", tabBarIcon: () => (<AntDesign size={30} name="shoppingcart" />) }} name="shoppingCart" component={ShoppingCart}></Tab.Screen>
            <Tab.Screen options={{ tabBarLabel: "Settings", tabBarIcon: () => (<Ionicons size={30} name="settings-outline" />) }} name="settings" component={Settings}></Tab.Screen>
        </Tab.Navigator>
    );
}

export default HomeTabs
