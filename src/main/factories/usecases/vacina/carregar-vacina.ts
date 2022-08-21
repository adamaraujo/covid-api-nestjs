import { HttpCarregarVacina } from 'src/data/usecases';
import { CarregarVacina } from 'src/domain/usecases';
import { VacinaRepository } from 'src/infra/api/repositories/vacina/vacina.repository';
import { CARREGAR_VACINA } from '../../providers';

export const carregarVacinaFactory = {
  provide: CARREGAR_VACINA,
  useFactory: (vacinaRepository: VacinaRepository): CarregarVacina => {
    return new HttpCarregarVacina(vacinaRepository);
  },
  inject: [VacinaRepository],
};
