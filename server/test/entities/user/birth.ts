
import { Either, left, right } from "../../shared/either"
import { InvalidBirthError } from "./errors/invalidBirth"

export class Birth {
  private readonly birth: string

  private constructor (birth: string) {
    this.birth = birth
    Object.freeze(this)
  }

  static create (birth: string): Either<InvalidBirthError, Birth> {
    if (!Birth.validate(birth)) {
      return left(new InvalidBirthError(birth))
    }
    return right(new Birth(birth))
  }

  get value (): string {
    return this.birth
  }

  static validate (birth: string): boolean {
    if (!birth || birth.trim().length < 2 || birth.trim().length > 255) {
      return false
    }
    return true
  }
}
