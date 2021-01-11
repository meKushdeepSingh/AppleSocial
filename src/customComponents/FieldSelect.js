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
import RNPickerSelect from 'react-native-picker-select';


export const FieldSelect = ({
    msg,
    inputStyle,
    name,
    rules,
    control,
    icon,
    inputViewStyle,
    items,
    placeholder,
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
                        <RNPickerSelect
                            value={value}
                            onValueChange={(value) => onChange(value)}
                            items={items}
                            placeholder={placeholder}
                            style={pickerStyle}
                        // {...props}
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
        width: '100%',
    },
    inputWrapper: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingVertical: '3%',
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

const pickerStyle = {
    inputIOS: {
        height: 30
    },
    inputAndroid: {
    },
    // placeholderColor: 'white',
    underline: { borderTopWidth: 0 },
    icon: {
        position: 'absolute',
        backgroundColor: 'transparent',
        borderTopWidth: 5,
        borderTopColor: '#00000099',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        width: 0,
        height: 0,
        top: 20,
        right: 15,
    },
};