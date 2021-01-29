import React, { useState, useEffect, useRef } from 'react'
import {
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    Animated,
    StyleSheet
} from 'react-native'
import { imageStings } from '../../utils/strings'

export default AnimatedScreen = (props) => {

    const fadeAnim = new Animated.Value(0);
    const [image, setimage] = useState(0)

    useEffect(() => {
        if (image < 100) {
            setInterval(() => {
                setimage(image + 5)
            }, 1000)
        }
        Animated.spring(fadeAnim, {
            toValue: image,
            useNativeDriver: false
        }).start()
    }, [image])

    const rotation = fadeAnim.interpolate({
        inputRange: [0, 100],
        outputRange: ['red', 'green']
    })

    return (
        <SafeAreaView style={styles.mainView}>

            <Animated.View
                style={[styles.box, { backgroundColor: rotation }]}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    animatedImage: {
        height: 90,
        width: 90
    },
    box: {
        position: 'absolute',
        top: 100,
        left: 150,
        width: 100,
        height: 100
    }
})