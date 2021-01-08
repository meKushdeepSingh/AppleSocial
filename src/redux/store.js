
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import * as reduxLoop from 'redux-loop-symbol-ponyfill';
import middleware from './middleware';
import authReducer from '../modules/auth';
import homeReducer from '../modules/home';


const enhancers = [
    applyMiddleware(...middleware),
    reduxLoop.install()
];

const rootReducer = combineReducers({
    authReducer,
    homeReducer,
})

const store = createStore(rootReducer,
    applyMiddleware(...middleware));

console.log(store.getState());
// /* Enable redux dev tools only in development.
//  * We suggest using the standalone React Native Debugger extension:
//  * https://github.com/jhen0409/react-native-debugger
//  */
// /* eslint-disable no-undef */
const composeEnhancers = (
    __DEV__ &&
    typeof (window) !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;
// /* eslint-enable no-undef */
//
const enhancer = composeEnhancers(...enhancers);

export default store;
