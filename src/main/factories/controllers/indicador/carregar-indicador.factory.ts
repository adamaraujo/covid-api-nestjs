import { Inject } from '@nestjs/common';
import { CarregarPais, CarregarVacina } from 'src/domain/usecases';
import { CarregarIndicadorController } from 'src/presentation/controllers';
import { Controller } from 'src/presentation/protocols';
import { CARREGAR_PAIS, CARREGAR_VACINA } from '../../providers';

export class ConstruirCarregarIndicadorController {
  constructor(
    @Inject(CARREGAR_PAIS)
    private readonly carregarPais: CarregarPais,
    @Inject(CARREGAR_VACINA)
    private readonly carregarVacina: CarregarVacina,
  ) {}

  public fabricar(): Controller {
    return new CarregarIndicadorController(
      this.carregarPais,
      this.carregarVacina,
    );
  }
}
