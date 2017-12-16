import * as types from 'App/redux/actions/actionTypes';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    username: '',
    payload: ''
};
 
export default function auth(state = initialState, action) {
    switch (action.type) {
      case types.LOGIN_REQUEST:
        return Object.assign({}, ...state , { 
          isLoading: true
        });
      case types.LOGIN_SUCCESS: 
        return Object.assign({}, ...state , { 
          isLoading: false,
          isAuthenticated: true,
          username: action.username,
          payload:''
        });
      case types.LOGIN_FAILURE: 
        return Object.assign({}, state, { 
          isLoading: false,
          isAuthenticated: false,
          payload: action.payload
        });
      case types.LOGIN_RESETPAYLOAD:
        return Object.assign({}, state, { 
          payload: action.payload
        });
      default:
          return state;
    }
}