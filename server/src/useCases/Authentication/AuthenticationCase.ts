import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { getCustomRepository } from "typeorm";

import { UserRepository } from "../../repositories/UserRepository";
import { IAuthenticationRequestDTO } from './AuthenticationDTO'

class AuthenticationCase {
  async execute(data: IAuthenticationRequestDTO) {
    const authRepository = getCustomRepository(UserRepository)
    const { _id, password } = data

    const user = await authRepository.findOne({ where: {_id} })
    if (!user) throw new Error('User not found.')

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) throw new Error('Incorrect credentials.')

    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1800s' })
    delete user.password

    return { user, token }
  }
}

export { AuthenticationCase }
