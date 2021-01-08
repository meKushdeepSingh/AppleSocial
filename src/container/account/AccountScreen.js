import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'
import { colors } from '../../utils/colors'

export default AccountScreen = (props) => {
    const profileData = props.userAccount;
    console.log('Profile Data', profileData)

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <View style={{
                height: 60,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontWeight: 'bold'
                }}>
                    Account
</Text>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 25,
                        resizeMode: 'contain'
                    }}
                    source={{ uri: profileData.picture.data.url }}
                />
                <Text style={{
                    fontSize: 18
                }}>Name: {profileData.name}</Text>
                <Text style={{
                    fontSize: 18
                }}>Email: {profileData.email}</Text>
            </View>
        </SafeAreaView>
    )
}