import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { FactAnimal } from 'DashboardModels';

import { requestDogFacts } from './actions';

const reducer = combineReducers({
 
  factdogs: createReducer([] as FactAnimal[])
  .handleAction(
    [requestDogFacts.success],
    (state, action) => action.payload
  ),
  isLoading: createReducer(false as boolean)
  .handleAction([requestDogFacts.request], (state, action) => true)
  .handleAction(
    [requestDogFacts.success, requestDogFacts.failure],
    (state, action) => false
  )
});

export default reducer;
