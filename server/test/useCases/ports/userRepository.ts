import { UserData } from '../../entities/user/userData'

export interface UserRepository {
  findAllUsers: () => Promise<UserData[]>
  findUserByloginOption: (loginOption: string) => Promise<UserData>
  create: (user: UserData) => Promise<void>
  exists: (loginOption: string) => Promise<boolean>
}
