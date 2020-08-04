import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { FactCat } from 'DashboardModels';

import { requestCatFacts } from './actions';

const reducer = combineReducers({
 
  factcats: createReducer([] as FactCat[])
  .handleAction(
    [requestCatFacts.success],
    (state, action) => action.payload
  ),
  isLoading: createReducer(false as boolean)
  .handleAction([requestCatFacts.request], (state, action) => true)
  .handleAction(
    [requestCatFacts.success, requestCatFacts.failure],
    (state, action) => false
  )
});

export default reducer;
