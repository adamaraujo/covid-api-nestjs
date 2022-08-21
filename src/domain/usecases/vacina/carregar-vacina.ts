import Vacina from 'src/domain/models/vacina';

export interface CarregarVacina {
  carregar: (
    pais: CarregarVacina.Parametros,
  ) => Promise<CarregarVacina.Resultado>;
}

export namespace CarregarVacina {
  export type Parametros = string;
  export type Resultado = Vacina;
}
