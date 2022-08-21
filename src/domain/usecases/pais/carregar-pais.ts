import Estado from 'src/domain/models/estado';
import Pais from 'src/domain/models/pais';

export interface CarregarPais {
  carregar: (pais: CarregarPais.Parametros) => Promise<CarregarPais.Resultado>;
}

export namespace CarregarPais {
  export type Parametros = string;
  export type Resultado = {
    pais: Pais;
    estados: Estado[];
  };
}
