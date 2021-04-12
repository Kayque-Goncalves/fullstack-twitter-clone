import { HttpRequest, HttpResponse } from './ports/http'
import { MissingParamError } from './errors/missingParamsError'
import { badRequest, ok, serverError } from './helpers/httpHelper'
import { RegisterUser } from '../../../useCases/registerUserOnDatabase/registerUser'
import { RegisterUserResponse } from '../../../useCases/registerUserOnDatabase/registerUserResponse'

export class RegisterUserController {
  private readonly registerUser: RegisterUser

  constructor (registerUser: RegisterUser) {
    this.registerUser = registerUser
  }

  async handle (httpRequest: HttpRequest): Promise<HttpRequest> {
    try {

      if (!httpRequest.body.name || !httpRequest.body.loginOption) {
        const field = !httpRequest.body.name ? 'name' : 'loginOption'
        return badRequest(new MissingParamError(field))
      }

      const userData = { 
        name: httpRequest.body.name, 
        loginOption: httpRequest.body.loginOption,
        password: httpRequest.body.password,
        birth: httpRequest.body.birth
      }
      const registerUserResponse: RegisterUserResponse = await this.registerUser.registerUserOnDatabase(userData)

      if(registerUserResponse.isLeft()) {
        return badRequest(registerUserResponse.value)
      }

      return ok(userData)

    } catch (error) {
      
      return serverError('internal')
    }
  }
}

