import { CarregarPais, CarregarVacina } from 'src/domain/usecases';
import { ok, serverError } from 'src/presentation/helpers';
import { Controller, HttpResponse } from 'src/presentation/protocols';

export class CarregarIndicadorController implements Controller {
  constructor(
    private readonly carregarPais: CarregarPais,
    private readonly carregarVacina: CarregarVacina,
  ) {}

  async lidar(): Promise<HttpResponse> {
    try {
      const PAIS = 'Brazil';

      const { pais, estados } = await this.carregarPais.carregar(PAIS);
      const vacina = await this.carregarVacina.carregar(PAIS);

      const indicador = {
        pais: {
          pais,
          vacina,
        },
        estados,
      };

      return ok(indicador);
    } catch (error) {
      return serverError(error);
    }
  }
}
