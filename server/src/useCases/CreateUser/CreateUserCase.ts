import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../repositories/UserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

class CreateUserCase {
  constructor () {

  }

  async execute(data: ICreateUserRequestDTO) {
    const userRepository = getCustomRepository(UserRepository)

    const userExists = await userRepository.findOne(data.loginOption)
    if (userExists) throw new Error('User already exists.')

    const user = userRepository.create(data)

    await userRepository.save(user)
  }
}

export { CreateUserCase }
