import { routerActions } from 'connected-react-router';

import * as authActions from '../features/auth/state/actions';
import * as factCatActions from '../features/main/dashboard/main/store/actions';
import * as factDogActions from '../features/main/dashboard/settings/store/actions';

export default {
  router: routerActions,
  auth: authActions,
  factCat: factCatActions,
  factDog: factDogActions
};
