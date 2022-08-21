import { CarregarPais, CarregarVacina } from "src/domain/usecases";
import { ok, serverError } from "src/presentation/helpers";
import { Controller } from "src/presentation/protocols";

export class CarregarIndicador implements Controller {
  constructor(
    private readonly carregarPais: CarregarPais,
    private readonly carregarVacina: CarregarVacina
  ) { }
  
  async lidar(): Promise<any> {
    try {

      const PAIS = 'Brazil';

      const { pais, estados } = await this.carregarPais.carregar(PAIS);
      const vacina = await this.carregarVacina.carregar(PAIS);

      const indicador = {
        pais: {
          pais,
          vacina
        },
        estados
      }

      return ok(indicador);

    } catch (error) {
      return serverError(error);
    }
  }
}