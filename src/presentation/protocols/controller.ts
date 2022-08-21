import { HttpResponse } from ".";

export interface Controller<T = any> {
  lidar: (requisicao: T) => Promise<HttpResponse>
}