import { User } from 'AuthModels';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadUserAsync, loginUserArticleAsync } from './actions';

const reducer = combineReducers({
  isLoadingLogin: createReducer(false as boolean)
    .handleAction([loginUserArticleAsync.request], (state, action) => true)
    .handleAction(
      [loginUserArticleAsync.success, loginUserArticleAsync.failure],
      (state, action) => false
    ),
  user: createReducer({} as User)
    .handleAction(
      [loadUserAsync.success, loginUserArticleAsync.success],
      (state, action) => action.payload
    )
    .handleAction(
      loginUserArticleAsync.request,
      (state, action) => action.payload
    ),
});

export default reducer;
