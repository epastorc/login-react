import { FactAnimal } from 'DashboardModels';
import { createAsyncAction } from 'typesafe-actions';

export const requestDogFacts = createAsyncAction(
  'REQUEST_FACTDOG_REQUEST',
  'REQUEST_FACTDOG_SUCCESS',
  'REQUEST_FACTDOG_FAILURE'
)<undefined, FactAnimal[], string>();
