import { CarregarVacina } from "src/domain/usecases";

export interface CarregarVacinaRepository {
  carregar: (parametros: CarregarVacinaRepository.Parametros) => Promise<CarregarVacinaRepository.Resultado>;
}

export namespace CarregarVacinaRepository {
  export type Parametros = CarregarVacina.Parametros;
  export type Resultado = CarregarVacina.Resultado;
}