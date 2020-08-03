import * as logger from './logger-service';
import * as login from './login-service';
import * as toast from './toast-service';
import * as localStorage from './local-storage-service';

export default {
  logger,
  localStorage,
  toast,
  api: {
    login
  },
};
