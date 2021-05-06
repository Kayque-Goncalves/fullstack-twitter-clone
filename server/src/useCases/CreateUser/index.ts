import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";

const createUserCase = new CreateUserCase
const createUserController = new CreateUserController(createUserCase)

export { createUserController }
