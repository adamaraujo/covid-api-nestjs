import { CarregarPaisRepository } from 'src/data/protocols';
import { CarregarPais } from 'src/domain/usecases';

export class HttpCarregarPais implements CarregarPais {
  constructor(
    private readonly carregarPaisRepository: CarregarPaisRepository,
  ) {}

  async carregar(
    pais: CarregarPais.Parametros,
  ): Promise<CarregarPais.Resultado> {
    return await this.carregarPaisRepository.carregar(pais);
  }
}
