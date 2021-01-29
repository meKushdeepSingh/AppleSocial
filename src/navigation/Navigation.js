import React, { useState, useEffect } from 'react'
import {

} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SocialLoginScreen from '../container/auth';
import AccountScreen from '../container/account';
import HomeScreen from '../container/home';
import NotificationScreen from '../container/notification';
import SignUpScreen from '../container/signup';
import AnimatedScreen from '../container/animation/AnimatedScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {

    const mainTab = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Notification' component={NotificationScreen} />
            </Tab.Navigator>
        )
    }

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='AnimatedScreen' component={AnimatedScreen} />
            <Stack.Screen name='Signup' component={SignUpScreen} />
            <Stack.Screen name='Social' component={SocialLoginScreen} />
            <Stack.Screen name='Account' component={AccountScreen} />
            <Stack.Screen name='MainTab' component={mainTab} />

        </Stack.Navigator>
    )
}

export default Navigation;