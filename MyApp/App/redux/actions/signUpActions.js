import * as types from 'App/redux/actions/actionTypes';  
import { NavigationActions } from 'react-navigation';

import { ResetLoginState } from 'App/redux/actions';
import { SIGNUP_FAILURE_DIFFERENTPASSWORD, SIGNUP_FAILURE_NOTEMPTY } from 'App/systemSettings/constants';
import * as firebaseManager from 'App/utils/firebaseManager';

function signUpRequest() {  
  return {
    type: types.SIGNUP_REQUEST,
    isLoading: true
  }
}

function signUpSuccess(username, password) {  
  return {
    type: types.SIGNUP_SUCCESS,
    username: username    
  }
}

function signUpFailure(error) {  
  return {
    type: types.SIGNUP_FAILURE,
    payload: error
  }
}

export function ResetSignUpState(){
  return {
    type: types.SIGNUP_RESETPAYLOAD,
    payload: ''
  }
}

export function signUpUser(username, password, confirmPassword) {  
  return async function(dispatch) {
    if (password != confirmPassword){
      dispatch(signUpFailure(SIGNUP_FAILURE_DIFFERENTPASSWORD));
      return;
    }

    if (!username || !password || !confirmPassword){
      dispatch(signUpFailure(SIGNUP_FAILURE_NOTEMPTY));
      return;
    }

    dispatch(signUpRequest());
    const response = await firebaseManager.OnAuthSignUp(username, password);
    
    console.log('response: ' + response);
    console.log('code: ' + response.code);

    if (response.hasOwnProperty('code')){
      dispatch(loginFailure(response.message));
      return;
    }

    //success
    dispatch(signUpSuccess(username, password));
    dispatch(ResetLoginState());
  };
}
