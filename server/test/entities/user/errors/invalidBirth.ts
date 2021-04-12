export class InvalidBirthError extends Error implements DomainError {
  constructor (birth: string) {
    super(`The birth "${birth}" is invalid.`)
    this.name = 'InvalidPasswordError'
  }
}
