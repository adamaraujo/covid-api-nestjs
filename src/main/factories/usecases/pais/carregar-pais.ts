import { HttpCarregarPais } from 'src/data/usecases';
import { CarregarPais } from 'src/domain/usecases';
import { PaisRepository } from 'src/infra/api/repositories/pais/pais.repository';
import { CARREGAR_PAIS } from '../../providers';

export const carregarPaisFactory = {
  provide: CARREGAR_PAIS,
  useFactory: (paisRepository: PaisRepository): CarregarPais => {
    return new HttpCarregarPais(paisRepository);
  },
  inject: [PaisRepository],
};
