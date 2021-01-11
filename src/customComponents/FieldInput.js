import React, { useState, useEffect } from 'react'
import {
    Text,
    TextInput,
    Image,
    View,
    StyleSheet,
} from 'react-native'
import { Controller } from "react-hook-form";
import { colors } from '../utils/colors';


export const FieldInput = ({
    type,
    msg,
    inputStyle,
    name,
    rules,
    control,
    icon,
    inputViewStyle,
    ...props
}) => {

    return (
        <View
            style={styles.mainView}>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <View style={[styles.inputWrapper, inputViewStyle]}>
                        {icon &&
                            <Image style={styles.icon}
                                source={icon}
                            />
                        }
                        <TextInput
                            style={inputStyle}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            secureTextEntry={type === 'password' ? true : false}
                            autoCapitalize={type === 'email' ? 'none' : 'sentences'}
                            keyboardType={type === 'email' ? 'email-address' : 'default'}
                            {...props}
                        />
                    </View>
                )}
                rules={rules}
                name={name}
                defaultValue=''
            />
            {msg && <Text style={styles.errorMsg}>{msg}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%'
    },
    inputWrapper: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginRight: '5%'
    },
    errorMsg: {
        fontSize: 12,
        color: colors.red,
        marginBottom: '2%',
    },
})