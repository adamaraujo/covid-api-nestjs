import { CarregarVacinaRepository } from "src/data/protocols";
import { CarregarVacina } from "src/domain/usecases";

export class HttpCarregarVacina implements CarregarVacina {
  constructor(private readonly carregarVacinaRepository: CarregarVacinaRepository) { }
  
  async carregar(parametros: CarregarVacina.Parametros): Promise<CarregarVacina.Resultado> {
    return await this.carregarVacinaRepository.carregar(parametros);
  }
}