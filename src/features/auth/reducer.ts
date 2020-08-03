import { User } from 'AuthModels';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import {
    loadUserAsync,
    loginUserArticleAsync
} from './actions';

const reducer = combineReducers({
  user: createReducer({} as User)
    .handleAction(
      [
        loadUserAsync.success,
        loginUserArticleAsync.success
      ],
      (state, action) => action.payload
    )
    .handleAction(loginUserArticleAsync.request, (state, action) =>
      action.payload,
    )
});

export default reducer;
