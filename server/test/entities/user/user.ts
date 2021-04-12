import { UserData } from './userData'
import { LoginOption } from './email'
import { Name } from './name'
import { InvalidEmailError } from './errors/invalidEmail'
import { Either, left, right } from '../../shared/either'
import { InvalidNameError } from './errors/invalidName'
import { Password } from './password'
import { Birth } from './birth'
import { InvalidPasswordError } from './errors/invalidPassword'

export class User {
  public readonly name: Name
  public readonly loginOption: LoginOption
  public readonly password: Password
  public readonly birth: Birth

  private constructor (name: Name, loginOption: LoginOption, password: Password, birth: Birth) {
    this.name = name
    this.loginOption = loginOption
    this.password = password,
    this.birth = birth
    Object.freeze(this)
  }

  static create (userData: UserData): Either<InvalidNameError | InvalidEmailError | InvalidPasswordError, User> {
    const nameOrError: Either<InvalidNameError, Name> = Name.create(userData.name)
    const passwordOrError: Either<InvalidPasswordError, Password> = Password.create(userData.password)
    const birthOrError: any = Birth.create(userData.birth)
    const emailOrError: Either<InvalidEmailError, LoginOption> = LoginOption.create(userData.loginOption)

    if (nameOrError.isLeft()) {
      return left(nameOrError.value)
    }

    if (emailOrError.isLeft()) {
      return left(emailOrError.value)
    }

    if (passwordOrError.isLeft()) {
      return left(passwordOrError.value)
    }

    const name: Name = nameOrError.value
    const loginOption: LoginOption = emailOrError.value
    const password: Password = passwordOrError.value
    const birth: Birth = birthOrError.value
    return right(new User(name, loginOption, password, birth))
  }
}
