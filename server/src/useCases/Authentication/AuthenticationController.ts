import { Request, Response } from 'express'
import { AuthenticationCase } from './AuthenticationCase'

class AuthenticationController {
  private authenticationCase: AuthenticationCase

  constructor(authenticationCase: AuthenticationCase){
    this.authenticationCase = authenticationCase
  }

  async handle(request: Request, response: Response) {
    const { _id, password } = request.body

    try {
      let JWT_token = await this.authenticationCase.execute({
        _id,
        password
      })

      return response.status(200).json(JWT_token)
    
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected Error'
      })
    }
    
  }
}

export { AuthenticationController }
