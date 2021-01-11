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
import { imageStings } from '../../utils/strings';
import { selectSport, userData } from '../../utils/staticData';
import { FieldSelect } from '../../customComponents/FieldSelect';
import { PhoneFieldInput } from '../../customComponents/PhoneFieldInput';




export default SignUpScreen = (props) => {

    const { control, handleSubmit, errors, watch, setValue } = useForm({ mode: 'all' });

    const currentPassword = watch('password', '')

    // initialState setup

    const [countryData, setcountryData] = useState({
        phoneCode: '+1',
        flag: '🇺🇸',
    })


    // auto update data on component mount

    useEffect(() => {
        if (userData) {
            Object.entries(userData).map(([key, value]) => {
                setValue(key, value)
            });
            console.log(Object.entries(userData))
        }
        return () => {

        }
    }, [userData])

    const onSubmit = data => {
        console.log('on submit press===>', data)
        successToast('User Registered Succesfully')
        // props.navigation.navigate('MainTab')
    };

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
                    inputViewStyle={styles.inputViewStyle}
                    rules={validation.firstName}
                    name='firstName'
                    msg={errors?.firstName?.message && errors.firstName.message}
                    placeholder='Enter First Name'
                    icon={imageStings.icName}
                />

                <FieldInput
                    control={control}
                    inputStyle={styles.inputStyle}
                    inputViewStyle={styles.inputViewStyle}
                    rules={validation.lastName}
                    name='lastName'
                    msg={errors?.lastName?.message && errors.lastName.message}
                    placeholder='Enter Last Name'
                    icon={imageStings.icName}
                />

                <PhoneFieldInput
                    control={control}
                    inputStyle={styles.inputStyle}
                    inputViewStyle={styles.inputViewStyle}
                    rules={validation.phone}
                    name='phone'
                    msg={errors?.phone?.message && errors.phone.message}
                    placeholder='Enter Phone Number'
                    flagValue={countryData.flag}
                    onSelectCode={(phoneCode, flag) => setcountryData({ phoneCode, flag })}
                />

                <FieldInput
                    type='email'
                    control={control}
                    inputStyle={styles.inputStyle}
                    inputViewStyle={styles.inputViewStyle}
                    rules={validation.email}
                    name='email'
                    msg={errors?.email?.message && errors.email.message}
                    placeholder='Enter Email'
                    icon={imageStings.icEmail}
                />

                <FieldInput
                    type='password'
                    control={control}
                    inputStyle={styles.inputStyle}
                    inputViewStyle={styles.inputViewStyle}
                    rules={validation.password}
                    name='password'
                    msg={errors?.password?.message && errors.password.message}
                    placeholder='Enter Password'
                    icon={imageStings.icPassword}
                />

                <FieldInput
                    type='password'
                    control={control}
                    inputStyle={styles.inputStyle}
                    inputViewStyle={styles.inputViewStyle}
                    rules={validation.confirmPassword(currentPassword)}
                    name='confirmPassword'
                    msg={errors?.confirmPassword?.message && errors.confirmPassword.message}
                    placeholder='Confirm Password'
                    icon={imageStings.icPassword}
                />

                <FieldSelect
                    control={control}
                    inputViewStyle={styles.inputViewStyle}
                    rules={validation.required}
                    items={selectSport}
                    name='language'
                    msg={errors?.language?.message && errors.language.message}
                    icon={imageStings.icSport}
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
    inputViewStyle: {
        backgroundColor: colors.textInput,
        marginBottom: '2%',
        paddingHorizontal: '5%',
        borderRadius: 25
    },
    inputStyle: {
        width: '80%',
        height: 50,
    },
    errorMsg: {
        fontSize: 12,
        color: colors.red,
        marginBottom: '2%',
    }
})