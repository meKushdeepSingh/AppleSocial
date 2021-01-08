// @flow
import {
  HOME_REQUEST,
  HOME_FAILURE,
  HOME_SUCCESS
} from './types';
import type State from './types';

const INITIAL_STATE = {
  error: null,
  homeData: null,
  isBusy: false
};

const reducer = (state: State = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_REQUEST:
      return {
        ...state,
        isBusy: true,
        homeData: null
      };
    case HOME_SUCCESS:
      return {
        ...state,
        isBusy: false,
        homeData: action.payload
      };
    case HOME_FAILURE:
      return {
        ...state,
        isBusy: false,
        homeData: null
      };
    default:
      return state;
  }
};

export default reducer;
