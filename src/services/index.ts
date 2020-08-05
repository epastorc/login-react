import * as logger from './logger/logger-service';
import * as login from './login/login-service';
import FactAnimalApi from './api/fact-animal-service';
import * as localStorage from './storage/local-storage-service';

export default {
  logger,
  localStorage,
  api: {
    login,
    FactAnimalApi
  },
};
