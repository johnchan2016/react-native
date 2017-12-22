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
    currentPage,
    lastPage,
    index: 0
  }
}

function SearchFailure(error) {  
  return {
    type: types.SEARCH_FAILURE,
    isLoading: false,
    error
  }
}

function UpdatePropertyIndex(index){
  return {
    type: types.UPDATE_PROPERTYINDEX,
    index
  }
}

function Reset(){
  return {
    type: types.RESET_PROPERTYDATA,
    isLoading: false,
    currentPage: 1,
    lastPage: undefined,
    payload: undefined,
    error: undefined,
    index: 0
  }
}

export function GetPropertyData(params, page) {
  return function(dispatch) {  
    dispatch(SearchRequest());

    let updatedParams = {...params, page};

    const queryString = MapData(updatedParams, '&');
    const url = SEARCH_API + queryString;

    axios.get(url)
    .then( res => {      
      let json = res.data;
      const lastPage = json.response.total_pages;
      let data = json.response.listings;

      dispatch(SearchSuccess(data, page, lastPage));
    })
    .catch( error => {
      dispatch(SearchFailure(error));
    })
  };
}

export function UpdatePropertyDetailIndex(index){
  return UpdatePropertyIndex(index);
}

export function ResetPropertyData(){
  return Reset();
}
