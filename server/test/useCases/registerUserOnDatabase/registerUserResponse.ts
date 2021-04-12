import { InvalidEmailError } from 'test/entities/user/errors/invalidEmail'
import { InvalidNameError } from 'test/entities/user/errors/invalidName'
import { Either } from '../../shared/either'
import { UserData } from '../../entities/user/userData'

export type RegisterUserResponse = Either<InvalidNameError | InvalidEmailError, UserData>
