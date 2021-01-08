import React, { useState, useEffect } from 'react'
import {
    Text,
    TextInput,
    Image,
    View,
} from 'react-native'

export const FieldInput = ({
    msg,
    img,
    inputViewStyle,
    inputStyle,
    ...props
}) => {
    return (
        <View
            style={{ width: '100%' }}>
            <View
                style={[{
                    width: '100%',
                    height: 60,
                    borderRadius: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }, { ...inputViewStyle }]}>
                {img && <Image />}
                <TextInput
                    style={[{
                        width: '80%',
                        height: 40,
                    }, { inputStyle }]}
                    {...props}
                />
            </View>
            {msg && <Text style={{
                color: 'red',
                fontSize: 12,
                width: '90%',
                alignSelf: 'center',
                marginTop: '1%'
            }}>
                {msg}
            </Text>}
        </View>
    )
}