import { Provider } from '@nestjs/common';
import { AxiosHttpClient, PAIS_REPOSITORY } from '../axios';

export const paisProvider: Provider = {
  provide: PAIS_REPOSITORY,
  useFactory: () => {
    return new AxiosHttpClient();
  },
};
