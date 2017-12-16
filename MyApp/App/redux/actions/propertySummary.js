import { NavigationActions } from 'react-navigation';
import axios  from 'axios';

import * as types from 'App/redux/actions/actionTypes';
import { SEARCH_API } from 'App/systemSettings/constants';
import { MapData } from 'App/utils/MapData';

function SearchRequest() {  
  return {
    type: types.SEARCH_REQUEST,
    isLoading: true
  }
}

function SearchSuccess(result, currentPage, lastPage) {  
  return {
    type: types.SEARCH_SUCCESS,
    isLoading: false,
    payload: result,
    currentPage: currentPage,
    lastPage: lastPage,
    index: 0
  }
}

function SearchFailure(error) {  
  return {
    type: types.SEARCH_FAILURE,
    isLoading: false,
    payload: error
  }
}

export function GetPropertyData(params, currentPage) {
  return function(dispatch) {  
    dispatch(SearchRequest());    

    const queryString = MapData(params, '&');
    const url = SEARCH_API + queryString;

    axios.get(url)
    .then( 
      (res) => {      
        let json = res.data;
        const lastPage = json.response.total_pages;
        let data = json.response.listings;

        console.log(`dispatch Data: ${Date.now()}`);

        dispatch(SearchSuccess(data, currentPage, lastPage));
      },
      (error) => {
        dispatch(SearchFailure(error));
      }
    )
  };
}
