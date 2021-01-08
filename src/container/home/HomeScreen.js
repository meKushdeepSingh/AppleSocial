import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native'
import { FieldInput } from '../../customComponents/FieldInput'

export default HomeScreen = (props) => {

    const [home, sethome] = useState(null)

    useEffect(() => {
        console.log('Home mounted')
        props.getHomeData()
        console.log('Response', home, props.homeData)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: '5%' }}>
                <Text>{props?.homeData?.data && props.homeData.data.url}</Text>
            </View>
        </SafeAreaView>
    )
}