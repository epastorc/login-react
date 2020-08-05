declare module 'RootType' {
  export type Services = typeof import('./index').default;
}
