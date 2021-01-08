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
    msg,
    inputViewStyle,
    inputStyle,
    name,
    rules,
    control,
    defaultValue,
    ...props
}) => {

    return (
        <View
            style={{ width: '100%' }}>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <TextInput
                        style={inputStyle}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        {...props}
                    />
                )}
                rules={rules}
                name={name}
                defaultValue={defaultValue}
            />
            {msg && <Text style={styles.errorMsg}>{msg}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        paddingHorizontal: '5%'
    },
    inputStyle: {
        width: '100%',
        height: 50,
        backgroundColor: colors.textInput,
        marginBottom: '2%',
        paddingHorizontal: '5%',
        borderRadius: 25
    },
    errorMsg: {
        fontSize: 12,
        color: colors.red,
        marginBottom: '2%',
    }
})