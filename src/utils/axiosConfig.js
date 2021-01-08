import axios from 'axios';
// import { removeItem, errorToast } from './genericUtils';
// import { configureStore } from '../../store/configureStore';
// import { removeUserToken } from '../../../features/auth/authActions';
// import NavigationService from '../../layout/NavigatorService';
// const store = configureStore();
const successHandler = async (response) => {
    console.log('Success Handler', response);
    // if (response && response.data && response.data.statusCode === 411) {
    //     removeItem('userToken');
    //     removeItem('userQap');
    //     await handleAxiosToken('');
    //     store.dispatch(removeUserToken());
    //     NavigationService.navigate('Auth');
    //     return response;
    // } else {
    return response;
    // }
};
const errorHandler = (error) => {
    console.log('ERROR', JSON.stringify(error));
    return Promise.reject(error);
    //return error;
};
export const instance = axios.create({});
// export const handleAxiosToken = (AUTH_TOKEN) => {
//     axiosInstance.defaults.headers.common[
//         'Authorization'
//     ] = `Bearer ${AUTH_TOKEN}`;
// };
instance.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error),
);
export const axiosInstance = instance;

