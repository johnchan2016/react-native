import { NavigationActions } from 'react-navigation'

export function NavHelper(routeName){
  return (dispatch) => {
    dispatch(NavigationActions.navigate({routeName}));
  }
}