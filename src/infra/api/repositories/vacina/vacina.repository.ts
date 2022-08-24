import { Inject } from '@nestjs/common';
import { CarregarVacinaRepository } from 'src/data/protocols';
import { CarregarVacina } from 'src/domain/usecases';
import { AxiosHttpClient, VACINA_REPOSITORY } from 'src/infra/axios';

export class VacinaRepository implements CarregarVacinaRepository {
  constructor(
    @Inject(VACINA_REPOSITORY)
    private readonly axiosClient: AxiosHttpClient,
  ) {}

  async carregar(
    pais: CarregarVacina.Parametros,
  ): Promise<CarregarVacina.Resultado> {
    const response = await this.axiosClient.get(
      `https://covid-api.mmediagroup.fr/v1/vaccines?country=${pais}`,
    );

    const { All } = response.data;

    const vacina = {
      total_doses_aplicadas: All.administered,
      pessoas_vacinadas: All.people_vaccinated,
      pessoas_parcialmente_vacinadas: All.people_partially_vaccinated,
    };

    return vacina;
  }
}
