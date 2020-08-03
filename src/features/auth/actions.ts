import { User } from 'AuthModels';
import { createAsyncAction } from 'typesafe-actions';

export const loadUserAsync = createAsyncAction(
  'LOAD_USER_REQUEST',
  'LOAD_USER_SUCCESS',
  'LOAD_USER_FAILURE'
)<undefined, User, string>();

export const loginUserArticleAsync = createAsyncAction(
  'CREATE_LOGIN_REQUEST',
  'CREATE_LOGIN_SUCCESS',
  'CREATE_LOGOUT_FAILURE'
)<User, User, string>();

export const redirectToHome = createAsyncAction(
  'REDIRECT_REQUEST',
  'REDIRECT_SUCCESS',
  'REDIRECT_FAILURE'
)<undefined, undefined, undefined>();
