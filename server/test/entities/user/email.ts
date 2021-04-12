import { Either, left, right } from '../../shared/either'
import { InvalidEmailError } from './errors/invalidEmail'

export class LoginOption {
  private readonly loginOption: string

  private constructor (loginOption: string) {
    this.loginOption = loginOption
    Object.freeze(this)
  }

  static create (loginOption: string): Either<InvalidEmailError, LoginOption> {
    if (!LoginOption.validate(loginOption)) {
      return left(new InvalidEmailError(loginOption))
    }
    return right(new LoginOption(loginOption))
  }

  get value (): string {
    return this.loginOption
  }

  static validate (loginOption: string): boolean {
    var tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    if (!loginOption) {
      return false
    }
    if (loginOption.length > 256) {
      return false
    }
    if (!tester.test(loginOption)) {
      return false
    }
    var [account, address] = loginOption.split('@')
    if (account.length > 64) {
      return false
    }
    var domainParts = address.split('.')
    if (domainParts.some(function (part) {
      return part.length > 63
    })) {
      return false
    }
    return true
  }
}
