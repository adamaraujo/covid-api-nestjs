import Estado from "src/domain/models/estado";
import Pais from "src/domain/models/pais";

export interface CarregarPais {
  carregar: (parametros: CarregarPais.Parametros) => Promise<CarregarPais.Resultado>
}

export namespace CarregarPais {
  export type Parametros = {
    pais: string;
  }
  export type Resultado = {
    pais: Pais,
    estados: Estado[]
  }
}