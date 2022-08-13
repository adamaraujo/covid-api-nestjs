import Vacina from "src/domain/models/vacina";

export interface CarregarVacina {
  carregar: (parametros: CarregarVacina.Parametros) => Promise<CarregarVacina.Resultado>
}

export namespace CarregarVacina {
  export type Parametros = {
    pais: string;
  }
  export type Resultado = {
    vacina: Vacina;
  }
}