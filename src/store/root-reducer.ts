import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import auth from '../features/auth/reducer';
import factcat from '../features/main/dashboard/main/store/reducer';
import factdog from '../features/main/dashboard/settings/store/reducer';

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    factcat,
    factdog,
  });

export default rootReducer;
