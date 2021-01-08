import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native'

import {
    LoginManager,
    GraphRequest,
    GraphRequestManager,
} from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { errorToast, successToast } from '../../utils/gernricUtils';
import Navigation from '../../navigation/Navigation';

const SocialLoginScreen = (props) => {

    const [profileData, setprofileData] = useState({
        name: '',
        email: '',
        url: '',
        show: false
    })

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            // webClientId:
            //   '755263404008-13ooi011i2b94if27bm6186naagdink2.apps.googleusercontent.com',
            iosClientId:
                '81357812760-5b6kdv1mahgorvhqr6bdg6digbt22m20.apps.googleusercontent.com',
        });


        console.log('merged data', mergeLists())
        return () => {
            null
        }
    }, [])

    const mergeLists = () => {
        const mergedData = List1.map((item) => ({ ...item, ...List2.find(it => it.id === item.id) }))
        return mergedData
    }

    const facebookLogin = () => {
        console.warn('fb initiated====');
        LoginManager.logInWithPermissions([
            'email',
            'public_profile',
        ]).then(
            (result) => {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    console.log('Login success', result);
                    const responseInfoCallback = async (error, result) => {
                        if (error) {
                            console.log(error);
                        } else {
                            const { email, name, picture: { data: { url } }, } = result
                            console.warn('FB user data====', result);
                            setprofileData({
                                name,
                                email,
                                url,
                                show: true
                            })
                            props.socialLogin(result)
                            props.navigation.navigate('Account')
                            successToast()
                        }
                    };
                    const request = new GraphRequest(
                        '/me',
                        {
                            parameters: {
                                fields: {
                                    string: 'email,name,first_name,last_name,id,picture.type(large)',
                                },
                            },
                        },
                        responseInfoCallback,
                    );
                    new GraphRequestManager().addRequest(request).start();
                }
            },
            (error) => {
                console.log('Login fail with error: ' + error);
            },
        );
    };

    const googleLogin = async () => {
        console.warn('object');
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.warn('payload & userInfo', userInfo);
            const { name, email, photo } = userInfo.user;
            setprofileData({
                name,
                email,
                url: photo,
                show: true
            })
            successToast()
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    const buttons = [
        {
            name: 'Apple',
            onPress: () => errorToast('this feature will be introduced in next release.', 'In Development'),
            color: '#000'
        },
        {
            name: 'FaceBook',
            onPress: facebookLogin,
            color: '#3b5998'
        },
        {
            name: 'Google',
            onPress: googleLogin,
            color: '#1aa260'
        },
        {
            name: 'Skip',
            onPress: () => props.navigation.navigate('MainTab'),
            color: 'grey'
        },
    ]

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            {profileData.show === true && <Text
                onPress={() => setprofileData({
                    name: '',
                    email: '',
                    url: '',
                    show: false
                })}
                style={{
                    position: 'absolute',
                    color: 'red',
                    fontSize: 15,
                    top: '5%',
                    right: '5%'
                }}
            >
                Clear Data
      </Text>}
            <Text style={{
                fontWeight: 'bold',
                fontSize: 25,
                marginBottom: '5%'
            }}>
                Social Login
      </Text>
            {buttons.map((item, index) =>
                <TouchableOpacity
                    key={item.name}
                    style={{
                        paddingVertical: '5%',
                        paddingHorizontal: '5%',
                        borderRadius: 10,
                        backgroundColor: item.color,
                        marginBottom: '3%',
                        width: 150,
                        alignItems: 'center'
                    }}
                    activeOpacity={.6}
                    onPress={item.onPress}
                >
                    <Text style={{
                        color: '#fff',
                        fontWeight: 'bold'
                    }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}

            {profileData.show &&
                <><Text style={{
                    fontWeight: 'bold',
                    fontSize: 25
                }}>
                    Fetched Profile Info
      </Text>

                    <Image
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 25,
                            resizeMode: 'contain'
                        }}
                        source={{ uri: profileData.url }}
                    />
                    <Text style={{
                        fontSize: 18
                    }}>Name: {profileData.name}</Text>
                    <Text style={{
                        fontSize: 18
                    }}>Email: {profileData.email}</Text></>}

        </SafeAreaView>
    )
}

export default SocialLoginScreen;

const List1 = [
    {
        name: 10,
        id: 2
    },
    {
        name: 14,
        id: 3
    },
    {
        name: 17,
        id: 1
    },
    {
        name: 16,
        id: 5
    },
    {
        name: 19,
        id: 4
    },
    {
        name: 11,
        id: 6
    },
]

const List2 = [
    {
        profile: 10,
        id: 1
    },
    {
        profile: 14,
        id: 3
    },
    {
        profile: 17,
        id: 2
    },
    {
        profile: 16,
        id: 6
    },
    {
        profile: 19,
        id: 4
    },
    {
        profile: 11,
        id: 5
    },
]