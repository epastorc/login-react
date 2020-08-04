declare module 'AuthModels' {
    export type User = {
      name: string;
      password: string;
    };
    export type JwtToken = {
      email: string;
      iss: string
    };
  }
  