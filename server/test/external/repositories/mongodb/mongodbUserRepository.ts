import { UserRepository } from '../../../useCases/ports/userRepository'
import { UserData } from '../../../entities/user/userData'
import { MongoHelper } from './helpers/mongo-helper'

export class MongodbUserRepository implements UserRepository {
  async findAllUsers (): Promise<UserData[]> {
    return await MongoHelper.getCollection('users').find().toArray()
  }

  async findUserByloginOption (loginOption: string): Promise<UserData> {
    const userCollection = MongoHelper.getCollection('users')
    const result = await userCollection.findOne({ loginOption: loginOption })
    return result
  }

  async create (user: UserData): Promise<void> {
    const userCollection = MongoHelper.getCollection('users')
    const exists = await this.exists(user.loginOption)

    if (!exists) await userCollection.insertOne(user)
  }

  async exists (loginOption: string): Promise<boolean> {
    const result = await this.findUserByloginOption(loginOption)

    if (result != null) {
      if (result.loginOption === loginOption) {
        return true
      }
    }

    return false
  }
}
