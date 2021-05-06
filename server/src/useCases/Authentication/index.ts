import { AuthenticationController } from "./AuthenticationController";
import { AuthenticationCase } from "./AuthenticationCase";

const authenticationCase = new AuthenticationCase()
const authenticationController = new AuthenticationController(authenticationCase);

export { authenticationController }