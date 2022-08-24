import { Inject } from '@nestjs/common';
import { Paises } from 'src/data/enums';
import { CarregarPaisRepository } from 'src/data/protocols';
import Estado from 'src/domain/models/estado';
import { CarregarPais } from 'src/domain/usecases';
import { AxiosHttpClient, PAIS_REPOSITORY } from 'src/infra/axios';

export class PaisRepository implements CarregarPaisRepository {
  constructor(
    @Inject(PAIS_REPOSITORY)
    private readonly axiosClient: AxiosHttpClient,
  ) {}

  async carregar(
    pais: CarregarPais.Parametros,
  ): Promise<CarregarPais.Resultado> {
    const response = await this.axiosClient.get(
      `https://covid-api.mmediagroup.fr/v1/cases?country=${pais}`,
    );

    const { All, ...rest } = response.data;

    const estados: Estado[] = [];

    for (const estado in rest) {
      estados.push({
        nome: estado,
        confirmados: rest[estado].confirmed,
        obitos: rest[estado].deaths,
        ultima_atualizacao: new Date(rest[estado].updated).toLocaleString(),
      });
    }

    return {
      pais: {
        nome: Paises[pais],
        numero_populacao: All.population,
        expectativa_vida: Number(All.life_expectancy),
        total_casos_confirmados: All.confirmed,
        total_casos_recuperados: All.recovered,
        total_obitos: All.deaths,
      },
      estados: estados,
    };
  }
}
