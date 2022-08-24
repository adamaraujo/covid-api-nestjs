import { Module } from '@nestjs/common';
import { ConstruirCarregarIndicadorController } from 'src/main/factories/controllers';
import { FactoryModule } from 'src/main/factories/usecases/factory.module';
import { IndicadorController } from './indicador.controller';

@Module({
  imports: [FactoryModule],
  controllers: [IndicadorController],
  providers: [ConstruirCarregarIndicadorController],
})
export class IndicadorModule {}
