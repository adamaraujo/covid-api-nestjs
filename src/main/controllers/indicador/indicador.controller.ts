import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { controllerAdapter } from 'src/main/adapters';
import { ConstruirCarregarIndicadorController } from 'src/main/factories/controllers';

@ApiTags('Indicador')
@Controller('indicadores')
export class IndicadorController {
  constructor(
    private readonly construirCarregadorIndicadorController: ConstruirCarregarIndicadorController,
  ) {}

  @Get()
  async carregarIndicadores(@Res() res: any): Promise<any> {
    const resultado = await controllerAdapter(
      this.construirCarregadorIndicadorController.fabricar(),
    );

    return res.json(resultado);
  }
}
