import * as types from 'App/redux/actions/actionTypes';

function GetInput(inputParams) {  
  return {
    type: types.GET_SEARCHPARAMS,
    inputParams: inputParams
  }
}

export function GetSearchInput(inputParams){  
  return GetInput(inputParams);
}
