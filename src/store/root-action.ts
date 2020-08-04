import { routerActions } from 'connected-react-router';
import * as authActions from '../features/auth/actions';
import * as factCatActions from '../features/main/dashboard/main/store/actions';

export default {
  router: routerActions,
  auth: authActions,
  factCat: factCatActions
};
