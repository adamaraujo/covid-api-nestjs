export interface HttpClient {
  get: <T = any>(parametros: HttpClient.Parametros) => Promise<T>;
}

export namespace HttpClient {
  export type Parametros = string;
}
