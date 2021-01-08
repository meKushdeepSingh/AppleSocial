import { showMessage } from 'react-native-flash-message';


// back-end API call function with base URL to make complete URL link

export const makeURL = (endpoint) => {
    return `INPUT_BASE_URL_HERE${endpoint}`;
}

// these toast are used to show the message to replace alert message and for in app notification tray

export const errorToast = (description, msg, position) => {
    showMessage({
        message: msg ? msg : 'Error',
        description: description ? description : 'Oops! something went wrong',
        type: 'danger',
        position: position ? position : 'bottom',
        icon: 'auto',
    });
};

export const successToast = (description, msg, position) => {
    showMessage({
        message: msg ? msg : 'Success',
        description: description ? description : '',
        type: 'success',
        position: position ? position : 'bottom',
        icon: 'auto',
    });
};

export const notificationToast = (msg, description, func, data) => {
    showMessage({
        message: msg,
        description: description,
        type: 'default',
        position: 'top',
        style: {
            margin: '5%',
            borderRadius: 10,
            elevation: 10,
            backgroundColor: 'white',
        },
        titleStyle: {
            fontFamily: 'Montserrat-Bold',
            color: '#000000',
        },
        textStyle: {
            fontFamily: 'Montserrat-Medium',
            color: '#000000',
        },
        onPress: func ? () => func(data) : () => { },
    });
};
