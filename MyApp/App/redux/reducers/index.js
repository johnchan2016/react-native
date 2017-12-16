import { combineReducers } from 'redux';
import auth from './auth';
import nav from './nav';
import signUpAuth from './signUpAuth';
import searchCriteria from './searchCriteria';
import propertySummary from './propertySummary';
 
const rootReducer = combineReducers({
    auth,
    nav,
    signUpAuth,
    searchCriteria,
    propertySummary
});
 
export default rootReducer;