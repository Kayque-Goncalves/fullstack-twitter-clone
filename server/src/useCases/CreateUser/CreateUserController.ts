import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

import { CreateUserCase } from './CreateUserCase'

class CreateUserController {
  private createUserCase: CreateUserCase

  constructor(createUserCase: CreateUserCase) {
    this.createUserCase = createUserCase
  }

  index(request: Request, response: Response) {
    return response.status(200).json({
      message: 'JWT is working',
      userId: request.userId
    })
  }

  async handle(request: Request, response: Response) {
    const { _id, name, loginOption, password, birth } = request.body

    const hashedPassword = await bcrypt.hash(password, 12)

    try {
      await this.createUserCase.execute({
        _id,
        name,
        loginOption,
        password: hashedPassword,
        birth
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected Error',
      })
    }
  }
}

export { CreateUserController }
