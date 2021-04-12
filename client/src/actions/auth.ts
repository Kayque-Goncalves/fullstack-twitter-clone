import * as api from '../api/index'

export const signup = (userData: any, history: any) => async (dispatch: any) => {
  try {
    const { data } = await api.signUp(userData)

    dispatch({ type: 'AUTH', data })

    history.push('/home')
  } catch (err) {
    console.log(err)
  }
}
