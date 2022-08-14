import { CarregarPais } from "src/domain/usecases";

export interface CarregarPaisRepository {
  carregar: (parametros: CarregarPaisRepository.Parametros) => Promise<CarregarPaisRepository.Resultado>;
}

export namespace CarregarPaisRepository {
  export type Parametros = CarregarPais.Parametros;
  export type Resultado = CarregarPais.Resultado;
}