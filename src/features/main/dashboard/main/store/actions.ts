import { FactCat } from 'DashboardModels';
import { createAsyncAction } from 'typesafe-actions';

export const requestCatFacts = createAsyncAction(
  'REQUEST_FACTCAT_REQUEST',
  'REQUEST_FACTCAT_SUCCESS',
  'REQUEST_FACTCAT_FAILURE'
)<undefined, FactCat[], string>();
