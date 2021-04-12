import { UserData } from '../../entities/user/userData'
import { UserRepository } from '../ports/userRepository'
import { left, right, Either } from '../../shared/either'
import { RegisterUser } from './registerUser'
import { RegisterUserResponse } from './registerUserResponse'
import { User } from '../../entities/user/user'
import { InvalidNameError } from '../../entities/user/errors/invalidName'
import { InvalidEmailError } from '../../entities/user/errors/invalidEmail'

export class RegisterUserOnDatabase implements RegisterUser {
  private readonly userRepository: UserRepository

  constructor (userRepo: UserRepository) {
    this.userRepository = userRepo
  }

  async registerUserOnDatabase (userData: UserData): Promise<RegisterUserResponse> {
    const userOrError: Either<InvalidNameError | InvalidEmailError, User> = User.create(userData)
    if (userOrError.isLeft()) return left(userOrError.value)

    const user: User = userOrError.value
    const exists = this.userRepository.exists(user.loginOption.value)
    if (!(await exists).valueOf()) await this.userRepository.create({ 
      name: user.name.value, 
      loginOption: user.loginOption.value, 
      password: user.password.value,
      birth: user.birth.value
    })

    return right(userData)
  }
}
