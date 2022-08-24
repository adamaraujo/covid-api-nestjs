import { Module } from '@nestjs/common';
import { PaisRepository } from 'src/infra/api/repositories/pais/pais.repository';
import { VacinaRepository } from 'src/infra/api/repositories/vacina/vacina.repository';
import { paisProvider, vacinaProvider } from 'src/infra/providers';
import { carregarPaisFactory } from './pais';
import { carregarVacinaFactory } from './vacina';

@Module({
  providers: [
    VacinaRepository,
    PaisRepository,

    paisProvider,
    vacinaProvider,

    carregarPaisFactory,
    carregarVacinaFactory,
  ],
  exports: [carregarPaisFactory, carregarVacinaFactory],
  imports: [],
})
export class FactoryModule {}
