import axios from "axios";
import { HttpClient } from "src/data/protocols";

export class AxiosHttpClient implements HttpClient {
  async get <T = any> (url: HttpClient.Parametros): Promise<T> {
    return await axios.get(url);
  }
}