import { RootEpic } from 'MyTypes';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { push } from 'connected-react-router'

import {
  loadUserAsync,
  loginUserArticleAsync,
  redirectToHome
} from './actions';
import store from '../../store';



export const loadUser: RootEpic = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadUserAsync.request)),
    switchMap(action =>
      from(api.login.loadUser()).pipe(
        map(loadUserAsync.success),
        catchError(message => of(loadUserAsync.failure(message)))
      )
    )
  );



export const createAuthEpic: RootEpic = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loginUserArticleAsync.request)),
    switchMap(action =>
      from(api.login.login(action.payload)).pipe(
        map(loginUserArticleAsync.success),
        catchError(message => of(loginUserArticleAsync.failure(message)))
      )
    )
  );


  export const redirectTo: RootEpic = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loginUserArticleAsync.success)),
    switchMap(() => {
      store.dispatch(push('/dashboard'))
      return of(redirectToHome.success());
    }
    )
  );