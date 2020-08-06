import { User, JwtToken } from 'AuthModels';

import { app } from './firebase-conf';
import * as localStorage from '../storage/local-storage-service';
import loggerService from '../logger/logger-service';
import * as decodeService from '../jwt/decoder-jwt-service';
import TokenNotFound from '../error/TokenNotFound';
import AuthenticationError from '../error/AuthenticationError';

export async function login(user: User): Promise<string> {
  try {
    await app.auth().signInWithEmailAndPassword(user.name, user.password);

    const userAux = await app.auth().currentUser;
    if (userAux) {
      const token = await userAux.getIdToken();
      return token;
    }
    return '';
  } catch (error) {
    loggerService.log(error);
    throw new AuthenticationError();
  }
}

export async function loadUser(): Promise<User> {
  const token: string = localStorage.get<string>('user') || '';
  if(token){
    const parseToken: JwtToken = decodeService.decode(token);
    return { name: parseToken.email, password: '' };
  }else {
    throw new TokenNotFound();
  }
}
