import { Either, left, right } from "../../shared/either"
import { InvalidPasswordError } from "./errors/invalidPassword"

export class Password {
  private readonly password: string

  private constructor (password: string) {
    this.password = password
    Object.freeze(this)
  }

  static create (password: string): Either<InvalidPasswordError, Password> {
    if (!Password.validate(password)) {
      return left(new InvalidPasswordError(password))
    }
    return right(new Password(password))
  }

  get value (): string {
    return this.password
  }

  static validate (password: string): boolean {
    if (!password || password.trim().length < 2 || password.trim().length > 255) {
      return false
    }
    return true
  }
}
