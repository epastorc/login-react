import { RootEpic } from 'RootType';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import {
  requestCatFacts
} from './actions';





export const createAuthEpic: RootEpic = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(requestCatFacts.request)),
    switchMap(action =>
      from(api.FactAnimalApi.getFactCat()).pipe(
        map(requestCatFacts.success),
        catchError(message => of(requestCatFacts.failure(message)))
      )
    )
  );

