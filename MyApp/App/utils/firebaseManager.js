import firebase from 'firebase';

import {configs} from 'App/systemSettings/configs';
import * as types from 'App/redux/actions/actionTypes';  
import {NavHelper} from 'App/Helpers';


firebase.initializeApp(configs.firebase);
const Auth = firebase.auth();

async function Login (username, password) {
  try {
    let result = await Auth.signInWithEmailAndPassword(username, password);
    //console.log('result: ' + JSON.stringify(result));
    return JSON.stringify(result);
  }catch(error){
    console.log('error: ' + error.message);
    return error;
  }
}

async function SignUp (username, password) {
  try {
    let result = await Auth.createUserWithEmailAndPassword(username, password);
    //console.log('result: ' + JSON.stringify(result));
    return JSON.stringify(result);
  }catch(error){
    console.log('error: ' + error.message);
    return error;
  }
}

export function onAuthPermission () {
  return function(dispatch) {
    Auth.onAuthStateChanged((user) => {
      if (!user) {
        dispatch(NavHelper('Login'));
        console.log('redirect to loginPage');
      }
    });
  }
}

export function OnAuthLogin(username, password){
  return Login(username, password);
}

export function OnAuthSignUp(username, password) {
  return SignUp(username, password);
}