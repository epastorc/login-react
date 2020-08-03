import { combineEpics } from 'redux-observable';

import * as app from '../features/app/epics';
import * as auth from '../features/auth/epics';

export default combineEpics(...Object.values(app), ...Object.values(auth));
