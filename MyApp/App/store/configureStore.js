import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from 'App/redux/reducers/index';

const loggerMiddleware = createLogger();

export default function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware // Logger must be the last middleware in chain, to log actual actions.
    )
  );

  return createStore(rootReducer, initialState, enhancer);
}
