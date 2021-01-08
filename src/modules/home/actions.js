
import { homePageApi } from '../../utils/api';
import {
    HOME_REQUEST,
    HOME_SUCCESS,
    HOME_FAILURE
} from './types';


export const getHomeData = () => async (
    dispatch: ReduxDispatch
) => {
    dispatch({
        type: HOME_REQUEST
    });

    return homePageApi()
        .then(res => {
            console.log('response in action', res)
            dispatch({
                type: HOME_SUCCESS,
                payload: res
            });
        }).catch(err => console.log(err))


};
