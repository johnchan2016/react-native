import { NavigationActions } from 'react-navigation';

import * as types from 'App/redux/actions/actionTypes';  
import {NavHelper} from 'App/Helpers';
import * as firebaseManager from 'App/utils/firebaseManager';

function requestLogin() {
  return {
    type: types.LOGIN_REQUEST,
    isLoading: true,
    isAuthenticated: false,
  }
}

function loginSuccess(username) {
  return {
    type: types.LOGIN_SUCCESS,
    isLoading: false,
    isAuthenticated: true,
    username: username,
    payload: ''
  }
}

function loginFailure(message) {
  return {
    type: types.LOGIN_FAILURE,
    isLoading: false,
    isAuthenticated: false,
    payload: message
  }
}

export function loginUser(username, password) {  
  return async function(dispatch) {
    dispatch(requestLogin());
    const response = await firebaseManager.OnAuthLogin(username, password);

    if (response.hasOwnProperty('code')){
      dispatch(loginFailure(response.message));
      return;
    }

    dispatch(loginSuccess(username));
  };
}

export function ResetLoginState(){
  return {
    type: types.LOGIN_RESETPAYLOAD,
    payload:''
  }
}