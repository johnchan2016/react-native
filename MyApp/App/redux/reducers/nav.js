import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import {AppNavigator} from 'App/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState
);

export default function nav(state = initialNavState, action) {
  let nextState;

  //tutorial https://reactnavigation.org/docs/routers/api
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'SignUp':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'SignUp' }),
        state
      );
      break;
      case 'SearchCriteria':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'SearchCriteria' }),
        state
      );
      break;
      case 'PropertySummary':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'PropertySummary' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}