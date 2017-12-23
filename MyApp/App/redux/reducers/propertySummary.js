import * as types from 'App/redux/actions/actionTypes';

const initialState = {
    isLoading: false,
    currentPage: 1,
    lastPage: null,
    payload: [],
    error: null,
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
          error: null,
          index: 0
        });

      case types.SEARCH_FAILURE: 
        return Object.assign({}, state, { 
          isLoading: false,
          payload: null,
          error: action.payload
        });

      case types.UPDATE_PROPERTYINDEX: 
        return Object.assign({}, state, { 
          isLoading: false,
          index: action.index,
        });
      case types.RESET_PROPERTYDATA:
        return Object.assign({}, ...state , { 
          isLoading: false,
          currentPage: action.currentPage,
          lastPage: action.lastPage,
          payload: action.payload,
          error: action.error,
          index: 0
        });
      default:
          return state;
    }
}