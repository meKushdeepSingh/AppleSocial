
import {
    LOGIN_WITH_PHONE_REQUEST,
    LOGIN_WITH_PHONE_SUCCESS,
    LOGIN_WITH_PHONE_FAILURE
} from './types';


export const socialLogin = (payload) => async (
    dispatch: ReduxDispatch
) => {
    dispatch({
        type: LOGIN_WITH_PHONE_REQUEST
    });
    console.log('Action payload', payload)

    return dispatch({
        type: LOGIN_WITH_PHONE_SUCCESS,
        payload
    });
};
