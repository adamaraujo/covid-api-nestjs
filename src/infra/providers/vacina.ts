import { Provider } from '@nestjs/common';
import { AxiosHttpClient, VACINA_REPOSITORY } from '../axios';

export const vacinaRepository: Provider = {
  provide: VACINA_REPOSITORY,
  useFactory: () => {
    return new AxiosHttpClient();
  },
};
