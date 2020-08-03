import { User } from 'AuthModels';
import { app } from './firebase-conf';
import * as localStorage from './local-storage-service';

export async function login(user: User): Promise<User> {
  try {
    await app
      .auth()
      .signInWithEmailAndPassword(user.name, user.password);
    return user;
  } catch (error) {
    throw new Error();
  }
}

export async function loadUser(): Promise<User> {
    const user = localStorage.get<User>('user') || { name: '', password: ''};
    return user;
}
