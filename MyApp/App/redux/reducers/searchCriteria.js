import * as types from 'App/redux/actions/actionTypes';

const initialState = {
    inputParams: null
};
 
export default function searchCriteria(state = initialState, action) {
    switch (action.type) {
      case types.GET_SEARCHPARAMS:
        return Object.assign({}, ...state , { 
          inputParams: action.inputParams
        });
      default:
          return state;
    }
}