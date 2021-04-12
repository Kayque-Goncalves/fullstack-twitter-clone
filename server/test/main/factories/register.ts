import { RegisterUserController } from '../../adapters/presentation/controllers/RegisterUserController'
import { RegisterUserOnDatabase } from '../../useCases/registerUserOnDatabase/registerUserOnDatabase'
import { MongodbUserRepository } from '../../external/repositories/mongodb/mongodbUserRepository'

export const makeRegisterUserController = (): RegisterUserController => {
  const mongodbUserRepository = new MongodbUserRepository()
  const registerUserOnDatabase = new RegisterUserOnDatabase(mongodbUserRepository)
  const registerUserController = new RegisterUserController(registerUserOnDatabase)
  
  return registerUserController
}
