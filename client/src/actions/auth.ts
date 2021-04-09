import * as api from '../api/index'

export const signup = (formData: any, history: any) => async (dispatch: any) => {
  try {
    const { data } = await api.signUp(formData)

    dispatch({ type: 'AUTH', data })

    history.push('/home')
  } catch (err) {
    console.log(err)
  }
}
