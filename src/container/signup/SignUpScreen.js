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
import { FieldInput } from '../../customComponents/FieldInput';
import validation from '../../utils/validation';
import { successToast } from '../../utils/gernricUtils';


export default SignUpScreen = (props) => {

    const { control, handleSubmit, errors, watch } = useForm({ mode: 'all' });

    const currentPassword = watch('password', '')

    const onSubmit = data => {
        console.log(data)
        successToast('User Registered Succesfully')
        props.navigation.navigate('MainTab')
    };

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

                <FieldInput
                    control={control}
                    inputStyle={styles.inputStyle}
                    rules={validation.firstName}
                    name='firstName'
                    msg={errors?.firstName?.message && errors.firstName.message}
                    placeholder='Enter First Name'
                    defaultValue=''
                />

                <FieldInput
                    control={control}
                    inputStyle={styles.inputStyle}
                    rules={validation.lastName}
                    name='lastName'
                    msg={errors?.lastName?.message && errors.lastName.message}
                    placeholder='Enter Last Name'
                    defaultValue=''
                />

                <FieldInput
                    control={control}
                    inputStyle={styles.inputStyle}
                    rules={validation.phone}
                    name='phone'
                    msg={errors?.phone?.message && errors.phone.message}
                    placeholder='Enter Phone Number'
                    keyboardType='phone-pad'
                    defaultValue=''
                />

                <FieldInput
                    control={control}
                    inputStyle={styles.inputStyle}
                    rules={validation.email}
                    name='email'
                    msg={errors?.email?.message && errors.email.message}
                    placeholder='Enter Email'
                    keyboardType='email-address'
                    defaultValue=''
                    autoCapitalize='none'
                />

                <FieldInput
                    control={control}
                    inputStyle={styles.inputStyle}
                    rules={validation.password}
                    name='password'
                    msg={errors?.password?.message && errors.password.message}
                    placeholder='Enter Password'
                    defaultValue=''
                    secureTextEntry={true}
                />

                <FieldInput
                    control={control}
                    inputStyle={styles.inputStyle}
                    rules={validation.confirmPassword(currentPassword)}
                    name='confirmPassword'
                    msg={errors?.confirmPassword?.message && errors.confirmPassword.message}
                    placeholder='Enter Password'
                    defaultValue=''
                    secureTextEntry={true}
                />


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