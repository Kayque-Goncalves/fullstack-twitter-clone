import { RegisterUserController } from '../../adapters/presentation/controllers/RegisterUserController'
import { Request, Response } from 'express'
import { HttpRequest } from '../../adapters/presentation/controllers/ports/http'

export const adaptRoute = (controller: RegisterUserController) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }
    const httpResponse = await controller.handle(httpRequest)
    response.status(200).json(httpResponse.body)
  }
}
