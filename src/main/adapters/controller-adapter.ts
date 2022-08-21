import { Controller, HttpResponse } from 'src/presentation/protocols';

export const controllerAdapter = async (
  controller: Controller,
  requisicao?: any,
): Promise<HttpResponse> => {
  return await controller.lidar(requisicao);
};
