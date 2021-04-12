import { Router } from 'express'
import { makeRegisterUserController } from '../factories/register'
import { adaptRoute } from '../adapters/expressRouterAdapter'

export default (router: Router): void => {
  router.post('/register', adaptRoute(makeRegisterUserController()))
}
