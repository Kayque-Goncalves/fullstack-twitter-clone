import { Router } from 'express'
import { authMiddleware } from './middlewares/authMiddleware'
import { authenticationController } from './useCases/Authentication'
import { createUserController } from './useCases/CreateUser'

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})

router.get('/users', authMiddleware, (request, response) => {
  return createUserController.index(request, response)
})

router.post('/auth', (request, response) => {
  return authenticationController.handle(request, response)
})

export { router }
