import * as logger from './logger-service';
import * as login from './login-service';
import FactAnimalApi from './api/fact-animal-service';
import * as localStorage from './local-storage-service';

export default {
  logger,
  localStorage,
  api: {
    login,
    FactAnimalApi
  },
};
