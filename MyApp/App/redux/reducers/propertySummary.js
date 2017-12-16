import * as types from 'App/redux/actions/actionTypes';

const initialState = {
    isLoading: false,
    currentPage: 1,
    lastPage: '',
    payload: '',
    index: 0
};
 
export default function propertySummary(state = initialState, action) {
    switch (action.type) {
      case types.SEARCH_REQUEST:
        return Object.assign({}, ...state , { 
          isLoading: true
        });

      case types.SEARCH_SUCCESS: 
        return Object.assign({}, ...state , { 
          isLoading: false,
          currentPage: action.currentPage,
          lastPage: action.lastPage,
          payload: action.payload,
          index: 0
        });

      case types.SEARCH_FAILURE: 
        return Object.assign({}, state, { 
          isLoading: false,
          payload: action.payload
        });

      case types.VIEW_PROPERTY_DETAIL: 
        return Object.assign({}, state, { 
          isLoading: false,
          index: action.index
        });

      default:
          return state;
    }
}