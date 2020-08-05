import { RootEpic } from 'RootType';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import {
  requestDogFacts
} from './actions';





export const createAuthEpic: RootEpic = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(requestDogFacts.request)),
    switchMap(action =>
      from(api.FactAnimalApi.getFactDog()).pipe(
        map(requestDogFacts.success),
        catchError(message => of(requestDogFacts.failure(message)))
      )
    )
  );

