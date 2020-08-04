import { combineEpics } from 'redux-observable';

import * as app from '../features/app/epics';
import * as auth from '../features/auth/epics';
import * as factcat from '../features/main/dashboard/main/store/epics';

export default combineEpics(...Object.values(app), ...Object.values(auth), ...Object.values(factcat));
