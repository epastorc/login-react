import { User, JwtToken } from 'AuthModels';
import { app } from './firebase-conf';
import * as localStorage from './local-storage-service';
import * as decodeService from './decoder-jwt-service';

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
    throw new Error();
  }
}

export async function loadUser(): Promise<User> {
  const token: string = localStorage.get<string>('user') || '';
  const parseToken: JwtToken = decodeService.decode(token);
  return { name: parseToken.email, password: '' };
}
