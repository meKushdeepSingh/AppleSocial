// @flow
import {
  LOGIN_WITH_PHONE_REQUEST,
  LOGIN_WITH_PHONE_FAILURE,
  LOGIN_WITH_PHONE_SUCCESS
} from './types';
import type State from './types';

const INITIAL_STATE = {
  error: null,
  response: null,
  isBusy: false
};

const reducer = (state: State = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_WITH_PHONE_REQUEST:
      return {
        ...state,
        isBusy: true,
        response: null
      };
    case LOGIN_WITH_PHONE_SUCCESS:
      return {
        ...state,
        isBusy: false,
        response: action.payload
      };


    case LOGIN_WITH_PHONE_FAILURE:
      return {
        ...state,
        isBusy: false,
        response: null
      };
    default:
      return state;
  }
};

export default reducer;
