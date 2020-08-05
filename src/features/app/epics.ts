import { RootEpic } from 'RootType';
import { tap, ignoreElements, filter } from 'rxjs/operators';

import { isActionOf } from 'typesafe-actions';
import {
  loginUserArticleAsync
} from '../auth/actions';

export const persistArticlesInLocalStorage: RootEpic = (
  action$,
  store,
  { localStorage }
) =>
  action$.pipe(
    filter(
      isActionOf([
        loginUserArticleAsync.success,
      ])
    ),
    tap(_ => {
      localStorage.set('user', store.value.auth.token);
    }),
    ignoreElements()
  );

