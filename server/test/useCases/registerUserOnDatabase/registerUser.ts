import { RegisterUserResponse } from './registerUserResponse'
import { UserData } from '../../entities/user/userData'

export interface RegisterUser {
  registerUserOnDatabase: (user: UserData) => Promise<RegisterUserResponse>
}
