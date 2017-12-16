import * as types from 'App/redux/actions/actionTypes';

const initialState = {
    isLoading: false,
    payload: ''
};
 
export default function signUpAuth(state = initialState, action) {
    switch (action.type) {
      case types.SIGNUP_REQUEST:
        return Object.assign({}, ...state , { 
          isLoading: true
        });
      case types.SIGNUP_SUCCESS: 
        return Object.assign({}, ...state , { 
          isLoading: false,
          payload:''
        });
      case types.SIGNUP_FAILURE: 
        return Object.assign({}, state, { 
          isLoading: false,
          payload: action.payload
        });
      case types.SIGNUP_RESETPAYLOAD:
        return Object.assign({}, state, { 
          payload: action.payload
        });        
      default:
          return state;
    }
}