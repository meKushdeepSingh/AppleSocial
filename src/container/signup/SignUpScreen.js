import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    Button,
} from 'react-native'
import { colors } from '../../utils/colors'
import { useForm, Controller } from "react-hook-form";


export default SignUpScreen = () => {

    const { control, handleSubmit, errors } = useForm({ mode: 'all' });

    const onSubmit = data => console.log(data);

    useEffect(() => {
        console.log('error emit', errors)
    }, [errors])

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            justifyContent: 'center'
        }}>
            <View style={styles.formContainer}>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.inputStyle}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="firstName"
                    rules={{
                        required: { value: true, message: 'This is required.' },
                        maxLength: { value: 10, message: 'Name should be of atmost 10 characters.' }
                    }}
                    defaultValue=""
                />
                {errors?.firstName?.message && <Text style={styles.errorMsg}>{errors.firstName.message}</Text>}

                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.inputStyle}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    rules={{
                        required: { value: true, message: 'This is required.' },
                        maxLength: { value: 10, message: 'Name should be of atmost 10 characters.' }
                    }}
                    name="lastName"
                    defaultValue=""
                />
                {errors?.lastName?.message && <Text style={styles.errorMsg}>{errors.lastName.message}</Text>}

                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.inputStyle}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            keyboardType='number-pad'
                        />
                    )}
                    rules={{
                        required: { value: true, message: 'This is required.' },
                        pattern: {
                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                            message: 'Please enter a valid number.'
                        }
                    }}
                    name="phone"
                    defaultValue=""
                />
                {errors?.phone?.message && <Text style={styles.errorMsg}>{errors.phone.message}</Text>}

                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.inputStyle}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            secureTextEntry={true}
                        />
                    )}
                    rules={{
                        required: { value: true, message: 'This is required.' },
                        maxLength: { value: 8, message: 'Password should be of atmost 8 characters.' },
                        minLength: { value: 3, message: 'Password should be of atleast 3 characters.' }
                    }}
                    name="password"
                    defaultValue=""
                />
                {errors?.password?.message && <Text style={styles.errorMsg}>{errors.password.message}</Text>}

                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </SafeAreaView>
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