import { Provider } from '@nestjs/common';
import { AxiosHttpClient, VACINA_REPOSITORY } from '../axios';

export const vacinaProvider: Provider = {
  provide: VACINA_REPOSITORY,
  useFactory: () => {
    return new AxiosHttpClient();
  },
};
