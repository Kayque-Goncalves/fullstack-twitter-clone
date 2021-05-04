import { API } from '../..'
import { IUserData } from './IUserData'

export const createAccount = (userData: IUserData) => API.post('/api/register', userData)
